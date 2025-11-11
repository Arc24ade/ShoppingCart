import CartCard from "../Component/CartCard"
import TitleHook from "../Hook/TitleHook"
import { useCart } from '../context/CartContext'


const Cart = () => {
  TitleHook("Cart")
  const {cartItems,totalAmount}=useCart();
  
  
 
  return (
    <div className="flex flex-wrap gap-4 m-10">
    {cartItems.map((p) => (
      <CartCard key={p.n} img={p.img} product={p.name} des={p.des} n={p.n} />
    ))}
    </div>
  )
}

export default Cart;