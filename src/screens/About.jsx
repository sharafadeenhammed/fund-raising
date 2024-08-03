import { useState } from "react"
import { Link } from "react-router-dom"
import image1 from "../assets/img/smilling-girls-2-removebg.png"
import OngoingItem from "../component/OngoingItem"
import { TO_DONATE } from "../constansts/data"
import OngoingItemModal from "../component/OngoingItemModal"

function About() {
  const [ openModal, setOpenModal ] = useState(false)
  return (
    <div className=" ">
      <OngoingItemModal openModal={openModal} handleClose={() => setOpenModal(false)} />
      <div className="w-screen relative pt-40  items-center justify-between bg-red-950 ">
        <div className="overflow-hidden contain-content">
          <img className="object-cover inline-block w-full h-full" src={image1} />
        </div>
        <div className="bg-[rgba(0,0,0,0.5)]  z-10 h-full absolute top-0 flex-col items-center w-full" />

        <div
          className="z-20 absolute md:block md:left-[20%] md:top-[50%] md:-translate-y-[50%] md:w-[50%] w-100% top-[30%]  ">
          <p className="md:text-4xl text-xl font-mono font-bold text-slate-300 text-left md:leading-[45px] pl-2">
            Join Us in Making a Difference <br />
            <span className="font-thin md:text-3xl text-lg tracking-normal">Your support can change lives. Help us reach our goal and empower those in need.</span> <br />
            <span className="font-thin md:text-3xl text-lg tracking-normal">Together, we can create a brighter future.</span>
            <br className="md:mb-10 mb-3" />
            <span
              onClick={() => setOpenModal(true)}
              className="px-5 mt-5 inline-block py-1 tracking-[2px] cursor-pointer bg-orange-500 rounded-[90px] text-white">
              <span>Donate Now</span>
            </span> <br />
          </p>
        </div>
      </div>

      {/* ongoing projects */}
      <div
        className="px-5 my-10 grid grid-cols-1 items-center justify-between md:grid-cols-2 gap-x-[10px] gap-y-[30px]"
      >
        {
          TO_DONATE.map((item, index) => <OngoingItem item={item} />)
        }
      </div>

    </div>
  )
}

export default About