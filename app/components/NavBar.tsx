export default function NavBar() {
  return (
    <nav className={'flex justify-between items-center fixed top-0 left-0 w-full h-16 px-8 py-4 text-slate-900'}>
      <img src='/zafraportfolio/logo.svg' className={'h-16'}/>
      <button className={'md:hidden h-3/4'}>
        <img src='/zafraportfolio/menu.svg' className={'h-full'}/>
      </button>
      <div className={"hidden md:flex flex-[0_1_35%] gap-8 justify-between items-center text-3xl font-['Yantramanav', 'sans-serif'] font-bold tracking-tighter"}>
        <a className={"p-1 shadow-[inset_0_0_0_0_rgba(0,0,0,0)] hover:shadow-[inset_125px_0_0_0_rgba(0,0,0,1)] hover:text-white transition duration-300"}>galleries</a>
        <a className={"p-1 shadow-[inset_0_0_0_0_rgba(0,0,0,0)] hover:shadow-[inset_125px_0_0_0_rgba(0,0,0,1)] hover:text-white transition duration-300"}>about</a>
        <a className={"p-1 shadow-[inset_0_0_0_0_rgba(0,0,0,0)] hover:shadow-[inset_125px_0_0_0_rgba(0,0,0,1)] hover:text-white transition duration-300"}>contact</a>
      </div>
    </nav>
  );
}