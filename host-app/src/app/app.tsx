import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "../features/Home";
import { lazy, Suspense } from "react";
import { Navbar } from "../features/Navbar";

const Products = lazy(() => import("../features/Products/components/ProductsOnSale"));
const Cart = lazy(() => import("../features/Cart/components/Cart"));
const Contact = lazy(() => import('remote_product_hero/Contacts'))
const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Navbar />
				<Outlet />
			</>
		),
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/products",
				element: (
					<Suspense>
						<Products />
					</Suspense>
				),
			},
			{
				path: "/cart",
				element: (
					<Suspense>
						<Cart />
					</Suspense>
				),
			},
			{
				path: "/contact",
				element: (
					<Suspense fallback={<p>Loading....</p>}>
						<Contact />
					</Suspense>
				)
			}
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
