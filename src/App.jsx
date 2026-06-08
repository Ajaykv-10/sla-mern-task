import Header from "./components/Header"
import AppRoute from "./routes/AppRoute"


const App = () => {
  return (
    <>
    <Header/>
    <section className="bg-black p-10 min-h-screen text-white">
    <AppRoute/>
    </section>
    </>
  )
}

export default App