import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchForm from "./components/searchForm/SearchForm";
import Layout from "./components/Layout/Layout";
import Home from "./components/home/Home";
import ErrorElement from "./components/errorElement/ErrorElement";
import ProductPage from "./components/ProductPage/ProductPage";
import ProductDetail from "./components/productDetail/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      { path: "/", element: <Home /> },
      { path: "search", element: <SearchForm /> },
      { path: "products", element: <ProductPage /> },
      { path: "users", element: <SearchForm /> },
      { path: "products/:productId", element: <ProductDetail /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
