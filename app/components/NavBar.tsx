export default function NavBar() {
  return (
    <div className={'flex justify-between items-center fixed top-0 left-0 w-full h-16 px-10 py-4 text-slate-900'}>
      <img src="/zafraportfolio/logo.svg"/>
      <div className={"flex items-center gap-36 text-3xl font-['Yantramanav', 'sans-serif'] font-bold tracking-tighter"}>
        <a>galleries</a>
        <a>about</a>
        <a>contact</a>
      </div>
    </div>
  );
}