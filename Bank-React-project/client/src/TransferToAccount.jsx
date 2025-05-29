import "./HomeStyle.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function TransferToAccount(){
    const navigate=useNavigate();
    useEffect(()=>{
        AOS.init({duration:1200})
    });
    const to_self=()=>{
        navigate('/depoist')
    }
    return <>
    <div className="text-white  flex flex-row">
        <div className="shadow rounded-xl h-3/2 w-3/2 mt-40 ml-10 bg-gradient-to-br from-black to-green-800 p-10 space-y-5">
            <h2 className="font-bold text-2xl">Send Money to account</h2>
            <p>at Zero wait time</p>
            <img className=" rounded-xl shadow"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbg5ssstFcZGR9d9JhKqJXsGAzodtneAcfQ&s"></img>
        </div>
        <div className=" rounded-md shadow w-3/2 flex-col ml-30 mt-70 bg-gradient-to-br from-black to-green-700 pt-5 mr-40 pr-5">
            <div onClick={to_self} className="account_card">
                <img  className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xfuO6ZEPzsvxxu2Cad3RtDbotRWzoM2NPQ&s"data-aos="zoom-in"></img>    
                <p className="mt-4 ml-5">To Self Bank Account</p>
                
            </div>
            <div className="account_card">
                <img  className ="image"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4zhYlXqbUFwgZSv-Ha9DUJc0dx81G8qIPw&s" data-aos="zoom-in"></img>
                <p className="mt-4 ml-5">To Account number & IFSC</p>
            </div>
            <div className="account_card">
                <img  className ="image"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6lDw_nTSBDtj-SU51F70TvIQgenU4TIUktw&s" data-aos="zoom-in"></img>
                <p className="mt-4 ml-5">To Any UPI App</p>
            </div>
        </div>
    </div>
    <div className="text-white mt-20 ml-10">
        <h2>Assistance & Help</h2>
        <div className="flex flex-col account_card2" data-aos="faded-up">
            <div className="mt-10 ml-10 p-5 account_card1"data-aos="faded-up">
                <p>How to Send Money to myself ?</p>
            </div>
            <div className="mt-10 ml-10 p-5 account_card1" data-aos="faded-up">
                <p>can I cancel a payment? ,How to cancel a payment?</p>
            </div>
            <div className="mt-10 ml-10 p-5 account_card1" data-aos="faded-up">
                <p>How to Send Money using UPI,Mobile number and account? </p>
            </div>
            <div className="mt-10 ml-10 p-5 account_card1" data-aos="faded-up">
                <p>Can I send money using my wallet balance? </p>
            </div>
            <div className="mb-20 mt-10 ml-10 p-5 account_card1" data-aos="faded-up">
                <p>What if I face issues with a Payment? </p>
            </div>
        </div>
    </div>
    </>
}
export default TransferToAccount;