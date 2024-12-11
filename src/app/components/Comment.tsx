'use client';
import React, { useState } from 'react';
import { RxDotsHorizontal } from 'react-icons/rx'; // Import the dots icon

interface Review {
  id: number;
  comment: string;
  date: string;
  author: string;
}

export default function Comment() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [comment, setComment] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [reviewSubmitted, setReviewSubmitted] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showOptions, setShowOptions] = useState<number | null>(null); // Track which review's options to show

  // Handle form submission
  const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment === '' || author === '') {
      alert("Please provide both a comment and an author name.");
      return;
    }

    if (editingId) {
      // Edit existing review
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review.id === editingId ? { ...review, comment, author } : review
        )
      );
      setEditingId(null);
    } else {
      // Add new review
      const newReview: Review = {
        id: reviews.length + 1,
        comment,
        date: new Date().toLocaleDateString(),
        author,
      };
      setReviews([...reviews, newReview]);
    }

    setComment('');
    setAuthor('');
    setReviewSubmitted(true);

    // Reset the submission message after a few seconds
    setTimeout(() => setReviewSubmitted(false), 3000);
  };

  // Handle review edit
  const handleEdit = (id: number) => {
    const reviewToEdit = reviews.find((review) => review.id === id);
    if (reviewToEdit) {
      setComment(reviewToEdit.comment);
      setAuthor(reviewToEdit.author);
      setEditingId(id);
    }
  };

  // Handle review delete
  const handleDelete = (id: number) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  return (
    <div className='flex flex-col gap-6 mt-6'>
      <h4 className='font-medium'>Comments</h4>

      {/* Review Form */}
      <form onSubmit={handleReviewSubmit} className='flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <span className='font-medium'>Author:</span>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder='Your name'
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Write your review...'
          className='w-full p-2 border border-gray-300 rounded'
          rows={3}
        />
        <button
          type='submit'
          className=' styled-button self-start'
        >
          {editingId ? 'Update Comment' : 'Submit Comment'}
        </button>
        {reviewSubmitted && <p className="text-green-500">Thank you for your review!</p>}
      </form>

      {/* Display Reviews */}
      <div className='mt-4'>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className='border-b border-gray-300 py-4'>
             <div className='flex flex-row justify-between'>
             <p className='font-semibold'>{review.author}</p> 
              <div className='flex flex-col gap-2 mt-2'>
                {/* Dots icon to toggle visibility of options */}
                <RxDotsHorizontal
                  onClick={() => setShowOptions(showOptions === review.id ? null : review.id)}
                  className='cursor-pointer text-xl'
                />
                {/* Show edit and delete buttons if showOptions matches review id */}
                {showOptions === review.id && (
                  <>
                    <button
                      onClick={() => handleEdit(review.id)}
                      className='px-3 py-1 text-black border border-black rounded bg-gray-100'
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(review.id)}
                      className='px-3 py-1 text-white border border-black bg-black rounded'
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
             </div>
              <p className='text-sm text-gray-500'>{review.date}</p>
              <p className='mt-2'>{review.comment}</p>
            
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
  );
}
