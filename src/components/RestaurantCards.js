import { CDN_BASE_URL } from "../utils/Constants";
const RestaurantCards=(props)=>{
    const { resData}=props;
    return (
        <div className="max-w-56 rounded overflow-hidden shadow-lg m-6 h-60">
            <img className="w-56 h-32 object-cover" src={CDN_BASE_URL+resData.info.cloudinaryImageId}/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(",")}</h4>
            <h6>{resData.info.avgRating}</h6>
            <h6>{resData.info.sla.deliveryTime} minutes</h6>

        </div>
    )
}
export default RestaurantCards