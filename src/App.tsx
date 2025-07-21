import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminProduct from "./components/admin/AdminProduct";
import AdminCategory from "./components/admin/AdminCategory";
import Homepage from './components/Homepage';
import AdminLogin from './components/admin/AdminLogin';
import AdminRegister from './components/admin/AdminRegister';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
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
    {
      path: "/admin/login",
      element: <AdminLogin />,
    },
    {
      path: "/admin/register",
      element: <AdminRegister />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
