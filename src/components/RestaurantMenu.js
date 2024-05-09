import { useEffect, useState } from "react"
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom"
import useRestaurantMenuData from "../utils/useRestaurantMenuData"
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {


    const { resId } = useParams();
    const [showIndex,setShowIndex]=useState(0);

    const resMenu = useRestaurantMenuData(resId);
    if (resMenu === null) {
        return <Shimmer />
    }
    // const { itemCards } =
    // resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) =>
        category.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log("resmenu", resMenu);

    return <div className="w-8/12 m-auto">
        <h1 className="text-3xl mt-8 mb-4 font-bold font-mono">{resMenu[2].card.card.info.name}</h1>
        <div className="border rounded-2xl shadow-xl font-semibold p-2">
            <div className="flex items-center">
                <svg className="w-4 h-4 text-green-700 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{resMenu[2].card.card.info.avgRating} ({resMenu[2].card.card.info.totalRatingsString})</p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <p className="font-bold">{resMenu[2].card.card.info.costForTwoMessage}</p>
            </div>
            <div className="flex items-center pl-1 text-[#f5502f]">
                <p>{resMenu[2].card.card.info.cuisines.join(",")}</p>
            </div>
            <div className="pl-1 text-sm">
                <p>Outlet <span className="text-gray-400">{resMenu[2].card.card.info.areaName}</span></p>
            </div>
            <div className="pl-1 text-sm">
                <p>{resMenu[2].card.card.info.sla.deliveryTime} minutes</p>
            </div>


        </div>

        <div className="mt-8 text-center">
            <p>-- Menu --</p>
        </div>

        <div className="bg-gray-300">
            {categories.map((cat,index) => <RestaurantCategory 
            items={cat} key={cat.card.card.title} 
            showItems={index==showIndex?true:false}
            setShowIndex={()=>setShowIndex(index)}/>)}
        </div>
    </div>
}

export default RestaurantMenu