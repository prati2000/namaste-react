import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  let [listOfTopRestaurants, setListOfTopRestaurants] = useState(resList);

  useEffect(() => {
    fetchdata();

    console.log("useffcet called");
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonResponse = await data.json();
    console.log(jsonResponse);

    const restaurants =
      data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log("Filtered Restaurants:", restaurants);
    setListOfTopRestaurants(restaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filer-btn"
          onClick={() => {
            setListOfTopRestaurants(
              listOfTopRestaurants.filter((res) => res.info.avgRating >= 4.5)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfTopRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
