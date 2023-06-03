import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUser = () => {

    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        // const res = await fetch('http://localhost:5000/users')
        // return res.json()
        const res = await axiosSecure.get('http://localhost:5000/users')
        return res.data;
    })

    const handleDeleteUser = (user) => {
        console.log(user);
    }

    const handleMadeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now an Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="w-10/12 mx-auto">
            <Helmet>
                <title>Bistro Boss | Users</title>
            </Helmet>
            <h1 className="text-3xl font-semibold">Total Users: {users.length}</h1>
            <br />
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin'
                                            ? 'Admin'
                                            : <button onClick={() => handleMadeAdmin(user)} className="btn btn-square bg-green-700 text-2xl"><FaUserShield /></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className="btn btn-circle bg-red-700 text-2xl"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;