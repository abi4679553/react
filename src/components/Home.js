import screenhost from '../assests/desserts-rose-petals-black-background.jpg'

function Home() {
    return (
        <div className="relative w-full">
  <img src={screenhost} alt="Screenshot" className="w-full h-[80vh] object-cover" />
  
  <div className="absolute inset-0 flex flex-col border border-none ml-[50%] justify-center text-white text-center">
    <p className="text-5xl font-bold drop-shadow-lg">Perfect Gift</p>
    <p className="text-3xl p-2 drop-shadow-md">For Festive Wishws</p>
  </div>
</div>

        
    )

}
export default Home