function StarRating({ rating }) {
  // Here's the markup for a single star:
 <img
    alt=""
    className="gold-star"
    src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
  />
  // Your job is to repeat this element
  // based on the `rating` prop.
  // If the rating is 4, we need 4 copies.
return <div className="star-wrapper">
  {rating === 5 && Array(rating).fill(<img
    alt=""
    className="gold-star"
    src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
  />)}
  {rating === 4 && Array(rating).fill(<img
    alt=""
    className="gold-star"
    src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
  />)}
  {rating === 3 && Array(rating).fill(<img
    alt=""
    className="gold-star"
    src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
  />)}
  {rating === 2 && Array(rating).fill(<img
    alt=""
    className="gold-star"
    src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
  />)}
  {rating === 1 && Array(rating).fill(<img
    alt=""
    className="gold-star"
    src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
  />)}
  {rating === 0 && Array(rating).fill(<img
    alt=""
    className="gold-star"
    src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
  />)}
</div>;
}
export default StarRating;



