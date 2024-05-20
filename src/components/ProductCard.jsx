import React, { useContext, useEffect } from "react";
import MyContext from "../context/Data/myContext";
import { FaCartArrowDown } from "react-icons/fa6";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

function ProductCard() {
  const context = useContext(MyContext);
  const { mode, product, loading, searchkey, filterType, filterPrice } =
    context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // Add to cart
  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("add to cart", { autoClose: 1000 });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Filter the products based on searchkey, filterType, and filterPrice
  const filteredProducts = product.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchkey.toLowerCase());
    const matchesType = filterType ? item.category === filterType : true;
    const matchesPrice = filterPrice
      ? item.price.toString() === filterPrice
      : true;
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Our Latest Collection
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>
        <div className="flex flex-wrap -m-4">
          {loading ? (
            <Loader />
          ) : (
            filteredProducts.map((item, index) => {
              const { title, price, imageUrl } = item;
              return (
                <div
                  onClick={() =>
                    (window.location.href = `/productinfo/${item.id}`)
                  }
                  key={index}
                  className="card p-4 drop-shadow-lg"
                >
                  <div className="card-img h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                    <img src={imageUrl} alt={title} />
                  </div>
                  <div className="card-title">{title}</div>
                  <div className="card-subtitle"></div>
                  <hr className="card-divider" />
                  <div className="card-footer">
                    <div className="card-price">₹ {price}</div>
                    <button onClick={() => addCart(item)} className="card-btn">
                      <FaCartArrowDown />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
