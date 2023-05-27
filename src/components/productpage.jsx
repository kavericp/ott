import { useEffect, useState } from "react";
import Productlist from "./Productlist";


const Product_page=()=>{
    let [products,setproducts]=useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/products")
        .then((res)=>{return res.json()})
        .then((data1)=>{
            console.log(data1);
            setproducts(data1);
        })
        },2000)
    },[])
    return(
        <div className="home1">                                                         

            {products==null && <h1>Loading.....</h1>}
           {products && <>
<Productlist products={products} title="All products"/>

{/* <Productlist products={products.filter((p)=>{p.producttype.includes("watch")})} title="watch"/> */}

{/* <productslist products={products.filter((m)=>{return m.watch.includes("rolex")})} title=" watch"/> */}

<Productlist products={products} title="Top rated products"/>
</>
}





        </div> 
    );
}
export default Product_page;