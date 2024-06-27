import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removefromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center bg-white p-4 rounded shadow-md mb-4">
      <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-contain rounded"
        />
      </div>
      <div className="flex flex-col justify-between w-full lg:w-2/3 lg:pl-4">
        <div className="mb-2">
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <p className="text-gray-600">{item.description}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold">${item.price.toFixed(2)}</p>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={removefromCart}
          >
            <FcDeleteDatabase size={44} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
