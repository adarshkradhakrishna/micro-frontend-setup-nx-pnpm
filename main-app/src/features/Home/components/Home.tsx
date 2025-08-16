import { ProductsOnSale } from "../../Products";
import styles from "./Home.module.css";
import useScreenSize from "../../Products/hooks/useScreenSize";
import { lazy, Suspense } from "react";

const ProductHero = lazy(()=>import('product_hero/productHero'))

const bodyElement = document.querySelector("body")!;

const Home = () => {
	const { isSmallScreen } = useScreenSize({
		htmlElement: bodyElement,
	});

	return (
		<section className={styles["home"]}>
			{!isSmallScreen && 
			<Suspense fallback={<div>Loading..</div>}>
				<ProductHero />
			</Suspense>
			}
			<ProductsOnSale />
		</section>
	);
};

export default Home;
