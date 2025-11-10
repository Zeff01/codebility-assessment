import NavBar from "./screens/components/NavBar"
import Footer from "./screens/components/Footer"
import PostsScreen from "./screens/PostsScreen"

export default function Home() {
  return (
    <>
      <NavBar />
      <main className = "min-h-screen bg-base-50 py-8 px-12 flex flex-col justify-center align-center gap-8 bg-linear-to-r from-[#f7f0ff] to-sky-50">
        <PostsScreen /> 
      </main>
      <Footer />
   </>
    )
}
