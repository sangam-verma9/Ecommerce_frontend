import React, { useEffect, useState } from "react";
import "./newproduct.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import { clearError, createProduct } from "../../action/productAction";
import SidePannel from "./SidePannel";

const NewProduct = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState();
  const [discount, setDiscount] = useState();
  const [images, setImages] = useState([]);
  // const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }

    if (success) {
      alert.success("Product Created Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  // const productData = {
  //   name: name,
  //   price: price,
  //   description: description,
  //   category: category,
  //   stock: stock,
  //   discount: discount,
  //   image: {},
  // };
  // const createProductSubmitHandler = () => {};
  // const createProductImagesChange = async (e) => {
  //   const files = Array.from(e.target.files);
  // };

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("stock", stock);
    myForm.set("discount", discount);

    console.log(images);
    images.forEach((image) => {
      myForm.append("image", image);
    });
    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <MetaData title="Create Product" />
      <SidePannel />
      <section className=" bg-sky-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-sky-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-sky-300 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl e">
                Create Product
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Product Name"
                    required
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Price"
                    required
                    name="price"
                    onChange={(e) => setPrice(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Product Description"
                    value={description}
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    cols="30"
                    rows="1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></textarea>
                </div>

                <div>
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Choose Category</option>
                    {categories.map((cate) => (
                      <option key={cate} value={cate}>
                        {cate}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <input
                    type="number"
                    placeholder="Stock"
                    required
                    value={stock}
                    name="stock"
                    onChange={(e) => setStock(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Discount"
                    required
                    value={discount}
                    name="discount"
                    onChange={(e) => setDiscount(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div id="createProductFormFile">
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-sky-50 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={createProductImagesChange}
                    multiple
                  />
                </div>

                <button
                  type="submit"
                  className="w-full  bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={createProductSubmitHandler}
                  disabled={loading ? true : false}
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewProduct;
