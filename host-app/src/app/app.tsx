import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "../features/Home";
import { Context, createContext, lazy, Suspense, useState } from "react";
import { Navbar } from "../features/Navbar";
import useSyncGlobalRouter from "../features/Products/hooks/useSyncRouteChange";
import {  Product,ProductContextT,D_name } from "@shared/state";

const Products = lazy(() => import("../features/Products/components/ProductsOnSale"));
const Cart = lazy(() => import("../features/Cart/components/Cart"));
const Contact = lazy(() => import('remote_product_hero/Contacts'))


function HandleRoutes() {
	useSyncGlobalRouter('/contact')
	return (
		<Contact />
	)
}
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
				path: "/contact/*",
				element: (
					<Suspense fallback={<p>Loading....</p>}>
						<HandleRoutes />
					</Suspense>
				)
			},
		],
	},
]);

export const ProductContext = createContext<ProductContextT>({ products: [] })

declare global{
	interface Window {
		ProductContext: Context<ProductContextT>
	}

}
window.ProductContext = ProductContext;

const App = () => {
	const [products, setProducts] = useState([])

	function addToCart(product: Product) {
		setProducts([...products, product])
	}

	function removeFromCart(productId){
		setProducts(products.filter(
				(product) => product.id !== productId
			));
	}
	return <ProductContext.Provider value={{ products, addToCart,removeFromCart }}>
		<RouterProvider router={router} />
	</ProductContext.Provider>
};

export default App;
