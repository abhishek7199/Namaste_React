import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockData";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="search-bar">
                <input type="search" name="search" id="search" placeholder="search here..." />
                <button className="filtered-data"
                    onClick={() => {
                        let filteredData = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                        setListOfRestaurants(filteredData);
                    }}
                >Filtered Data</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    )
}

export default Body;