import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import "./popylar.css"; // Your CSS styles for the component

const PopularQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "questions")); // Adjust if your collection name is different
        const questionsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setQuestions(questionsData);
      } catch (error) {
        console.error("Error fetching questions: ", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="container text-center">
      <div className='my-4'></div>
      <div className="popular-questions-container">
        <h2>Popular questions</h2>
        <div className="questions-list">
          {questions.map((question) => (
            <div key={question.id} className="question">
              {question.title} {/* Replace with your field name */}
            </div>
          ))}
          <button className="view-all-button">View all questions</button>
        </div>
      </div>
    </div>
  );
};

export default PopularQuestions;