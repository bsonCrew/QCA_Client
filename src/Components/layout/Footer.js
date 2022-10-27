export default function Footer() {
  return (
    <div className='flex flex-col px-24 z-2 py-24 w-screen h-24 bg-main justify-center'>
      <div className=''>
        <span className='text-center font-bold flex align-middle justify-center '>
          Project contributor:
          <a
            href='https://github.com/bsonCrew'
            target='_blank'
            rel='noopener noreferrer'
            className='mx-1 text-main decoration-[#50d71e]'
          >
            <h2 className='line-through line text-4xl decoration-[#ff4949]'>
              bson crew.
            </h2>
          </a>
          All rights reserved © 2022 - {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}
