import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockData";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async function () {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6378641&lng=77.4600205&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // setListOfRestaurants = json.data.cards[0].card.card.imageGridCards.info;
        // console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurant[0].info);
        console.log(json);
    }

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