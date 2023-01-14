import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const CartContext = createContext({})

export function useCartContext() {
    return useContext(CartContext)
}

export function CartProvider({ children }) {
    const [cartItems, setCart] = useState([]);

    function addItem(id) {
        if(cartItems.find((item) =>  item.id === id ) == null){
            setCart(() => {
                return [...cartItems, { "id": id, "quantity": 1 }]
            })
        }
    }
    function removeItem(id){
        setCart((cartItems) => {
            return cartItems.filter((i) => {
                if(i.id !=id) return i
            })
        })
    }
    function increaseQuantity(id){
                setCart((cartItems) => {
                    return cartItems.map((i) => {
                        if(i.id == id){
                            return {...i , quantity : i.quantity + 1}
                        }else{
                            return i
                        }
                    })
                })        
    }
    function decreaseQuantity(id){
        setCart((cartItems) => {
            return cartItems.map((i) => {
                if(i.id == id && i.quantity > 1){
                    return {...i , quantity : i.quantity - 1}
                }else{
                    return i
                }
            })
        }) 
    }


    return (<CartContext.Provider value={{ cartItems, addItem , increaseQuantity , decreaseQuantity , removeItem}}>
        {children}
    </CartContext.Provider>
    )
}