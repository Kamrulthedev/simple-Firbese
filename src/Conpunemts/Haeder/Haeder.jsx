import { Link } from "react-router-dom";


const Haeder = () => {
    return (
        <div className="text-center mt-80">
            <h1 className="text-4xl font-bold">THIS IS HAEDER PAGES</h1>
           <Link className="text-4xl font-bold " to={'/Login'}>
            <button className=" border-4 rounded-lg mt-6 p-4">Login</button>
           </Link>
        </div>
    );
};

export default Haeder;