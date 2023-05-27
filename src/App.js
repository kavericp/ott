import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Add_movie from "./components/Addmovie";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Moviedetails from "./components/Moviedetails";
import Signup from "./components/Signup";
import Favorites from "./components/Favorites";
import Search from "./components/Search";
import Editmovie from "./components/Editmovie";




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<Add_movie/>}></Route>
        <Route path="/fav" element={<Favorites/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/moviedetails/:id" element={<Moviedetails/>}></Route>
        <Route path="/search/:searchword" element={<Search/>}></Route>
        <Route path="/edit/:id" element={<Editmovie/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

// import Add_product from "./components/Addproduct";
// import Productdetails from "./components/productdetails";
// import Product_Nav from "./components/productNav";
// import Product_page from "./components/productpage";
// import { BrowserRouter,Routes,Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//     <div className="App">
//       <Product_Nav/>
//       <Routes>
//      <Route path="/" element={<Product_page/>}></Route>
//      <Route path="/add" element={<Add_product/>}></Route>
//      <Route path="/productdetails/id" element={ <Productdetails/>}></Route>
//       </Routes>
//     </div>
//     </BrowserRouter>
//   );
// }
// export default App;
