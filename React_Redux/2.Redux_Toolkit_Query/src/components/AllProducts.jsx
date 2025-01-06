import React from 'react'
import { useGetAllProductQuery } from '../app/service/dummyData';

const AllProducts = () => {
    const { data, isLoading, isError } = useGetAllProductQuery();
    console.log(data);

    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>Error</h1>

    return (
        <div>
            {data?.products.map((p) => (
                <>
                <h1 key={p.id}>{p.title}</h1>
                <p key={p.id}>{p.description}</p>
                </>
                
            ))}
        </div>
    )
}

export default AllProducts