import { Link } from "react-router-dom"

const  Productlist= ({products,title}) => {
    return ( 
        <>
        <h1>{title}</h1>
{/* {Movies==null && <h1>Loading.....</h1>} */}

 <div className="products">
    {products.map((product)=>{
        return(
            <div className="product">
                 <Link to={`/productdetails/${product.id}`}>
                <img src={product.productpic} alt="productpic" width="300px" height="240px"/>
                <h2>{product.product_Name}</h2>
                <p>{product.product_type} </p>
                </Link>
            </div>
        )
    }) }
  </div>
  </>
     );
}
 
export default Productlist;