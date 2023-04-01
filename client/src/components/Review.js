import React, { useEffect } from 'react';

function Review({ user_id, comment, rating }) {

  return (
    <div className="card mb-3">
      <div className="card-header">{user_id}</div>
      <div className="card-body">
        <p className="card-text">{comment}</p>
        <div className="text-warning">
          {Array.from({ length: rating }, (_, index) => (
            <i key={index} className="fas fa-star"></i>
          ))}
          {Array.from({ length: 5 - rating }, (_, index) => (
            <i key={index} className="far fa-star"></i>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
