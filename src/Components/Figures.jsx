import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Figures = () => {
  const [amiibo, setAmiibo] = useState([]);
  const [sortedBy, setSortedBy] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const navigate = useNavigate();

  const CharacterAmiibo = async () => {
    try {
      const response = await axios.get(
        "https://www.amiiboapi.com/api/amiibo/?character&type=figure",
        {
          headers: { accept: "application/json" },
        }
      );
      const amiiboData = response.data.amiibo.map((item) => ({
        name: item.character,
        image: item.image,
        series: item.amiiboSeries,
        tail: item.tail,
      }));
      setAmiibo(amiiboData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    CharacterAmiibo();
  }, []);

  // sort by name
  const sortByName = () => {
    let sorted;
    if (sortedBy === "name") {
      sorted = [...amiibo].reverse();
      setSortedBy(null);
    } else {
      sorted = [...amiibo].sort((a, b) => a.name.localeCompare(b.name));
      setSortedBy("name");
    }
    setAmiibo(sorted);
    setCurrentPage(1);
  };

  //sort by series
  const sortBySeries = () => {
    let sorted;
    if (sortedBy === "Series") {
      sorted = [...amiibo].reverse();
      setSortedBy(null);
    } else {
      sorted = [...amiibo].sort((a, b) => a.series.localeCompare(b.series));
      setSortedBy("Series");
    }
    setAmiibo(sorted);
    setCurrentPage(1);
  };

  // search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = amiibo
    .filter((e) => e.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(amiibo.length / itemsPerPage);

  let pageNumbers = [];
  if (totalPages <= 5) {
    pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    pageNumbers = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }

  return (
    <div className="">
      <div>
        <Nav handleSearch={handleSearch} />
      </div>

      <div className=" mt-48 2xl:container ml-28 2xl:px-20 xl:px-12 sm:px-6 px-5 mb-16">
        <h1 className="lg:text-5xl text-3xl font-bold leading-9 text-black">
          Amiibo Characters Figure
        </h1>
      </div>

      <div className="container justify-between flex ml-48 ">
        <div className="flex">
          <div className="font-bold text-xl mt-2 mr-4">Sort By :</div>
          <button
            onClick={sortByName}
            className="bg-black flex mb-2 text-white  rounded-3xl py-3 px-8 font-medium mr-4 hover:bg-transparent hover:border-black hover:text-black duration-300 hover:border border border-transparent"
          >
            Name <div className="ml-5">⇅</div>
          </button>
          <button
            onClick={sortBySeries}
            className="bg-black flex mb-2 text-white rounded-3xl py-3 px-8 font-medium   mr-4 hover:bg-transparent hover:border-black hover:text-black duration-300 hover:border border border-transparent"
          >
            Series <div className="ml-5">⇅</div>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mx-24 mt-10 mb-5 gap-y-20 gap-x-20 px-16 justify-center">
        {currentItems.map((e) => (
          <div
            key={e?.tail}
            className="flex flex-col w-[350px] h-[320px] border-2 shadow-xl shadow-slate-500 items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => {
              navigate("/FiguresDetail", { state: { id: e?.tail } });
            }}
          >
            <div className="block">
              <img
                src={e?.image}
                alt=""
                className="max-h-[200px] mt-5 max-w-[500px] "
              />
            </div>
            <div className="font-bold text-slate-700 mt-5 items-start text-xl ">
              {e?.name}
            </div>
            <div className="font-extralight text-slate-500 items-start text-base ">
              {e?.series}
            </div>
          </div>
        ))}
      </div>
      {currentItems.length === 0 && (
        <div className="text-center  mt-10 text-lg text-gray-600">
          <img
            src="../src/assets/search2.png"
            width="200"
            height="100"
            className="mx-auto mb-5"
            alt=""
          />
          No amiibo character figure found here . . .
        </div>
      )}
      {/* {pagination} */}
      <div>
        <ul className="flex justify-end mr-48 mt-20">
          <li
            className={`cursor-pointer mx-1 py-3 px-5 bg-black flex mb-2 text-white  rounded-3xl font-medium ml-2 hover:bg-transparent mr-4 hover:border-black hover:text-black duration-300 hover:border border border-transparent ${
              currentPage === 1
                ? "pointer-events-none bg-white border-black text-slate-900 "
                : ""
            }`}
            onClick={() => {
              if (currentPage > 1) {
                paginate(currentPage - 1);
              }
            }}
          >
            Back
          </li>

          {pageNumbers.map((pageNumber, index) => (
            <li
              key={index}
              className={`cursor-pointer mx-1 py-3 px-5  flex mb-2   rounded-3xl font-medium mr-4 duration-300  border-2 hover:bg-black hover:text-white ${
                pageNumber === currentPage ? "bg-black text-white" : ""
              }`}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </li>
          ))}

          <li
            className={`cursor-pointer mx-1 py-3 px-5 bg-black flex mb-2 text-white  rounded-3xl font-medium ml-2 hover:bg-transparent hover:border-black hover:text-black duration-300 hover:border border border-transparent ${
              currentPage === totalPages
                ? "pointer-events-none  bg-white border-black text-slate-900"
                : ""
            }`}
            onClick={() => {
              if (currentPage < totalPages) {
                paginate(currentPage + 1);
              }
            }}
          >
            Next
          </li>
        </ul>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Figures;
