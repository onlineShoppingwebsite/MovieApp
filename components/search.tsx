"use client";
import { useState } from "react";
import {useRouter} from "next/navigation";
export default function SearchForm(){
    const router=useRouter();
const [movie,setMovie]=useState("");
function submitMovie(e:React.SubmitEvent){
    e.preventDefault();
    router.push(`/search/${movie.trim()}`);
    console.log(movie);
}

    return(
<>
<h2 className="text-3xl font-bold">Search form</h2>
<form onSubmit={submitMovie}>
  <label>
   <input className="border rounded px-4 py-2 me-3" value={movie} onChange={(e)=>setMovie(e.target.value)} type="search" name="movie" required pattern="[\w ]{3,}"/>
    </label>  
    <button className="border rounded px-4 py-2">Search</button>
    <output>{movie}</output>
</form>


</>

    )
}