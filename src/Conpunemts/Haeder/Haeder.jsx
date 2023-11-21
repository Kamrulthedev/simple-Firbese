import { Link } from "react-router-dom";


const Haeder = () => {
    return (
        <div>
            <h1 className="text-4xl">THIS IS HAEDER PAGES</h1>
           <Link className="text-4xl" to={'/Login'}>Login</Link>
        </div>
    );
};

export default Haeder;