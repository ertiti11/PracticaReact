import Header from "../components/Header";
import Hero from "../components/Hero";
import MenuLateral from "../components/MenuLateral";
import Footer from "../components/Footer";
import PostList from "../components/Articulos";
export default function Home() {
  return (
    <>
    
      <Header />
      <main className="wrap">
        <Hero />
        <div className="clearfix"></div>
        <div className="contenido_principal">
          <MenuLateral />
          <PostList />
        </div>
      </main>
      <div className="clearfix"></div>
      <Footer />
    </>
  );
}
