import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const { name, image, price, recipe, _id } = item

    const [refetch] = useCart()

    const handleAddToCart = () => {

        const cartItem = { menuItemId: _id, name, image, price, email: user?.email }

        if (user && user.email) {
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Product added successfully',
                            showConfirmButton: false,
                            timer: 1000
                        })
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: 'You must login to order',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'LogIn'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }


    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl text-center">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-slate-800 text-white absolute right-0 mt-6 mr-6 px-2">${price}</p>
            <div className="card-body">
                <h2 className="text-3xl">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 border-slate-800">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;