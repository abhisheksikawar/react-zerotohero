import { useEffect, useState } from "react"
import Shimmer from "./shimmer";
import {useParams} from "react-router-dom"


const RestaurantMenu=()=>{

    const[resMenu,setResMenu]=useState(null);
    const {resId}=useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);

    const url="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1766701&lng=78.00807449999999&restaurantId="+ resId;
    console.log(url)
    const fetchMenu=async ()=>{
        const data= await fetch(url);
        const json=await data.json();
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
        setResMenu(json?.data?.cards);

    }
    if(resMenu===null){
        return <Shimmer/>
    }
    
    //console.log(resMenu[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info);
    const { itemCards } =
    resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return <div className="menu">
        { <h1>{resMenu[2].card.card.info.name}</h1>  }
        { <h1>{resMenu[2].card.card.info.cuisines.join(",")}</h1>  }
        
        <h2>Menu</h2>
        <ul>
            {itemCards.map(i=><li>{i.card.info.name}</li>)}
        </ul>
    </div>
}

export default RestaurantMenu