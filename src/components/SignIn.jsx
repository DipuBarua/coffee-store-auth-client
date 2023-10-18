import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div>
            <Link to={'/'}><button className=' btn btn-outline m-5'>Back to home</button></Link>
            <p>login here</p>
        </div>
    );
};

export default SignIn;