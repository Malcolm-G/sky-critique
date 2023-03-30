import React, { useState } from 'react';

function ReviewForm({ onSubmit }) {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, comment, rating });
    setUsername('');
    setComment('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="comment" className="form-label">
          Comment
        </label>
        <textarea
          className="form-control"
          id="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="rating" className="form-label">
          Rating
        </label>
        <select
          className="form-control"
          id="rating"
          value={rating}
          onChange={(event) => setRating(Number(event.target.value))}
        >
          <option value="0">Select a rating...</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ReviewForm;
