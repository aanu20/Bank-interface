
import { useNavigate } from "react-router-dom";
import './HomeStyle.css'
import Recharges from './recharge_bills.png'
import Homecontentimage from  './Home_content.jpg';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cash from "./cashbackjpg.jpg"
function Home(){
    const navigate = useNavigate();
    const Login=()=>{
        navigate("/login")
    }
    const create=()=>{
        navigate("/create-account")
    }
    useEffect(()=>{
      AOS.init({duration:1200})
    })
    return<>
        <div className="topbar">
            <ul className="flex space-x-4 text-sm text-black" data-aos="fade-up">
                <li><button onClick={Login} className="topbar_button" >Login</button></li>
                <li><button  onClick={create} className="topbar_button">Create</button></li>
            </ul>
        </div>
    
    <div className="flex justify-end">
      <div className=" bg-gradient-to-br from-gray-700 to-black w-800 shadow-md bg-black rounded-lg ml-10 text-white p-10" data-aos="zoom-in">
        <p className="ml-60 text-4xl font-bold bg-gradient-to-br from-violet-200 to-blue-400 bg-clip-text text-transparent">
          Your Gateway to the
        </p>
        <p className="ml-45 text-4xl font-bold bg-gradient-to-br from-violet-200 to-blue-400 bg-clip-text text-transparent">
          World of Digital Assets
        </p>
        <img
          className=" w-[150px] ml-[300px] mt-10 rounded-md"
          src={Homecontentimage}
          alt="Digital Asset"
        />
        <p className="text-md bg-gradient-to-br from-violet-200 to-blue-400 bg-clip-text text-transparent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      <div className="bg-gradient-to-br from-gray-700 to-black w-500 shadow-md bg-black rounded-lg mt-100 ml-3 text-white p-10" data-aos="fade-up">
          <h2 className="mb-5">Money Transfers</h2>
          <div className="flex justify-around" data-aos="flip-right">
            <img className="money_transfers_icon"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6T0uvpjTxzbPd69HNzFLH_4FLKYc2uJi7Tw&s"></img>
            <img className="money_transfers_icon"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBXTJV66dpAhEDNE3Fbmnzpuj_6ItCwE1zA&s"></img>
            <img className="money_transfers_icon"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDON5kA9mUfIPaBhq2o8mu6jSt8-JUIiUn7w&s"></img>
          </div>
          <div className="flex justify-around">
              <h5>To mobile number</h5>
              <h5>To account</h5>
              <h5>Check balance</h5>
          </div>
      </div>
    </div>

    <div className="bg-gradient-to-br from-gray-600 to-black rounded-md w-[1000px] ml-10 mt-10 mr-40 bg-white flex flex-col h-full">
      
      <div className="flex justify-around">
        <div className="card" data-aos="fade-up">
          <h3>Recharges & Bills</h3>
          <p className="card_subtitle">Loan EMI, Electricity, Rent</p>
          <img className="ml-34 w-15 mt-5 rounded-md" src={Recharges} alt="Recharges" />
        </div>
        <div className="card" data-aos="fade-up">
          <h3>Travel & Transit</h3>
          <p className="card_subtitle">Flight,Train,Bus,Hotel,Metro</p>
          <img className="ml-34 w-15 mt-5 rounded-md" src={Recharges} alt="Recharges" />
        </div>
      </div>


      <div className="flex justify-around">

        <div className="card" data-aos="fade-up">
          <h3>Insurance</h3>
          <p className="card_subtitle">Motor,Health and Life Term</p>
          <img className="ml-34 w-15 mt-5 rounded-md" src={Recharges} alt="Recharges" />
        </div>
        <div className="card" data-aos="fade-up">
          <h3>Loans</h3>
          <p className="card_subtitle">Mutual funds,gold,Home and Car</p>
          <img className="ml-34 w-15 mt-5 rounded-md" src={Recharges} alt="Recharges" />
        </div>

      </div>
    
    </div>
    <div className="flex justify-start">
      <div>
        <img className="ml-10 rounded-md mt-10" src={cash}>
        </img>
      </div>
      <div className="mt-20 ml-150 bg-gradient-to-br from-gray-600 to-black rounded-md w-1/2">
        <h3 className="text-white ml-20 mt-10">Manage Payments</h3>
        <div>
          <p>hi</p>
        </div>
      </div>
    </div>
    </>
}
export default Home