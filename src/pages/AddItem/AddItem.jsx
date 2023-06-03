import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_url_server = import.meta.env.VITE_IMAGE_HOSTING_TOKEN

const AddItem = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [axiosSecure] = useAxiosSecure()

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_url_server}`

    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const imageUrl = imageData.data.display_url;

                    const { name, category, price, recipe } = data;

                    const newItem = {
                        name,
                        category,
                        price: parseFloat(price),
                        recipe,
                        image: imageUrl
                    }
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Menu added successful',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                reset()
                            }
                        })

                }
            })
    }

    return (
        <div className="border w-11/12 mx-auto max-h-full px-4 py-2">
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <div className="mx-auto mt-4"><h1 className="text-3xl font-bold">Add an Item</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                        {errors.name && <span className="text-red-500 font-bold">Recipe name is required</span>}
                    </div>
                    <div className="flex">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select className="select select-bordered" {...register("category")}>
                                <option disabled>Select One</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="desi">Desi</option>
                            </select>
                            {errors.category && <span className="text-red-500 font-bold">Recipe name is required</span>}
                        </div>
                        <div className="form-control ml-4 w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="$ " className="input input-bordered" />
                            {errors.price && <span className="text-red-500 font-bold">Recipe name is required</span>}
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea className="textarea textarea-bordered" {...register("recipe", { required: true })} placeholder="Details"></textarea>
                        {errors.recipe && <span className="text-red-500 font-bold">Recipe details is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Add Recipe Picture</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                        {errors.image && <span className="text-red-500 font-bold">Image is required</span>}
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="ADD Item" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;