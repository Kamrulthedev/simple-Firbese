import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebese/firebase.init";
import { Link } from "react-router-dom";

const Login = () => {
   
    const auth = getAuth(app)
    console.log(app)
    const provider = new GoogleAuthProvider()
    const handlerAuthGoogleClilk = ()=> {
     signInWithPopup(auth, provider)
     .then(result =>{
        const user = result.user;
        console.log(user)
     })
    
     .catch(error =>
        {
            console.log('error', error.message)
         })
    }


    return (
        <div>
         <div className="text-center mt-80">
       <Link to={'/'}>  <button  onClick={handlerAuthGoogleClilk} className="border-4 text-4xl font-bold  rounded-lg p-4">Login</button></Link>
         </div>
          
        </div>
    );
};

export default Login;