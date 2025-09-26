import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { fetchProducts } from "./productsSlice";
import type { AppDispatch, RootState } from "../../app/store";

const ProductsList = () => {

    const {products, loading, error} = useSelector((state: RootState) => state.product);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (loading) {
        return <p>is loading</p>
    }
    if (error) {
        return <p>{error}</p>
    }



    return(
     <>
     <h1>products list</h1>
        
            <ul>
                {products.map((item: any) => {
                    return(
                    <>
                        <li key={item.id}>{`title: ${item.title}, price: ${item.price}`}</li>
                    </>
                )
                
        })}
            </ul>
        
     </>
    )
}
export default ProductsList;