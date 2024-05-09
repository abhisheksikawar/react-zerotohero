const ItemList=(props)=>{
    const {data}=props;
    console.log(data.card.card.itemCards);
    return <div>
        {
            data.card.card.itemCards.map((it)=>(
                <div className="border-b flex justify-between p-4">
                    <div className="w-9/12" >
                        <h2 className="font-semibold">{it.card.info.name}</h2>
                        <p className="font-semibold">₹ {it.card.info.price/100}</p>
                        <p className="w-auto text-sm text-gray-600 pr-10">{it.card.info.description}</p>
                    </div>
                    <div className="w-3/12">
                        <img className="w-full h-40 rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+it.card.info.imageId}></img>
                    </div>
                    
                </div>    
                    
                    
                ))
        }
    </div>
}

export default ItemList