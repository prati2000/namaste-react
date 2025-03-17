import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } =
    resData;
  return (
    <div className="res-card">
      <img className="res-logo" alt="food" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRatingString}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
