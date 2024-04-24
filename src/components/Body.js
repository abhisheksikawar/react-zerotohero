import RestaurantCards from "./RestaurantCards"
import restaurants from "../utils/MockData"
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";



const Body=()=>{
    useEffect(()=>{fetchData()},[]);
    const fetchData= async()=>{
        const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json=await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    let [restaurantList,setRestaurantList]=useState([]);
    const [filteredRestaurantList,setFilteredRestaurantList]=useState([]);

    const[searchValue,setSerchValue]=useState("");

    function filteredList(){
    
        setRestaurantList(restaurantList.filter(r=>r.info.avgRating>4.3));
    }

    return restaurantList.length===0?<Shimmer/>:(
        <div className="body">
            <div className="search">
                <input type="text" value={searchValue} onChange={(e)=>{
                    setSerchValue(e.target.value);

                }}/>
                <button onClick={()=>{
                    console.log(restaurantList.filter(r=> r.info.name.toLowerCase().includes(searchValue.toLowerCase())));
                    setFilteredRestaurantList(restaurantList.filter(r=> r.info.name.toLowerCase().includes(searchValue.toLowerCase())))
                }}>Search</button>
            </div>
            <div className="top-rated-div">
                <button className="top-rated-button" onClick={()=>{                  
                    filteredList();
                }}>Top Rated Restaurant</button>
                
            </div>
            <div className="restaurant-cards">
                {
                    filteredRestaurantList.map(res=>
                    <Link to={"/restaurant/"+res.info.id}><RestaurantCards key={res.info.id} resData={res}/></Link>)
                }

            </div>

        </div>
    )
}

export default Body