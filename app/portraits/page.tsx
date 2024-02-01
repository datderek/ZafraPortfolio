import fs from 'fs';
import Photo from '../components/Photo';
import NavBar from '../components/NavBar';

const filePaths: string[] = [];
fs.readdir('./public/portraits', (err, files) => {
  files.forEach(file => {
    filePaths.push(`/zafraportfolio/portraits/${file}`);
  })
})

export default function Portraits() {
  return (
    <div className='bg-neutral-100'>
      <NavBar isSticky={true} backgroundColor={'bg-neutral-100'}/>
      <main className="mt-40">
        <div className='w-full columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 p-4'>
          {filePaths.map((filePath, index) =>
            <Photo key={index} filePath={filePath}/>
          )}
        </div>
      </main>
    </div>
  )
}