import Header from "./header";
import Footer from "./footer";
import SearchForm from "@/components/search";
export default function Home() {
  return(
  <div className="container mx-auto 
  ">
    <Header/>
<main className="py-8 px-2">
  <SearchForm/>
</main>
<Footer/>
  </div>  
  );
}
