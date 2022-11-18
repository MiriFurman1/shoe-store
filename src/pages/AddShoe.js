export default function AddShoe(){

    return(
        <div className="addShoePage">

        <h1> add shoe</h1>
        <form>
        <label htmlFor="brand"> Brand</label>
        <input type="text" name="brand"></input>
        <label htmlFor="name"> Name</label>
        <input type="text" name="name"></input>
        <label htmlFor="price"> Price</label>
        <input type="text" name="price"></input>
        <label htmlFor="image"> Image</label>
        <input type="text" name="image"></input>
        <button type="submit">Add New Shoe</button>
        </form>
        </div>
    )
}