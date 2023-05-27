import { Link } from "react-router-dom";

const Product_Nav=()=>{
    return(
        <nav className="nav1">
            <div id="logo">
              <Link to="/" ><h1>products</h1> </Link> 


            </div>
            <div id="search-bar1">
                <input type="search" placeholder="search for products" />
                <button>search</button>
            </div>
            <div id="add-products">
                <Link to="/add">Add products</Link>
            </div>
        </nav>
    );
}
export default Product_Nav;