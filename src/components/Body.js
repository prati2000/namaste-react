import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfTopRestaurants, setListOfTopRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filer-btn"
          onClick={() => {
            listOfTopRestaurants = resList.filter(
              (res) => res.avgRatingString >= 4.5
            );
            setListOfTopRestaurants(listOfTopRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfTopRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
