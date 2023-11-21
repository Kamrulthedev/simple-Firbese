import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../firebese/firebase.init";

const Login = () => {
   
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const handlerAuthGoogleClilk = ()=> {
       console.log( "Clilking in the Go to goole Comming")
    }


    return (
        <div>
            <button onClick={handlerAuthGoogleClilk} className="btn btn-primary">Login</button>
          
        </div>
    );
};

export default Login;