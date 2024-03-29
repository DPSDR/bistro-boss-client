import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
    const { user } = useContext(AuthContext);

    const { refetch, isLoading, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
            return response.json();
        }
    })

    return [cart, refetch, isLoading]
};

export default useCart;