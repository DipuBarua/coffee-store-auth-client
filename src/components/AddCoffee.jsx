import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const newCoffee = { name, supplier, category, photo, chef, taste, details };
        console.log(newCoffee);

        fetch("http://localhost:5000/coffee", {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(newCoffee),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successful',
                        text: 'successfully added a new coffee',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            });
    }
    return (
        <div className="card w-full min-h-screen shadow-2xl bg-[#F4F3F0]">
            <form onSubmit={handleAddCoffee} className="card-body">
                <p className=" text-center text-3xl font-bold ">Add New Coffee</p>
                <div className=" flex gap-10">
                    <div className=" flex-1 w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered input-accent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered input-accent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered input-accent" />
                        </div>
                    </div>

                    <div className=" flex-1 w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered input-accent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered input-accent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered input-accent" />
                        </div>
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="url" name="photo" placeholder="Enter photo URL" className="input input-bordered input-accent" />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-accent">Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;