
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Slider from "@/components/Slider/Slider";
import Categories from "@/components/Categories/Categories";
import CategoryCarousel from "@/components/CategoryCarousel/CategoryCarousel";
import Header from "@/components/Header/Header";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import Footer from "@/components/Footer/Footer";
 
 

export const metadata = {
  title: "Kias Shop", // Define o título da página
  description:
    "", // Descrição da página
  // icons: {
  //   icon: "/favicon.svg", // Define o favicon
  // },
};

export default function Home() {

  return (
    <div>

       <Header /> 

        <Navbar />
        <Slider />

        <Categories />
        <CategoryCarousel />
        <div
        style={{ display: "flex", marginTop: "3rem", flexDirection: "column" }}
      >
        <NewArrivals />{" "}
      </div>

      <Footer />

     

     
    </div>
  );
}
