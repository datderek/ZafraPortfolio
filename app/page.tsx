import NavBar from "./components/NavBar";
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[url('../public/cover.png')] bg-cover">
      </main>
    </div>
  );
}
