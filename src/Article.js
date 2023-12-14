import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { db } from './firebaseConfig'; 

const Article = ({ id, title, summary, initialLikes, initialDislikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);

  const incrementLikes = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    db.collection("articles").doc(id).update({ initialLikes: newLikes });
  };

  const incrementDislikes = () => {
    const newDislikes = dislikes + 1;
    setDislikes(newDislikes);
    db.collection("articles").doc(id).update({ initialDislikes: newDislikes });
  };

  return (
    <div className="list-group-item list-group-item-action flex-column align-items-start stdd">
      <div className="row">
        <div className="col">
          <h5 className="mb-1">{title}</h5>
          <p className="mb-1">{summary}</p>
        </div>
        <div className="col-auto std">
          <div className="icon-counter text-center " >
            <button type="button" className="btn one" onClick={incrementLikes}>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span className="count">{likes}</span>
            </button>
            <button type="button" className="btn btn-secondary two" onClick={incrementDislikes}>
              <FontAwesomeIcon icon={faThumbsDown} />
              <span className="count">{dislikes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
