const Product = (props) => {
    const { productName, productPrice, productCategory, productBrand } = props

    return (
        <div className="bg-gray-800 max-w-xl mx-auto p-2 rounded-md shadow-xs mt-4">
            <h1>Product Details</h1>
            <hr></hr>
            <div className="grid grid-cols-2 gap-2">
                <h1>
                    Product Name
                </h1>
                <p>: {productName}</p>
                <h1>
                    Product Price
                </h1>
                <p>: {productPrice}</p>
                <h1>
                    Product Category
                </h1>
                <p>: {productCategory}</p>
                <h1>
                    Product Brand
                </h1>
                <p>: {productBrand}</p>
            </div>
        </div>
    )
}

export default Product
