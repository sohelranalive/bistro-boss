import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { logIn } = useAuth()

    const [loginDisbale, setLoginDisable] = useState(true)


    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()

    // console.log(from);

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                Swal.fire('User Login Successful')
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = (event) => {
        const user_captcha_value = event.target.value;

        if (validateCaptcha(user_captcha_value)) {
            setLoginDisable(false)
        }

        else {
            setLoginDisable(true)
        }
    }


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">

                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="mx-auto mt-4"><h1 className="text-5xl font-bold">Login now!</h1></div>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="enter captcha" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="mx-auto mb-4"><h1 className="font-bold">New User?<Link to='/signup' className="underline"> Please SignUp</Link></h1></div>
                    <SocialLogin></SocialLogin>
                </div>
            </div >
        </>
    );
};

export default Login;