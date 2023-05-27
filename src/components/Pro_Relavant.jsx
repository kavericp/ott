import { useEffect, useState } from "react";
import Productlist from "./Productlist";


const Pro_Relevant = ({color}) => {
    let [product,setProduct]=useState(null);
useEffect(()=>{
    fetch("http://localhost:4000/products")
    .then((res)=>{return res.json()})
    .then((data)=>{setProduct(data)})
},[])
    
    return ( 
        <div className="relevant-product">
      <h1>{color}</h1>
            {product && <Productlist 
            product={product.filter((m)=>{ 
                return color.split(" ").some((g)=>{
                 return  m.color.includes(g)})})}
                 title="Relevant product"/>}
        </div>
     );
}
 
export default Pro_Relevant;