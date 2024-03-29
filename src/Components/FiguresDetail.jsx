import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const FiguresDetail = () => {
  const [detail, setDetail] = useState(null);
  let location = useLocation();
  const navigate = useNavigate();

  const DetailAmiibo = async () => {
    try {
      const response = await axios.get(
        `https://www.amiiboapi.com/api/amiibo/?character&type=figure&tail=${location.state.id}`,
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

  useEffect(() => {
    console.log("location", location);
    DetailAmiibo();
  }, []);

  return (
    <div className="">
      <div>
        <button
          className="bg-black text-white mt-4 ml-5 rounded-3xl py-3 mb-3 px-8 font-medium inline-block mr-4 hover:bg-transparent hover:border-black hover:text-black duration-300 hover:border border border-transparent"
          onClick={() => navigate("/Figures")}
        >
          back
        </button>
      </div>
      <div className="justify-center flex">
        <h1 className="text-5xl font-extrabold text-slate-600">
          Figure Detail
        </h1>
      </div>

      {detail && (
        <div className="container mt-10 justify-between px-40 flex w-[1000px] h-[500px] mx-auto  border-2 shadow-xl py-16 shadow-slate-500 ">
          <div className="">
            <img
              src={detail?.image}
              alt=""
              className="h-[300px] mt-5 w-[250px] "
            />
          </div>
          <div className="flex flex-col ">
            <div className=" font-extrabold text-slate-600 text-3xl mt-2 mb-2">
              {detail?.name}
            </div>
            <table>
              <tr className="font-extralight text-slate-500 items-start text-base ">
                <td className="mb-6 text-lg font-normal">Amiibo Series </td>
                <td className="py-1 px-4"> : </td>
                <td>{detail?.amiiboSeries}</td>
              </tr>
              <tr className="font-extralight text-slate-500 items-start text-base ">
                <td className="mb-6 text-lg font-normal">Character </td>
                <td className="py-1 px-4"> : </td>
                <td>{detail?.character}</td>
              </tr>
              <tr className="font-extralight text-slate-500 items-start text-base ">
                <td className="mb-6 text-lg font-normal"> Game Series </td>
                <td className="py-1 px-4"> : </td>
                <td>{detail?.gameSeries}</td>
              </tr>
              <tr className="font-extralight text-slate-500 items-start text-base ">
                <td className="mb-6 text-lg font-normal">Type </td>
                <td className="py-1 px-4"> : </td>
                <td>{detail?.type}</td>
              </tr>
            </table>
            <div className="font-extralight mt-5 text-slate-500 items-start text-base ">
              <div className=" font-extrabold text-slate-600 text-3xl mt-2 mb-2">
                {" "}
                Release Date
              </div>
              <table className="">
                <tr className="mb-6 text-lg font-normal ">
                  au <td className="px-2">:</td>{" "}
                  <td className="text-lg italic font-thin">
                    {detail?.release?.au}
                  </td>
                </tr>
                <tr className="mb-6 text-lg font-normal">
                  eu <td className="px-2">:</td>{" "}
                  <td className="text-lg italic font-thin ">
                    {detail?.release?.eu}
                  </td>
                </tr>
                <tr className="mb-6 text-lg font-normal">
                  jp <td className="px-2">:</td>{" "}
                  <td className="text-lg italic font-thin ">
                    {detail?.release?.jp}
                  </td>
                </tr>
                <tr className="mb-6 text-lg font-normal">
                  na <td className="px-2">:</td>{" "}
                  <td className=" text-lg italic font-thin">
                    {detail?.release?.na}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default FiguresDetail;
