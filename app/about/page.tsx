import Header from "../header";
import Footer from "../footer";
export default function About(){
    return(
        <div className="container mx-auto">
            <Header/>
<main className="py-8">
    <h2 className="text-3xl font-bold mb-4">About Next JS Movie App</h2>
    <p className="text-lg mb-4">This is the movies page where you can find information about the latest movies, reviews , and more. Stay tuned for updates!</p>
    <p className="text-lg">This app is designed for movie enuthastics who want to stay updated with the latest releases and reviews . We hope you enjoy using it.</p>
</main>
            <Footer/>
        </div>
    )
}