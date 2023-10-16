import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const { _id, name, supplier, category, photo, chef, taste, details } = coffee;

    const handleDelete = _id => {
        console.log('delete clicked', _id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('delete success', data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="card md:card-side bg-[#F5F4F1] shadow-xl">
            <figure><img src={photo} alt="photo" /></figure>
            <div className="card-body md:flex-row items-center">
                <div className=" flex-shrink-0">
                    <h2><b>Name:</b> {name}</h2>
                    <h2><b>Chef:</b> {chef}</h2>
                    <h2><b>Category:</b> {category}</h2>
                    <h2><b>Taste:</b> {taste}</h2>
                    <h2><b>Price:</b> { }</h2>
                </div>
                <div className="card-actions justify-end mr-2">
                    <div className="btn-group btn-group-vertical space-y-2">
                        <button className="btn btn-active">View</button>
                        <button className="btn btn-accent">Edit</button>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-error">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;