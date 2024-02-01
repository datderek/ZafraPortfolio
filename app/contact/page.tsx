import NavBar from '../components/NavBar';

export default function Contact() {
  return (
    <div className='bg-neutral-100'>
      <NavBar isSticky={true} backgroundColor={'bg-neutral-100'}/>
      <main className="pt-40 w-full h-screen flex justify-center items-center">
        <div className="h-full flex-1 pl-14 pr-28 py-14">
          <h1 className="text-neutral-800 text-5xl font-bold flex justify-center items-center">CONTACT ME</h1>
          <p>Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Pellentesque elit eget gravida cum sociis. Mi eget mauris pharetra et ultrices neque ornare. Sed id semper risus in hendrerit gravida rutrum. Cras ornare arcu dui vivamus arcu felis. Vitae justo eget magna fermentum. Faucibus in ornare quam viverra. Vel facilisis volutpat est velit egestas dui. Ultricies lacus sed turpis tincidunt. Risus quis varius quam quisque id diam. Et magnis dis parturient montes nascetur ridiculus mus mauris. Ultrices in iaculis nunc sed augue lacus.</p>
        </div>
      </main>
    </div>
  )
}