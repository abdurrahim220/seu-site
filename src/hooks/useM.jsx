import { useQuery } from '@tanstack/react-query'
import React from 'react'

const useM = () => {
    const { refetch, data: member = [] } = useQuery({
        queryKey: ['member', member],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/members`)
            console.log('res from axios', response)
            return response.json()
        },
    })
    return [member,refetch]
}

export default useM