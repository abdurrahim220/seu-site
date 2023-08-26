import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider'
const useAndroid = () => {
    const {user,loading} = useContext(AuthContext);
    const { refetch, data: carts = [] } = useQuery({
        queryKey: ['carts', user?.email],     
        queryFn: async ()=>{
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            // console.log('res from axios', response)
            return response.json();
        },
    })


    return [carts, refetch];
}

export default useAndroid