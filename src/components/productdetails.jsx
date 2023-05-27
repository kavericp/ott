import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pro_Relevant from "./Pro_Relavant";

const Productdetails = () => {
    let {id}=useParams();
    let[product,setProduct]=useState;
    let[error,setError]=useState;
    let[pending,setPending]=useState;

    useEffect=(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/products/"+id)
        .then((res)=>{return res.json()})
        .then((data)=>{
            console.log(data);
            setProduct(data);
            
        }) 
        .catch((err)=>{
            setError("404 Network issue!!!!!");
            setPending(false);
        })},2000)
    },[])
    
    return (
        <div>
          <h1>Product details component</h1> 
          {pending==true && <h1>Loadind......</h1>}
            {error && <h1>{error}</h1>}
         {product && <div>
         <img src={product.productpic} alt="productpic" width="300px" height="240px"/>
                <h1>Product:{product.product_name}</h1>
                <p>productType:{product.product_type}</p>
                <h2>MRP:{product.product.MRP} </h2> 
                <p>rating:{product.rating}</p>
                <h1>gender:{product.gender}</h1>
                <p>color:{product.color}</p>
                <p>review:{product.review}</p>
                <img src={product.productpic} alt="pic" width="300px" height="240px"/>

                
        </div>}
    
        {product && <Pro_Relevant color={product.color}/>}

        <h1>{id}</h1>
      
      </div>
      );
    }
export default Productdetails;