
import image1 from "../assets/img/smilling-girls-3.png"
import donate from "../assets/img/donate.png"
import cart from "../assets/img/cart.png"
import dollar from "../assets/img/dollars.png"

function Showcase({ image, showBottomTag, showcaseTitle, showcaseTagLine }) {
  return (
    // showcase
    <div>
      <div className="w-screen md:px-10 md:h-[95vh] md:py-0 py-10 md:flex md:flex-row flex-col items-center justify-between bg-red-950 ">
        <div>
          <img className="object-contain inline-block md:mb-0 mb-10  h-[40%]  border-transparent" src={image1} />
        </div>

        <div className="flex-col px-10 items-center md:w-[40%] w-full">
          <p className="text-3xl font-semibild text-white text-left leading-[45px]">Empowering Girls In <br /> Tanzania Through Digital Skills</p>
          <div className="mt-8 w-full flex justify-center">
            <p className="text-white text-xl font-thin md:w-[90%] w-full">We are dedicated to providing girls in Tanzania with with the tools they need to acquire digital skills and improve theit opportunities for success</p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-between md:bg-red-100 w-screen h-20 ">
        <div className=" w-full left-0 bg-transparent md:px-10 md:absolute -top-7 md:self-center " >
          <div className=" bg-red-800 relative self-center px-5 md:flex items-center justify-evenly grid grid-cols-1 gap-y-5 " >
            {/* device gift */}
            <div className="flex flex-row md:w-[30%] md:justify-start py-2 w-full justify-between">
              <img className="h-14 mr-2 inline-block" src={donate} />
              <div className="h-full flex-col justify-between">
                <p className="text-left text-red-300 text-[10px] font-semibold ">phone donated</p>
                <p className=" text-white text-3xl font-extrabold text-left">102</p>
              </div>
            </div>
            <div className="flex justify-center flex-row w-[30%]" />
            {/* girls sponsored count */}
            <div className="flex md:justify-center md:absolute flex-row md:w-[30%] py-2  -top-5 md:bg-red-900 w-full justify-between ">
              <img className="h-14 mr-2 inline-block" src={cart} />
              <div className="h-full flex-col justify-between">
                <p className="text-left text-red-300 text-[10px] font-semibold ">girls sponsored</p>
                <p className=" text-white text-3xl font-extrabold text-left">35</p>
              </div>
            </div>
            {/* money raised so far */}
            <div className="flex flex-row md:w-[30%] md:justify-end py-2 w-full justify-between">
              <img className="h-14 mr-2 inline-block" src={dollar} />
              <div className="h-full flex-col justify-between">
                <p className="text-left text-red-300 text-[10px] font-semibold ">money raised so far</p>
                <p className=" text-white text-3xl font-extrabold text-left">200k USD</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Showcase