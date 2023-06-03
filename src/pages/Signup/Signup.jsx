import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Signup = () => {


    const navigate = useNavigate()

    const { createUser, userProfileUpdate } = useContext(AuthContext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                userProfileUpdate(data.name, data.photo)
                    .then(() => {

                        const saveUser = { name: data.name, email: data.email }

                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'User created Successfully',
                                        showConfirmButton: false,
                                        timer: 1500

                                    })
                                }
                            })
                        const loggedUser = result.user;
                        console.log(loggedUser);
                        reset()
                        navigate('/')

                    }).catch((error) => {
                        console.log(error.message);
                    });
            })
            .catch(error => {
                console.log(error.message);
            })
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="mx-auto mt-4"><h1 className="text-5xl font-bold">SignUp now!</h1></div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500 font-bold">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="url" {...register("photo", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photo && <span className="text-red-500 font-bold">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500 font-bold">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password",
                                {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                            {errors.password && errors.password.type === "required" && (
                                <span className="text-red-500 font-bold">Password field is required</span>
                            )}
                            {errors.password && errors.password.type === "minLength" && (
                                <span className="text-red-500 font-bold">Password must be at least 6 characters long</span>
                            )}
                            {errors.password && errors.password.type === "maxLength" && (
                                <span className="text-red-500 font-bold">Password cannot exceed 20 characters</span>
                            )}
                            {errors.password && errors.password.type === "pattern" && (
                                <span className="text-red-500 font-bold">Password must include a capital letter, small letter and a number</span>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <div className="mx-auto mb-4"><h1 className="font-bold">Already have an account?<Link to='/login' className="underline"> Login</Link></h1></div>
                    <SocialLogin></SocialLogin>
                </div>
            </div >
        </>
    );
};

export default Signup;