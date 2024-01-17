import { fetchReview } from "@/app/lib/data";
import { Fragment, useState, ChangeEvent, FormEvent } from "react";

function Reviews() {
  const [isShowReviews, setShowReviews] = useState(false);

  const [reviewData, setReviewData] = useState({
    name: "",
    email: "",
    review_title: "",
    body_of_review: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const data = fetchReview(reviewData);

    setReviewData({
      name: "",
      email: "",
      review_title: "",
      body_of_review: "",
    });
  };

  return (
    <div className="m-8 border p-6 overflow-hidden">
      <h2 className="text-2xl font-bold">Customer Reviews</h2>
      <div className="mt-4 flex justify-between">
        <p className="text-sm">No reviews yet</p>
        <a
          className="text-xs uppercase"
          onClick={(e) => {
            e.preventDefault();
            setShowReviews((prev) => !prev);
          }}
          href=""
        >
          write a review
        </a>
      </div>
      {isShowReviews && (
        <Fragment>
          <hr className="my-4"></hr>
          <h3 className="font-semibold">Write a review</h3>
          <form onSubmit={handleSubmit} className="mt-4" action="">
            <div>
              <label className="text-sm" htmlFor="name">
                Name
              </label>
              <input
                className="mt-1 border w-full text-sm rounded px-4 py-2"
                id="name"
                type="text"
                value={reviewData.name}
                onChange={(e) => {
                  e.preventDefault();
                  setReviewData({...reviewData, name: e.target.value});
                }}
                placeholder="Enter your name"
              ></input>
            </div>
            <div className="mt-3">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="mt-1 border w-full text-sm rounded px-4 py-2"
                id="email"
                type="email"
                value={reviewData.email}
                onChange={(e) => {
                  e.preventDefault();
                  setReviewData({...reviewData, email: e.target.value});
                }}
                placeholder="john.smith@example.com"
              ></input>
            </div>
            <div className="mt-3">
              <label className="text-sm" htmlFor="review-title">
                Review Title
              </label>
              <input
                className="mt-1 border w-full text-sm rounded px-4 py-2"
                id="review-title"
                type="text"
                value={reviewData.review_title}
                onChange={(e) => {
                  e.preventDefault();
                  setReviewData({...reviewData, review_title: e.target.value});
                }}
                placeholder="Give your review a title"
              ></input>
            </div>
            <div className="mt-3">
              <label className="text-sm" htmlFor="review-body">
                Body of Review (1500)
              </label>
              <textarea
                className="mt-1 border w-full text-sm min-h-36 rounded px-4 py-3"
                id="review-body"
                value={reviewData.body_of_review}
                onChange={(e) => {
                  e.preventDefault();
                  setReviewData({...reviewData, body_of_review: e.target.value});
                }}
                placeholder="Write your comments here"
              ></textarea>
            </div>
            <input
              className="mt-4 uppercase text-sm cursor-pointer border border-yankees-blue hover:bg-white hover:text-yankees-blue float-right bg-yankees-blue text-white px-6 py-2 rounded"
              type="submit"
              value="Submit Review"
            ></input>
          </form>
        </Fragment>
      )}
    </div>
  );
}

export default Reviews;
