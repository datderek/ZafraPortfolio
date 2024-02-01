import fs from 'fs';

const filePaths: string[] = [];
fs.readdir('./public/portraits', (err, files) => {
  files.forEach(file => {
    filePaths.push(`/zafraportfolio/portraits/${file}`);
  })
})

export default function Portraits() {
  return (
    <div className='bg-neutral-200'>
      <main>
        <div className='w-full columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 p-4'>
          {filePaths.map((filePath, index) =>
            <img className='w-full mb-4' src={filePath}></img>
          )}
        </div>
      </main>
    </div>
  )
}