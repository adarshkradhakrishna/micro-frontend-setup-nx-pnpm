import { ProductsOnSale } from "../../Products";
import styles from "./Home.module.css";
import useScreenSize from "../../Products/hooks/useScreenSize";
import { Suspense,lazy } from "react";
const ProductHero = lazy(()=>import('remote_product_hero/Module'))

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
