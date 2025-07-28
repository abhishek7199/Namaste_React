import CDN_URL from "./utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info;
    return (
        <div className="res-card">
            <img src={CDN_URL + resData.info.cloudinaryImageId} alt="res-card-logo" />
            <h3>{name}</h3>
            <p>{cuisines.join(" , ")}</p>
            <p>{avgRating} ⭐</p>
            <p>{costForTwo}</p>
            <p>{resData.info.sla.deliveryTime} minutes</p>
        </div>
    )
}

export default RestaurantCard;