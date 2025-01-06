import React from 'react'
import UpdateProduct from './components/updateProduct'
// import AllProducts from './components/AllProducts'
// import SpecificProduct from './components/SpecificProduct'
// import AddNewProduct from './components/AddNewProduct'

const App = () => {
  return (
    <div>
      {/* <AllProducts/> */}
      {/* <SpecificProduct/> */}
      {/* <AddNewProduct/> */}
      <UpdateProduct productId={2}/>
    </div>
  )
}

export default App
