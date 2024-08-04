import { useState } from "react"
import OngoingItemModal from "./OngoingItemModal";
function OngoingItem({ item }) {
  const [ openModal, setOpenModal ] = useState(false);

  return (
    <>
      <OngoingItemModal handleClose={() => setOpenModal(false)} openModal={openModal} item={item} />
      < div className="bg-gray-100 h-full w-full rounded-2xl box-border" >
        <img
          className="block border-none outline-none rounded-t-2xl md:h-[70%] h-[58%] w-full mb-5 object-cover"
          src={item.image} />
        <div className="px-3 ">
          <p className="font-bold md:text-lg text-[14px]">
            {item.title}
          </p>
          <div
            className=" text-red-950 my-5 flex md:flex-row flex-col justify-between items-center">
            <p className=" md:w-auto w-full bg-gray-200 px-5 rounded-3xl py-3">Donated {item.donationFrom} of {item.donationTo}</p>
            <p onClick={() => setOpenModal(true)} className=" my-3 text-center w-full md:w-auto  mx-1hover:cursor-pointer text-white px-5 rounded-3xl py-3 bg-red-950">DONATE</p>
          </div>
        </div>
      </div >
    </>
  )
}

export default OngoingItem