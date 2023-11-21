import { useState } from "react";
import app from "../../firebese/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";




const Login = () => {
    const [User, setUser] = useState()
     const auth = getAuth(app)
     const provider = new GoogleAuthProvider()
 
    const handlerAuthGoogleClilk = ()=> {
        signInWithPopup(auth, provider)
        .then(result =>{
            const user = result.user;
            console.log(user)
            setUser(user)
        })
        .catch(error =>{
            console.log(error)
        })
  
    }
    const handlerSignOut = () =>{
        signOut(auth)
        .then(result =>{
            console.log(result)
            setUser(null)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    


    return (
        <div>
        {
            <div className="text-center mt-80">
            <button onClick={handlerSignOut} className="border-4 text-4xl font-bold  rounded-lg p-4 mt-6">Sing Out</button>
        </div>
         <div className="text-center">
        <button  onClick={handlerAuthGoogleClilk} className="border-4 text-4xl font-bold  rounded-lg p-4">Login</button>
         </div>
         }
       
          {User && <div className="text-center  ">
              <h3 className="text-4xl font-bold ">User: {User.displayName}</h3>  
              <h2 className="text-xl font-bold">Email: {User.email}</h2>              
            </div>
          }
        </div>
    );
};

export default Login;