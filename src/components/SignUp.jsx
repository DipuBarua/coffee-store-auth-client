import { Link } from "react-router-dom";

const SignUp = () => {
    const handleSignUp = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
    }
    return (
        <div className="min-h-screen bg-base-200">
            <Link to={'/'}><button className=' btn btn-outline m-5'>Back to home</button></Link>
            <div className="hero-content flex-col ">
                <p className=" text-2xl text-center">SignUp Here</p>
                <div className="card flex-shrink-0 w-1/2  shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;