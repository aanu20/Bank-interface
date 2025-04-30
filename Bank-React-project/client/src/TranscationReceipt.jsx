import TransactionLayout from "./TransactionLayout";
import { useState ,useEffect} from "react";
import "./HomeStyle.css"
import bank from './Bank.png'
import AOS from "aos";
import "aos/dist/aos.css";
function TranscationReceipt(){
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        AOS.init({ duration: 1200 });
    
        fetch("http://localhost:5000/moneydata/last")
            .then((res) => res.json())
            .then((data) => {
                setMessages(data);  // or [...messages, data] if appending
                console.log("Last entry of rec:", data);
            })
            .catch((err) => {
                console.error("Error fetching last money data:", err);
            });
    }, []); // <-- Important: empty dependency array to run only once
    

    return<>
    <div className="flex flex-row">
        <TransactionLayout />
        <div className="w-[580px] p-20 text-white ml-30 mt-20 bg-gradient-to-br from-black to-violet-700 h-1/2" data-aos="zoom-in">
            <h3 className="font-bold">Paid to</h3>
            <div className='flex flex-row'>
                <p className="bg-gradient-to-br from-violet-700 to-pink-600  sendcard_view">
                        J
                </p>

                <div className="div_side_sent">
                    <p className="font-bold text-xl">James</p>
                    <p className="text-gray-300 text-xs">+919064587321</p>
                </div>
                <p className="ml-50 mt-11 font-bold">${messages}</p>
                
            </div>
            <div className='w-[500px] py-5 text-gray-600 rounded-xl  px-10 font-mons font-bold text-xs'>
                    <hr></hr>
                    <p className="text-gray-200 text-center">Banking Name  : Mr James Luos</p>
                    <hr></hr>
            </div>
            <div>
                <p className="mb-5">Transfer Details</p>
                <div>
                    <p className="id">Transaction ID</p>
                    <p className="mb-5">T267815487922073411</p>
                </div>
                
                <p className="id ">Debited from</p>
                <div className="flex flex-row">
                    <img className="w-10 h-10 mt-5 rounded-md" src={bank}></img>
                    <div className="flex flex-col mt-5 ml-10 ">
                        <p> XXXXXXX7895</p>
                        <p className="id">UTR : 1546423187966</p>
                    </div>
                    <p className="ml-50 mt-11 font-bold">${messages}</p>
                </div>
                <hr className="w-[400px] mt-5"></hr>
            </div>
        </div>
    </div>
    </>
}
export default TranscationReceipt;