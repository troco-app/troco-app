import { FaStar } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(<FaStar key={i} color={i <= rating ? "#ffc107" : "#e4e5e9"} />);
  }

  return <div>{stars}</div>;
};

export default StarRating;
