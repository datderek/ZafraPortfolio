import NavBar from "./components/NavBar";
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('../public/cover.png')] bg-cover bg-center">
        <div className='opacity-0 hover:opacity-100 fixed top-1/4 left-1/3 h-3/4 w-1/3 transition duration-300'>
          <img className='h-36 fixed top-1/4 left-1/2' src='/zafraportfolio/arrow.svg'/>
        </div>
      </main>
    </div>
  );
}
