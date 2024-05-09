import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory=(props)=>{
    const {items,showItems,setShowIndex}=props;

    console.log("category",items);
    return <div>
        <div className="flex justify-between bg-white mt-3 p-4 cursor-pointer" onClick={()=>{
            setShowIndex();
        }}>
            <h2 className="font-bold">{items.card.card.title}({items.card.card.itemCards.length})</h2>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
        </div>
        <div className="bg-white">
            {(showItems) && <ItemList data={items}/>}
        </div>
        
             
             
    </div>
}

export default RestaurantCategory