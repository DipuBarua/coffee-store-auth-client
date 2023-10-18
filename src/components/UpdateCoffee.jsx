import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, supplier, category, photo, chef, taste, details } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const updatedCoffee = { name, supplier, category, photo, chef, taste, details };
        console.log(updatedCoffee);

        fetch(`https://coffee-store-auth-server-cli-deploy.vercel.app/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(updatedCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Update Successful',
                        text: 'successfully updated your coffee',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });
    }

    return (
        <div className="card w-full min-h-screen shadow-2xl bg-[#F4F3F0]">
            <Link to={'/'}><button className=' btn btn-outline m-5'>Back to home</button></Link>
            <form onSubmit={handleUpdateCoffee} className="card-body">
                <p className=" text-center text-3xl font-bold ">Update Coffee</p>
                <div className=" flex gap-10">
                    <div className=" flex-1 w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="input input-bordered input-accent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered input-accent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered input-accent" />
                        </div>
                    </div>

                    <div className=" flex-1 w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name="chef" defaultValue={chef} placeholder="Enter coffee chef" className="input input-bordered input-accent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered input-accent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered input-accent" />
                        </div>
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="url" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered input-accent" />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-accent">Update Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;