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
        <div className="">
            <div className="mx-20 my-16 flex">
                <input className="ml-20 mr-4 appearance-none block w-9/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Search for restaurants and food" type="text" value={searchValue} onChange={(e)=>{
                    setSerchValue(e.target.value);

                }}/>
                <button className="inline-flex items-center px-10 text-lg font-medium text-center text-white bg-[#f5502f] rounded-lg hover:bg-[#D63922]"
                onClick={()=>{
                    console.log(restaurantList.filter(r=> r.info.name.toLowerCase().includes(searchValue.toLowerCase())));
                    setFilteredRestaurantList(restaurantList.filter(r=> r.info.name.toLowerCase().includes(searchValue.toLowerCase())))
                }}>Search</button>
            </div>
            <div className="mx-40 my-8">
                <button className="bg-gray-200 hover:bg-[#f5502f] text-gray-700 hover:text-white shadow-xl font-bold py-2 px-4 rounded-full" onClick={()=>{                  
                    filteredList();
                }}>Top Rated Restaurant</button>
                
            </div>
            <div className="flex flex-wrap mx-28 pl-8">
                {
                    filteredRestaurantList.map(res=>
                    <Link to={"/restaurant/"+res.info.id}><RestaurantCards key={res.info.id} resData={res}/></Link>)
                }

            </div>

        </div>
    )
}

export default Body