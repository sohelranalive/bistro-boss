import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {

    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: isAdmin, isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const result = await axiosSecure.get(`/users/admin/${user.email}`)
            console.log('isAdmin Checking', result);
            return result.data.admin
        }
    })
    return [isAdmin, isAdminLoading]

};

export default useAdmin;