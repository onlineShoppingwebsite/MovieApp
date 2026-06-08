import Header from "../../header";
import Footer from "../../footer";
import { Movie } from "@/services/Api";

interface MoviePageProps{
params:{
     slug:string
};
};
export default async function Moviedetails({params}:MoviePageProps){
     const data=await params;
     
     const id=await Movie(data.slug);
     
     const movie=id.description[0];
     
     
     return (
   <div className="container mx-auto">
   <Header></Header>
   <main className="py-8 px-2">
  <div className="grid grid-cols-3 gap-4">
  <div>
  <p className="my-2">Result for {movie["#TITLE"]}</p>
  <h2 className="text-3xl font-bold"> {movie["#AKA"]} </h2>
  <p className="my-2">Actors : {movie["#ACTORS"]} </p>
  <p className="my-2">Year : {movie["#YEAR"]}</p>
  <p className="my-2">Rank: {movie["#RANK"]}</p>
   <p className="my-2">IMDB ID: {movie["#IMDB_ID"]}</p>
   <p>IMDB Link : <a className="underline" href={movie["#IMDB_URL"]} target="_blank" rel="noopener noreferrer">{movie["#TITLE"]} on IMDB</a> </p>
   </div>
   <div></div>
   <figure>
   <img src={movie["#IMG_POSTER"]} alt={movie["#TITLE"]} width={movie['photo_width']} height={movie['photo_height']} />
   </figure>
    </div>
   </main>
   <Footer></Footer>
              </div>           
     )
}