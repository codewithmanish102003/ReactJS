import React from 'react'
import { useAddNewProductMutation } from '../app/service/dummyData';

const AddNewProduct = () => {
    const [addNewProduct, { data, isLoading, isError }] = useAddNewProductMutation();
    console.log(data);

    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>Error</h1>

    const handleAddProduct = async () => {
        try {
            const NewProduct = ({
                id: 4,
                title: 'New Product',
                description: 'Description of new product',
                price: 100,
                brand: 'New Brand',
                category: 'New Category',
            });
            await addNewProduct(NewProduct);

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <h1>{data?.id}</h1>
            <h1>{data?.title}</h1>
            <h1>{data?.price}</h1>
            <p>{data?.description}</p>

            <button onClick={handleAddProduct} disabled={isLoading}>Add New Product</button>
        </div>
    )
}

export default AddNewProduct
