import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";


const MyCart = () => {

    const [refetch, cart] = useCart()
    console.log(cart);
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDeleteCart = (_id) => {
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
                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            refetch()
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
        <div className="w-5/6 mx-auto max-h-full">
            <div className="uppercase flex justify-between items-center h-[70px]">
                <h1 className="text-3xl">Total Product: {cart.length}</h1>
                <h1 className="text-3xl">Total Price: ${totalPrice.toFixed(2)}</h1>
                <Link to='/dashboard/payment'>
                    <button className="btn btn-warning btn-sm">Pay Now</button>
                </Link>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {cart.map((item, index) => <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => handleDeleteCart(item._id)} className="btn btn-circle bg-red-700 text-2xl"><FaTrashAlt /></button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyCart;