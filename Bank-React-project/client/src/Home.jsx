
import { useNavigate } from "react-router-dom";
import './HomeStyle.css'
import Recharges from './recharge_bills.png'
import Homecontentimage from  './Home_content.jpg';
function Home(){
    const navigate = useNavigate();
    const Login=()=>{
        navigate("/login")
    }
    const create=()=>{
        navigate("/create-account")
    }
    return<>
        <div className="w-full flex justify-end p-0.5">
            <ul className="flex space-x-4 text-sm text-black">
                <li><button onClick={Login} className="bg-white p-2 rounded-md shadow hover:bg-gray-300 hover:cursor-pointer transition">Login</button></li>
                <li><button  onClick={create} className="bg-white p-2 rounded-md shadow hover:bg-gray-300 hover:cursor-pointer transition">Create</button></li>
            </ul>
        </div>
    
    <div className="flex justify-end">
      <div className=" bg-gradient-to-br from-gray-700 to-black w-800 shadow-md bg-black rounded-lg ml-10 text-white p-10">
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
      <div className="bg-gradient-to-br from-gray-700 to-black w-500 shadow-md bg-black rounded-lg mt-100 ml-3 text-white p-10">
          <h2 className="mb-5">Money Transfers</h2>
          <div className="flex justify-around">
            <img className="w-20 rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6T0uvpjTxzbPd69HNzFLH_4FLKYc2uJi7Tw&s"></img>
            <img className="w-20 rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBXTJV66dpAhEDNE3Fbmnzpuj_6ItCwE1zA&s"></img>
            <img className="w-20 rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDON5kA9mUfIPaBhq2o8mu6jSt8-JUIiUn7w&s"></img>
          </div>
          <div className="flex justify-around">
              <h5>To mobile number</h5>
              <h5>To account</h5>
              <h5>Check balance</h5>
          </div>
      </div>
    </div>
    <div className="rounded-md w-[1000px] ml-20 mt-10 mr-40 bg-white flex justify-around">
      <div className="text-black flex justify-start bg-gradient-to-br from-violet-100 to-violet-400 w-96 shadow-md rounded-lg mt-10 ml-12 p-3">
      <h3 className="text-bold text-lg font-mons ml-4">Make life easier</h3>
        <div className="border-2 border-white bg-gradient-to-br from-gray-700 to-gray-900 w-60 shadow-md bg-black rounded-lg mt-10 text-white p-3">
          <h3>Recharges & Bills</h3>
          <p className="text-xs bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">Loan EMI,  Electricity,  Rent</p>
          <img className="ml-34 w-15 mt-5 rounded-md" src={Recharges}></img>
        </div>
      
      </div>
      <div className="text-black flex justify-start bg-gradient-to-br from-violet-100 to-violet-400 w-96 shadow-md rounded-lg mt-10 ml-12 p-3">
      <h3 className="text-bold text-lg font-mons ml-4">Make life easier</h3>
        <div className="border-2 border-white bg-gradient-to-br from-gray-700 to-gray-900 w-60 shadow-md bg-black rounded-lg mt-10 text-white p-3">
          <h3>Recharges & Bills</h3>
          <p className="text-xs bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">Loan EMI,  Electricity,  Rent</p>
          <img className="ml-34 w-15 mt-5 rounded-md" src={Recharges}></img>
        </div>
      
      </div>
    </div>
    </>
}
export default Home