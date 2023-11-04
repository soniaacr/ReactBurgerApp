import Background from '../assets/images/burgerfries2.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
      <h1 className="font-extrabold text-5xl text-white mb-15">BLISSFULLY DELICIOUS DELIVERED TO YOU FUNKY FAST.</h1>
        </div>
    </div>
  )
}

export default Home