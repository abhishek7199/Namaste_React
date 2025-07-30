import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async function () {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");

        const json = await data.json();
        //optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants);
        console.log(json);

    }

    const [searchText, setSearchText] = useState("");

    //Conditional Rendering
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }
    console.log("Body component")

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="search" name="search" id="search" placeholder="search here..." value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="search-btn"
                        onClick={() => {
                            const filteredData = listOfRestaurants.map((res) => {
                                res.info.name.includes(searchText);
                            })
                            setListOfRestaurants(filteredData);
                        }}
                    >Search</button>
                </div>
                <button className="top-rated-res"
                    onClick={() => {
                        let filteredData = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                        setListOfRestaurants(filteredData);
                    }}
                >Top rated restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)}
            </div>
        </div>
    )
}

export default Body;