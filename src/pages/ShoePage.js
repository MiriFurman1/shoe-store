import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export default function ShoePage() {
    const shoeid = useParams()
    const [id, setId] = useState("")
    const [specificShoeData, setSpecificShoeData] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading,setIsLoading]=useState(false)

    




    useEffect(() => {

        const fetchData = async () => {
            try {
                setIsLoading(true);
                const { data } = await axios.get(`https://637389a9348e9472990f6169.mockapi.io/shoes/${shoeid.shoeid}`);
                
                setSpecificShoeData(data);
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

    return (<div className="shoePage">
        <h1> specific shoe page</h1>
        {errorMessage ? <h4>{errorMessage}</h4> : ""}
        {isLoading && <h1 className='spinner'>loading</h1>}
        {specificShoeData.length!==0?
        <div className="shoePageDiv">
        <h4>{specificShoeData.length}</h4>
        <h3>{specificShoeData.brand}</h3>
        <h3>{specificShoeData.name}</h3>
        <h3>price:{specificShoeData.price}$</h3>
        <img src={specificShoeData.image} alt="" width="350px" ></img>
        <button>edit</button>
        <button>delete</button>
        </div>:""
        
        }



    </div>)
}