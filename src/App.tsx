import ProductList from "./components/ProductList";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminProduct from "./components/admin/AdminProduct";
import AdminCategory from "./components/admin/AdminCategory";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList />,
    },
    {
      path: "/products",
      element: <ProductList />,
    },
    {
      path: "/categories",
      element: <CategoryList />,
    },
    {
      path: "/admin",
      element: <AdminLayout><AdminDashboard /></AdminLayout>,
    },
    {
      path: "/admin/products",
      element: <AdminLayout><AdminProduct /></AdminLayout>,
    },
    {
      path: "/admin/categories",
      element: <AdminLayout><AdminCategory /></AdminLayout>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
