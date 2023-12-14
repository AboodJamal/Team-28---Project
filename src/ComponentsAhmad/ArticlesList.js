import React, { useState, useEffect } from 'react';
import Article from './Article';
import { db } from '../firebaseConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [lastVisible, setLastVisible] = useState(null);
    const [loading, setLoading] = useState(false);

    const loadArticles = async () => {
        setLoading(true);
        const querySnapshot = await db.collection("articles")
            .orderBy("timestamp", "desc")
            .limit(4)
            .get();

        const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
        setLastVisible(lastVisibleDoc);

        const loadedArticles = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setArticles(loadedArticles);
        setLoading(false);
    };

    const loadMoreArticles = async () => {
        if (lastVisible && !loading) {
            setLoading(true);
            const nextQuerySnapshot = await db.collection("articles")
                .orderBy("timestamp", "desc")
                .startAfter(lastVisible)
                .limit(4)
                .get();

            const newLastVisible = nextQuerySnapshot.docs[nextQuerySnapshot.docs.length - 1];
            setLastVisible(newLastVisible);

            const newArticles = nextQuerySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setArticles(prev => [...prev, ...newArticles]);
            setLoading(false);
        }
    };

    useEffect(() => {
        loadArticles();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="title-page1">Popular Articles</h2>
            <div className="list-group" id="articles-list">
                {articles.map(article => (
                    <Article
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        summary={article.summary}
                        initialLikes={article.initialLikes || 0}
                        initialDislikes={article.initialDislikes || 0}
                    />
                ))}
            </div>
            {loading ? (
                <p>Loading more articles...</p>
            ) : (
                <div className="centered-container">
                    <button type="button" className="btn btn-load-more" onClick={loadMoreArticles}>
                        Load more
                    </button>
                </div>
            )}
        </div>
    );
};

export default ArticlesList;
