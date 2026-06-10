import { useState,useEffect } from "react";
import Productcard from "../components/Productcard";


const Home = () => {

    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const fetchProducts = (async() =>{
            try{
                const res = await fetch('/api/products');
                const data = await res.json();
                setProducts(data.data.slice(0,4));
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false);
            }
        });
        fetchProducts();
    },[])
    
    return(
        <div className="home-container">
           <div className="hero-banner"  >
                <p>Welcome to Shopnest</p>
                <h1>Discover the best Product at unbeatable Price.</h1>
           </div>
           <h1 style={{ marginLeft: "4%" }}>Featured Products</h1>
           {loading ? (
                <div>Loading Products...</div>
           ):(
                <div className="product-grid" >
                    {products.map((product)=>(
                        <Productcard key={product._id} product = {product}></Productcard>
                    ))}
                </div>
           )}
        </div>
    )
}
export default Home;
