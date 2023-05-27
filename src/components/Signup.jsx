const Signup = () => {
    return ( 
    <div className="sign">
        <form >
<input type="text" placeholder="username" required />
<input type="text" placeholder="password" required/>
<input type="text" placeholder="email" />
<fieldset>
    <legend>gender</legend>
    <input type="radio" name="gender"  value="male"/> <label htmlFor="">Male</label>
    <input type="radio" name="gender" value="female" /><label htmlFor="">Female</label>
    <input type="radio" name="gender" value="other" /><label htmlFor="">other</label>
</fieldset>
<a href="">forger password </a>
</form>
    </div> );
}
 
export default Signup;