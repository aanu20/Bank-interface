import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomeStyle.css";

import Recharges from "./recharge_bills.png";
import Homecontentimage from "./Home_content.jpg";
import cash from "./cashbackjpg.jpg"; // (unused, remove if not needed)

// ✅ Small reusable component for cards
const InfoCard = ({ title, subtitle, img, aos }) => (
  <div className="card" data-aos={aos}>
    <h3>{title}</h3>
    <p className="card_subtitle">{subtitle}</p>
    <img className="ml-34 w-15 mt-5 rounded-md" src={img} alt={title} />
  </div>
);

function Home() {
  const navigate = useNavigate();

  // ✅ Navigation functions
  const handleNavigate = (path) => () => navigate(path);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      {/* 🔹 Topbar */}
      <div className="topbar">
        <ul className="flex space-x-4 text-sm text-black" data-aos="fade-up">
          <li>
            <button onClick={handleNavigate("/login")} className="topbar_button">
              Login
            </button>
          </li>
          <li>
            <button
              onClick={handleNavigate("/create-account")}
              className="topbar_button"
            >
              Create
            </button>
          </li>
        </ul>
      </div>

     
      {/* 🔹 Hero Section + Scan Button */}
      <div className="relative flex">
        {/* Hero Section */}
        <div
          className="bg-gradient-to-br from-gray-700 to-black w-800 shadow-md rounded-lg ml-10 text-white p-10"
          data-aos="zoom-in"
        >
          <p className="ml-60 text-4xl font-bold bg-gradient-to-br from-violet-200 to-blue-400 bg-clip-text text-transparent">
            Your Gateway to the
          </p>
          <p className="ml-45 text-4xl font-bold bg-gradient-to-br from-violet-200 to-blue-400 bg-clip-text text-transparent">
            World of Digital Assets
          </p>
          <img
            className="w-[150px] ml-[300px] mt-10 rounded-md"
            src={Homecontentimage}
            alt="Digital Asset"
          />
          <p className="text-md bg-gradient-to-br from-violet-200 to-blue-400 bg-clip-text text-transparent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>

        {/* Scan Button */}
        <div className="absolute top-[80px] right-40" data-aos="fade-down">
          <button onClick={handleNavigate("/QR-scan")} className="w-[110px] h-[90px] bg-gradient-to-r from-violet-500 to-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:scale-105 transition transform">
            Scan it Pay it
          </button>
        </div>

        {/* Money Transfers */}
        <div
          className="bg-gradient-to-br from-gray-700 to-black w-500 shadow-md rounded-lg ml-3 mt-[300px] text-white p-10"
          data-aos="fade-up"
        >
          <h2 className="mb-5">Money Transfers</h2>
          <div className="flex justify-around" data-aos="flip-right">
            <img
              onClick={handleNavigate("/send-money")}
              className="money_transfers_icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6T0uvpjTxzbPd69HNzFLH_4FLKYc2uJi7Tw&s"
              alt="To Mobile"
            />
            <img
              onClick={handleNavigate("/to-account")}
              className="money_transfers_icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBXTJV66dpAhEDNE3Fbmnzpuj_6ItCwE1zA&s"
              alt="To Account"
            />
            <img
              className="money_transfers_icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDON5kA9mUfIPaBhq2o8mu6jSt8-JUIiUn7w&s"
              alt="Check Balance"
            />
          </div>
          <div className="flex justify-around">
            <h5>To mobile number</h5>
            <h5>To account</h5>
            <h5>Check balance</h5>
          </div>
        </div>
      </div>


      {/* 🔹 Services Section */}
      <div className="bg-gradient-to-br from-gray-600 to-black rounded-md w-[1000px] ml-10 mt-10 mr-40 flex flex-col h-full">
        <div className="flex justify-around">
          <InfoCard
            title="Recharges & Bills"
            subtitle="Loan EMI, Electricity, Rent"
            img={Recharges}
            aos="fade-up"
          />
          <InfoCard
            title="Travel & Transit"
            subtitle="Flight, Train, Bus, Hotel, Metro"
            img={Recharges}
            aos="fade-up"
          />
        </div>

        <div className="flex justify-around">
          <InfoCard
            title="Insurance"
            subtitle="Motor, Health and Life Term"
            img={Recharges}
            aos="fade-up"
          />
          <InfoCard
            title="Loans"
            subtitle="Mutual funds, Gold, Home and Car"
            img={Recharges}
            aos="fade-up"
          />
        </div>
      </div>

      {/* 🔹 About Us */}
      <div>
        <span className="flex items-center justify-center mt-10 text-white text-xl">
          About us
        </span>
        <div className="p-10 text-white">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
