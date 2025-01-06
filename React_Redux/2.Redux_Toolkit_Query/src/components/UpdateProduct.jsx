import React from 'react';
import { useUpdateProductMutation } from '../app/service/dummyData';

const UpdateProduct = ({productId}) => {
    const [updateProduct, { data, isLoading, isError }] = useUpdateProductMutation();
    

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Error</h1>;

    const handleUpdate = async () => {
        try {
            const updatedProductData = {
                title: 'Updated Product',
               
            };
            await updateProduct({id: productId, updatedProduct: updatedProductData});
        } catch (error) { 
            console.log(error);
        }
    };

    return (
        <div>
            <h1>{data?.title}</h1>
            <button onClick={handleUpdate} disabled={isLoading}>
                Update Product
            </button>
        </div>
    );
};

export default UpdateProduct;