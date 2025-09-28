import Logo from '../assests/275604-P5Z8TI-767.jpg'
function Home (){
    return (
        <div className=" bg-blue-500 text-white flex  justify-between px-8 gap-5  py-5 shadow-red-500">
            <div>
              <img src={Logo}  alt='logo'  className=' h-10 w-10'/>
                </div>
                <div className="flex gap-10  ">
                    <a>Home</a>
                    <a>About</a>
                    <a>Contact</a>
                    <a>Services</a>
                </div>

                

        </div>
    )

}
export default Home