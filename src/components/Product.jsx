import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item removed from cart");
  };

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <div className="mb-2">
        <p className="text-lg font-semibold">{post.title}</p>
      </div>
      <div className="mb-2">
        <p className="text-gray-600">{post.description}</p>
      </div>
      <div className="mb-2">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-contain rounded-md"
        />
      </div>
      <div className="mb-4">
        <p className="text-xl font-bold">${post.price.toFixed(2)}</p>
      </div>
      {Array.isArray(cart) && cart.some((p) => p.id === post.id) ? (
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={removeFromCart}
        >
          Remove Item
        </button>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={addToCart}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default Product;
