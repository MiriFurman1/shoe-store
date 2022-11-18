import { useEffect, useState } from "react";
import axios from "axios";
import {  Link} from 'react-router-dom';

export default function ShoesPage() {
    const [errorMessage, setErrorMessage] = useState("")
    const [shoesList, setShoesList] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://637389a9348e9472990f6169.mockapi.io/shoes');
                setShoesList(data);
                setIsLoading(false);

            } catch (e) {
                setErrorMessage(e.message);
                setTimeout(() => {
                    setErrorMessage(null);
                }, 1500);
            }
        };
        fetchData();
    }, []);



    return (
        <div>
            <h1> see all shoes</h1>
            {isLoading && <h1 className='spinner'>loading</h1>}
            {errorMessage ? <h4>{errorMessage}</h4> : ""}
            <div className="shoesDiv">
                {shoesList?.map((shoe) => {
                    return (<div className="shoeCard" key={shoe.id} >
                        <Link to={`/shoespage/${shoe.id}`}>
                        <h4>{shoe.brand}</h4>
                        <h4>{shoe.name}</h4>
                        <h4>price:{shoe.price}$</h4>
                        <img src={shoe.image} alt="" width="350px" ></img>
                        </Link>

                    </div>)
                })}
            </div>
        </div>
    )
}