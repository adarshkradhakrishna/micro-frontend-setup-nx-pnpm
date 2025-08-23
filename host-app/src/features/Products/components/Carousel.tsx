import styles from "./Carousel.module.css";
import { ProductSaleData } from "../../../data/ProductData";
import ProductCard from "./ProductCard";
//import { useCart } from "../../../hooks";
import { useContext } from "react";
import { ProductContext } from "../../../app/app";

const ProductCarousel = () => {
	//const { addToCart } = useCart();

	const {addToCart} =useContext(ProductContext)

	return (
		<ul className={styles["product-carousel"]}>
			{ProductSaleData.map((product) => (
				<li
					key={product.id}
					className={styles["product-carousel__item"]}
				>
					<ProductCard product={product}>
						<button
							type="button"
							role="button"
							onClick={() => addToCart(product)}
						>
							Add to Cart
						</button>
					</ProductCard>
				</li>
			))}
		</ul>
	);
};

export default ProductCarousel;
