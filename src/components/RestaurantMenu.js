import { useEffect, useState } from "react"
import Shimmer from "./shimmer";
import {useParams} from "react-router-dom"
import useRestaurantMenuData from "../utils/useRestaurantMenuData"


const RestaurantMenu=()=>{

    
    const {resId}=useParams();
    
    const resMenu=useRestaurantMenuData(resId);
    if(resMenu===null){
        return <Shimmer/>
    }
    console.log('after custom hooks');
    console.log(resMenu);
    const { itemCards } =
    resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return <div className="menu">
        { <h1>{resMenu[2].card.card.info.name}</h1>  }
        { <h1>{resMenu[2].card.card.info.cuisines.join(",")}</h1>  }
        
        <h2>Menu</h2>
        <ul>
            {itemCards.map(i=><li key={i.card.info.id}>{i.card.info.name}</li>)}
        </ul>
    </div>
}

export default RestaurantMenu