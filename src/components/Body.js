import RestaurantCards from "./RestaurantCards"
import restaurants from "../utils/MockData"
import { useState } from "react";



const Body=()=>{
let [restaurantList,setRestaurantList]=useState(restaurants);
console.log(restaurantList)

function filteredList(){
    
     setRestaurantList(restaurantList.filter(r=>r.info.avgRating>4.3));
}

    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="top-rated-div">
                <button className="top-rated-button" onClick={()=>{                  
                    filteredList();
                }}>Top Rated Restaurant</button>
                
            </div>
            <div className="restaurant-cards">
                {
                    restaurantList.map(res=><RestaurantCards key={res.info.id} resData={res}/>)
                }

            </div>

        </div>
    )
}

export default Body