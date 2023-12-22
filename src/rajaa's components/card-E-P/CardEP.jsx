import React from 'react';
import './CardEP.css';

import 'bootstrap-icons/font/bootstrap-icons.css';

function CardEP({ data }) {
  const renderAvatars = () => {
    if (data.index === 0) {

      return (
        <>
          <img src={data.avatar1} alt="Avatar 1" className="small-avatar" />
          <img src={data.avatar2} alt="Avatar 2" className="small-avatar" />
          <img src={data.avatar3} alt="Avatar 3" className="small-avatar" />
          <img src={data.avatar4} alt="Avatar 4" className="small-avatar" />
        </>
      );
    } else if (data.index === 1) {

      return (
        <>
          <img src={data.avatar1} alt="Avatar 1" className="small-avatar" />
          <img src={data.avatar3} alt="Avatar 3" className="small-avatar" />
          <img src={data.avatar4} alt="Avatar 4" className="small-avatar" />
        </>
      );
    } else {

      return (
        <>
          <img src={data.avatar4} alt="Avatar 4" className="small-avatar" />
          <img src={data.avatar2} alt="Avatar 2" className="small-avatar" />
        </>
      );
    }
  };

  return (
    <div className="card-container">
      <div className="card explore">
        <img className="cardimg" src={data.backgroundImage} alt="Group Background" />
        <div className="cardinfo">
          <img className="cardavatar" src={data.avatarImage} alt="Group Avatar" />
          <div className="cardtitle">{data.title}</div>
          <div className="cardsubtitle">
            <i className={data.icon}></i> {data.description}
          </div>
          <div className="cardstats">
            <div className="statsitem">
              <h5 className="num_mem">{data.memberCount}</h5>
              <p className="mem">Members</p>
            </div>
            <div className="statsitem1">
              <h5 className="num_post">{data.postsPerDay}</h5>
              <p className="mem">Post per day</p>
            </div>
          </div>
          <div className="card__avatars">
            {renderAvatars()}
            <div className="blue__circle">
              <span className="number">{data.number}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardEP;