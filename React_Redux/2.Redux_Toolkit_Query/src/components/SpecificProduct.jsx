import React from 'react'
import { useGetProductByIdQuery } from '../app/service/dummyData';

const SpecificProduct = () => {
    const { data, isLoading, isError } = useGetProductByIdQuery(3);
    console.log(data);

    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>Error</h1>
  return (
    <div>
        <>
        <h1>{data?.title}</h1>
        <h1>{data?.brand}</h1>
        <h1>{data?.price}</h1>
        <p>{data?.description}</p>
        </>
    </div>
  )
}

export default SpecificProduct
