function Product(props) // props: {productObj : {}}
{
    //state
    const {productObj} = props;
    // return a react component
    return(
        <div className="border-2 border-amber-400 p-3 grid place-items-center shadow-xl shadow-gray-500">
            <h2 className="text-2xl">{productObj.title}</h2>
            <h2>Price: {productObj.price}</h2>
            <h2>Description: {productObj.description}</h2>
            <h2>Category: {productObj.category}</h2>
            <h2>Rating: {productObj.rating.rate}</h2>
            <button className="bg-amber-300 p-2 rounded-xl hover:bg-amber-500">Add to Cart</button>
        </div>
    )
}
export default Product;