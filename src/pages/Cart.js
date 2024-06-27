import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <div className="text-xl font-semibold mb-4">Your Cart</div>
            <div className="text-lg font-medium mb-4">Summary</div>
            <p className="mb-4">
              <span className="font-bold">Total Items: </span>
              {cart.length}
            </p>
            <p className="text-2xl font-bold mb-4">Total Amount: ${totalAmount.toFixed(2)}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Check Out Now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center  min-h-screen text-center">
          <h1 className="text-3xl font-bold mb-4">Cart Empty</h1>
          <Link to="/">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;


