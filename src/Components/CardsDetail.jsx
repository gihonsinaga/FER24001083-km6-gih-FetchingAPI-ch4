import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ReactCardFlip from "react-card-flip";

const CardsDetail = () => {
  const [detail, setDetail] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  let location = useLocation();
  const navigate = useNavigate();

  const DetailCards = async () => {
    try {
      const response = await axios.get(
        `https://www.amiiboapi.com/api/amiibo/?character&type=card&showusage&tail=${location.state.id}`,
        {
          headers: { accept: "application/json" },
        }
      );

      console.log("response data detail", response.data);

      setDetail(response.data.amiibo[0]);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  useEffect(() => {
    console.log("location", location);
    DetailCards();
  }, [location.state.id]);

  return (
    <div className="">
      <div>
        <button
          className="bg-black text-white mt-4 ml-5 rounded-3xl py-3 mb-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-black hover:text-black duration-300 hover:border border border-transparent"
          onClick={() => navigate("/Cards")}
        >
          back
        </button>
      </div>

      <div className="justify-center flex">
        <button
          className=" bg-white text-5xl border-b text-slate-700 mt-4 pt-3 pb-4  px-8 font-extrabold inline-block mr-4 hover:bg-transparent hover:border-black hover:text-black duration-300 hover:border  border-transparent"
          onClick={flipCard}
        >
          ➭ Cards Detail
        </button>
      </div>

      <div>
        <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
          <div className="card">
            {detail && (
              <div className="container mt-10 justify-center flex w-[1000px] h-[500px] mx-auto  border-2 shadow-xl py-16 shadow-slate-500 ">
                <div className="">
                  <img
                    src={detail?.image}
                    alt=""
                    className="h-[300px] mt-5 w-[full] "
                  />
                </div>
                <div className="flex flex-col ml-20 ">
                  <div className="font-extrabold text-slate-600 text-3xl mt-5 mb-2">
                    {detail?.name}
                  </div>
                  <table className="max-w-[70px] ">
                    <tr className="font-extralight  text-slate-500 items-start text-base ">
                      <td className="mb-6 text-lg font-normal">Character </td>
                      <td className="py-1 pl-5 pr-3"> : </td>
                      <td className="text-lg  font-thin">
                        {detail?.character}
                      </td>
                    </tr>

                    <tr className="font-extralight text-slate-500 items-start text-base ">
                      <td className="mb-6 text-lg font-normal">Type </td>
                      <td className="py-1 pl-5 pr-3"> : </td>
                      <td className="text-lg  font-thin">{detail?.type}</td>
                    </tr>
                  </table>
                  <div className="font-extralight mt-5  text-slate-500 items-start text-base ">
                    <div className="font-extrabold text-slate-600 text-3xl mt-2 mb-2">
                      {" "}
                      Release Date
                    </div>
                    <table className="">
                      <tr className="mb-6 text-lg font-normal">
                        au <td className=" pl-5 pr-3">:</td>{" "}
                        <td className="text-lg italic font-thin">
                          {detail?.release?.au}
                        </td>
                      </tr>
                      <tr className="mb-6 text-lg font-normal">
                        eu <td className=" pl-5 pr-3">:</td>{" "}
                        <td className=" text-lg italic font-thin">
                          {detail?.release?.eu}
                        </td>
                      </tr>
                      <tr className="mb-6 text-lg font-normal">
                        jp <td className="pl-5 pr-3">:</td>{" "}
                        <td className=" text-lg italic font-thin">
                          {detail?.release?.jp}
                        </td>
                      </tr>
                      <tr className="mb-6 text-lg font-normal ">
                        na <td className="pl-5 pr-3">:</td>{" "}
                        <td className=" text-lg italic font-thin">
                          {detail?.release?.na}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="card ">
            {detail && (
              <div className="container mt-10 px-40 flex justify-center w-[1000px] h-[max] mx-auto  border-2 shadow-xl py-16 shadow-slate-500 ">
                <div className="flex flex-col ">
                  <div className="font-extralight text-slate-500 items-start text-base ">
                    <div className="font-extrabold text-slate-600 text-3xl mt-2 mb-5">
                      Nintendo 3DS™
                    </div>
                    <div className="">
                      <div className="mb-6 text-2xl font-medium">
                        {detail?.games3DS[0]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.games3DS[0]?.amiiboUsage[0]?.Usage}
                        </div>
                      </div>
                      <div className="mb-6 text-2xl font-medium">
                        {detail?.games3DS[1]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.games3DS[1]?.amiiboUsage[0]?.Usage}
                        </div>
                      </div>
                      <div className="mb-6 text-2xl font-medium">
                        {detail?.games3DS[2]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.games3DS[2]?.amiiboUsage[0]?.Usage}
                        </div>
                      </div>
                      <div className="mb-6 text-2xl font-medium">
                        {detail?.games3DS[3]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.games3DS[3]?.amiiboUsage[0]?.Usage}
                        </div>
                      </div>
                      <div className="mb-6 text-2xl font-medium">
                        {detail?.games3DS[4]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.games3DS[4]?.amiiboUsage[0]?.Usage}
                        </div>
                      </div>
                      <div className="mb-6 text-2xl font-medium">
                        {detail?.games3DS[5]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.games3DS[5]?.amiiboUsage[0]?.Usage}
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />

                  <div className="font-extralight text-slate-500 items-start text-base ">
                    <div className="font-extrabold text-slate-600 text-3xl mt-2 mb-5">
                      Nintendo Switch
                    </div>
                    <div className="">
                      <div className="mb-6 text-2xl font-medium">
                        {detail?.gamesSwitch[0]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.gamesSwitch[0]?.amiiboUsage[0]?.Usage}
                        </div>
                      </div>
                      <div className="mb-6 text-2xl font-medium">
                        {" "}
                        {detail?.gamesSwitch[1]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.gamesSwitch[1]?.amiiboUsage[0]?.Usage}
                        </div>
                      </div>
                      <div className="mb-6 text-2xl font-medium">
                        {" "}
                        {detail?.gamesSwitch[2]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.gamesSwitch[2]?.amiiboUsage[0]?.Usage}
                        </div>
                      </div>
                      <div className="mb-6 text-2xl font-medium">
                        {" "}
                        {detail?.gamesSwitch[3]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.gamesSwitch[3]?.amiiboUsage[0]?.Usage}
                        </div>
                      </div>
                      <div className="mb-6 text-2xl font-medium">
                        {" "}
                        {detail?.gamesSwitch[4]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.gamesSwitch[4]?.amiiboUsage[0]?.Usage}
                        </div>
                      </div>
                      <div className="mb-6 text-2xl font-medium">
                        {" "}
                        {detail?.gamesSwitch[5]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.gamesSwitch[5]?.amiiboUsage[0]?.Usage}
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />

                  <div className="font-extralight text-slate-500 items-start text-base ">
                    <div className="font-extrabold text-slate-600 text-3xl mt-2 mb-5">
                      Wii U™ GamePad
                    </div>
                    <div className="">
                      <div className="mb-6 text-2xl font-medium">
                        {detail?.gamesWiiU[0]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.gamesWiiU[0]?.amiiboUsage[0]?.Usage}
                        </div>
                      </div>
                      <div className="mb-6 text-2xl font-medium">
                        {detail?.gamesWiiU[1]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.gamesWiiU[1]?.amiiboUsage[0]?.Usage}
                        </div>{" "}
                      </div>
                      <div className="mb-6 text-2xl font-medium">
                        {detail?.gamesWiiU[2]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.gamesWiiU[2]?.amiiboUsage[0]?.Usage}
                        </div>{" "}
                      </div>
                      <div className="mb-6 text-2xl font-medium">
                        {detail?.gamesWiiU[3]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.gamesWiiU[3]?.amiiboUsage[0]?.Usage}
                        </div>{" "}
                      </div>
                      <div className="mb-6 text-2xl font-medium">
                        {detail?.gamesWiiU[4]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.gamesWiiU[4]?.amiiboUsage[0]?.Usage}
                        </div>{" "}
                      </div>
                      <div className="mb-6 text-2xl font-medium">
                        {detail?.gamesWiiU[5]?.gameName}
                        <div className="text-lg italic font-thin">
                          {detail?.gamesWiiU[5]?.amiiboUsage[0]?.Usage}
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            )}
          </div>
        </ReactCardFlip>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CardsDetail;
