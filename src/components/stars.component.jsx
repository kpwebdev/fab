import StarIcon from "../assets/star.svg?react";
import { useMemo } from "react";

const Stars = ({ num }) => {
  const stars = useMemo(() => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(<StarIcon key={i} />);
    }
    return stars;
  }, [num]);

  return <div className="t-flex t-gap-f-8">{stars}</div>;
};

export default Stars;
