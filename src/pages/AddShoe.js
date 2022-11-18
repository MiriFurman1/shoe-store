import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
export default function AddShoe() {
    const [brand, setBrand] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [isAdded, setIsAdded]=useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (brand.trim() && name.trim() && image.trim()) {
            try {
                const { data } = await axios.post('https://637389a9348e9472990f6169.mockapi.io/shoes/', {
                    brand: brand,
                    name: name,
                    price: price,
                    image: image
                });
                console.log(data);
                setBrand('')
                setName('')
                setPrice('')
                setImage('')
                setIsAdded(true)
                setIsLoading(false);
            } catch (e) {
                setErrorMessage(e.message);
            }
        }
    };




    return (
        <div className="addShoePage">

            <h1> add shoe</h1>
            {isLoading && <h1 className='spinner'>loading</h1>}
            {errorMessage ? <h4>{errorMessage}</h4> : ""}
            <form onSubmit={handleSubmit}>
                <label htmlFor="brand"> Brand</label>
                <input type="text" name="brand" value={brand} onChange={({ target: { value } }) => setBrand(value)}></input>
                <label htmlFor="name"> Name</label>
                <input type="text" name="name" value={name} onChange={({ target: { value } }) => setName(value)}></input>
                <label htmlFor="price"> Price</label>
                <input type="number" name="price" value={price} onChange={({ target: { value } }) => setPrice(value)}></input>
                <label htmlFor="image"> Image</label>
                <input type="text" name="image" value={image} onChange={({ target: { value } }) => setImage(value)}></input>
                <button type="submit">Add New Shoe</button>
            </form>

            {isAdded?<div> <h4>Item Added successfully</h4>
        <Link to='/shoespage/'>Return to All shoes</Link>
         </div>
       :""}
        </div>
    )
}