import { useState,useEffect } from "react";


const useRestaurantMenuData=(resId)=>{
    const[resMenu,setResMenu]=useState(null);

    useEffect(()=>{
    fetchMenu();
    },[]);

const url="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1766701&lng=78.00807449999999&restaurantId="+ resId;
console.log(url)
const fetchMenu=async ()=>{
    const data= await fetch(url);
    const json=await data.json();
    console.log("new",json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
    console.log(json?.data);
    setResMenu(json?.data?.cards);

}
    return resMenu;
}



export default useRestaurantMenuData;