import {useDispatch} from "react-redux"
import { addItem } from "../utils/cartSlice";
const ItemList=(props)=>{
    const {data}=props;
    console.log(data);
    const dispatch=useDispatch();

    return <div>
        {
            data.map((it)=>(
                <div className="border-b flex justify-between p-4">
                    <div className="w-9/12" >
                        <h2 className="font-semibold">{it.card.info.name}</h2>
                        <p className="font-semibold">₹ {it.card.info.price/100}</p>
                        <p className="w-auto text-sm text-gray-600 pr-10">{it.card.info.description}</p>
                    </div>
                    <div className="w-3/12">
                    <div className="absolute">
                        <button
                        className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                        onClick={() => dispatch(addItem(it))}
                        >
                        Add +
                            </button>
                    </div>
                        <div>
                            <img className="w-full h-40 rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+it.card.info.imageId}></img>
                        </div>
                    </div>
                    
                </div>    
                    
                    
                ))
        }
    </div>
}

export default ItemList