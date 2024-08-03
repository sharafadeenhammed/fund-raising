import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QRCode from "react-qr-code";
import { toast } from "react-toastify";
import { FaCopy, FaLink, FaTimes, FaCoins } from "react-icons/fa";
import btcLogo from "../assets/img/btc.png";
import usdtLogo from "../assets/img/usdt.png";


function OngoingItemModal({ openModal, item, handleClose = null }) {
  const USDT = { value: "TLC4NEBWtSaNANhznhaKWLRTnZxK5gFeWN", title: "USDT", image: usdtLogo, }
  const BTC = { value: "3G3hqyWcRocCYNHzN9ZtcEd7TszMqERf86", title: "BTC", image: btcLogo }
  const COINS = {
    USDT,
    BTC
  }
  const [ address, setAdress ] = useState(COINS.USDT)

  const onAddressChange = (e) => {
    console.log(e.target.value);
    setAdress(COINS[ e.target.value ])
  }
  return (
    <AnimatePresence>
      {openModal ?
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onClick={() => handleClose && handleClose()}
          style={{ scrollbarWidth: "thin" }}
          className="fixed overflow-y-scroll top-0 left-0 bg-[rgba(0,0,0,0.75)] h-screen w-screen z-50 ">
          <div className="h-full w-full flex items-center justify-center ">
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white py-2 pt-5 rounded-3xl md:w-1/2 min-h-[50%] w-[90%] flex items-center flex-col"
            >
              <div onClick={() => handleClose && handleClose()} className="  w-full px-10 mb-5 flex justify-between" >
                <div className="flex items-center justify-start">
                  <p className="font-bold  mx-1 "> {address.title} </p>
                  <img className=" h-5 w-5 " src={address.image} alt="" />
                </div>
                <div className="p-3 rounded-full bg-[rgba(200,50,50,0.4)]">
                  <FaTimes color="rgba(200,50,50,0.9)" size={20} />
                </div>
              </div>
              <div className="mb-5 flex justify-center py-2 w-full ">
                <select className="outline-none border-none rounded-lg w-1/2 py-2 px-2" value={address.title} onChange={onAddressChange}>
                  <option value="USDT" >
                    USDT
                    <img className="h-5 w-5" src={USDT.image} />
                  </option>
                  <option value="BTC" >
                    BTC
                    <img className="h-5 w-5" src={BTC.image} />
                  </option>
                  <option value="BTC" />
                </select>
              </div>
              <div className="mb-5">
                <QRCode size={300} value={address.value} />
              </div>

              <div className="flex justify-center flex-col items-center">
                <p className="mb-5"> {address.value} </p>

                <span onClick={() => {
                  navigator.clipboard.writeText(address.value)
                  toast.success("copied!")
                }}
                  className="bg-red-950 flex mb-5 justify-center items-center hover:cursor-pointer px-4 py-1 mx-2 rounded-3xl text-white font-bold w-full ">
                  Copy <FaLink className="mx-2" color="#ffffff" />
                </span>

              </div>
            </div>

          </div>

        </motion.div>
        : null
      }
    </AnimatePresence>
  )
}

export default OngoingItemModal