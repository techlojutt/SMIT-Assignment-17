import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import BlogSection from "../../components/blogsection/BlogSection";

export default function Home() {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <BlogSection/>
       <Footer/>
    </div>
  )
}
