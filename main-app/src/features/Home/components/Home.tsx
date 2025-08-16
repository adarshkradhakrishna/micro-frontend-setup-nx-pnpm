import { ProductsOnSale } from "../../Products";
import styles from "./Home.module.css";
import useScreenSize from "../../Products/hooks/useScreenSize";
import ProductHero from '../../Products/components/ProductHero'

const bodyElement = document.querySelector("body")!;

const Home = () => {
	const { isSmallScreen } = useScreenSize({
		htmlElement: bodyElement,
	});

	return (
		<section className={styles["home"]}>
			{!isSmallScreen && <ProductHero />}
			<ProductsOnSale />
		</section>
	);
};

export default Home;
