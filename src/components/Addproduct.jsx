import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Add_product = () => {

    let navigate=useNavigate()

    
    let product_name=useRef();
    let product_type=useRef();
    let MRP=useRef();
    let rating=useRef();
    let gender=useRef();
    let color=useRef();
    let review=useRef();
    let productpic=useRef();
    

    let handelAddPRIDUCT=(e)=>{
        e.preventDefault()
        

        let newProduct = {
            product_name: product_name.current.value,
            product_type: product_type.current.value,
            MRP: MRP.current.value,
            rating: rating.current.value,
            gender: gender.current.value,
            color: color.current.value,
            review: review.current.value,
            productpic: productpic.current.value,
        
            
          }
          let options=document.getElementsByName("lang");
          for (let i = 0; i < options.length; i++) {
            if(options[i].checked==true){
                newProduct.languages.push(options[i].value)
            }
            
          }
          fetch("http://localhost:4000/products" , 
        {
            method : "POST" ,
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(newProduct)
        } 
        )
        .then(()=>{
            alert("new data added");
            navigate("/")
            // window.location.reload();
        })
                
        }
    return ( 
        <div className="add">
            <h1>Add product</h1>
            <input  type="text" placeholder="enter product name" ref={product_name}/>
            <input  type="text" placeholder="enter productype" ref={product_type}/>
            <input type="number" placeholder="mrp" ref={MRP} />
            <input type="number" step="0.1" min="1" max="10" placeholder="rating"  ref={rating}/>

            <fieldset>
    <legend>gender</legend>
    <input type="radio" name="gender"  value="male"/> <label htmlFor="">Male</label>
    <input type="radio" name="gender" value="female" /><label htmlFor="">Female</label>
    <input type="radio" name="gender" value="other" /><label htmlFor="">other</label>
       </fieldset>
       <input type="text" placeholder="color"  ref={color}/>
       <input type="text" placeholder="review" ref={review} />
       <input type="url"  placeholder="productpic" ref={productpic}/>
            
            


            <input type="submit" value="add" />
        
        </div>
    );
}
 
export default Add_product;