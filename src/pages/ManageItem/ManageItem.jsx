import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTittle from "../../components/SectionTittle/SectionTittle";
import useMenu from "../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import EditModal from "./EditModal";
import { useState } from "react";

const ManageItem = () => {


    const [isOpen, setIsOpen] = useState(false)

    const [menu, refetch] = useMenu()
    console.log(menu);

    const [axiosSecure] = useAxiosSecure()

    const handleDelete = item => {
        console.log(item);
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

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            refetch()
                        }
                    })
            }
        })
    }

    const handleEdit = item => {
        console.log(item);
        setIsOpen(true)
    }

    return (
        <div className="my-10 w-11/12 mx-auto min-h-full">
            <SectionTittle
                subHeading="Check it out"
                heading="FROM OUR MENU"
            ></SectionTittle>
            <h1 className="text-3xl uppercase">Total Item: {menu.length}</h1>
            <br />
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {menu.map((item, index) => <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>
                                <button onClick={() => handleEdit(item)} className="btn btn-square bg-yellow-700 text-2xl"><FaEdit /></button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-square bg-red-700 text-2xl"><FaTrashAlt /></button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                <div>
                    {isOpen && <EditModal></EditModal>}
                </div>
            </div>
        </div>
    );
};

export default ManageItem;