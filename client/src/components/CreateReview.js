// import React, { useState } from 'react';

// function ReviewForm({ onSubmit }) {
//   const [username, setUsername] = useState('');
//   const [comment, setComment] = useState('');
//   const [rating, setRating] = useState(0);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit({ username, comment, rating });
//     setUsername('');
//     setComment('');
//     setRating(0);
//   };

//   return (
//     <form className='my-5 container' onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="comment" className="form-label">
//           Comment
//         </label>
//         <textarea
//           className="form-control"
//           id="comment"
//           value={comment}
//           onChange={(event) => setComment(event.target.value)}
//         ></textarea>
//       </div>
//       <div className="mb-3">
//         <label htmlFor="rating" className="form-label">
//           Rating
//         </label>
//         <select
//           className="form-control"
//           id="rating"
//           value={rating}
//           onChange={(event) => setRating(Number(event.target.value))}
//         >
//           <option value="0">Select a rating...</option>
//           <option value="1">1 Star</option>
//           <option value="2">2 Stars</option>
//           <option value="3">3 Stars</option>
//           <option value="4">4 Stars</option>
//           <option value="5">5 Stars</option>
//         </select>
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Submit
//       </button>
//     </form>
//   );
// }

// export default ReviewForm;


import React, { useState } from 'react';

function CreateReview({ onReviewSubmit }) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit({ comment, rating });
    setComment('');
    setRating(1);
  };

  return (
    <form className='my-4 border p-2' onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="comment">Comment</label>
        <textarea
          className="form-control"
          id="comment"
          rows="3"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <select
          className="form-control"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit Review
      </button>
    </form>
  );
}

export default CreateReview;
