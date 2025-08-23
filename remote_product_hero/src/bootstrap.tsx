import { createRoot } from "react-dom/client";
// import ProductHero from "./features/Products/components/ProductHero";
import "./index.css";

const appElement = document.getElementById("app");


const root = createRoot(appElement!);
root.render(<div>This is APP 2</div>);