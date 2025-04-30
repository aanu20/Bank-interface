import './HomeStyle.css'
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";
import send from './send.png'
function TranscationHistory(){
    const navigate=useNavigate();
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([]);

    //animation
    useEffect(()=>{
        AOS.init({duration:1200})
    })
    //post money to flask
    const sent_message = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:5000/moneydata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputValue),
            });

            const data = await response.json();  // 👈 Receive response from Flask
            console.log(data);
        } catch (error) {
            console.error("There was an error submitting the form", error);
        }
        if (inputValue.trim() !== '') {
            setMessages([...messages, inputValue]);
            setInputValue('');  // clear input after sending
            }
        };
    //get data from flask
    fetch("http://localhost:5000/moneydata/last")
    .then((res) => res.json())
    .then((data) => {
        console.log("Last entry:", data);
    });
      
    const transcation=()=>{
        navigate('/transcation-success')
    }
    const Send=()=>{
        navigate('/Sendhistory')
    }
    return<>
        <div className='flex flex-row'>
            <div className="text-white bg-gradient-to-br from-gray-700 to-black w-[500px] rounded-md ml-30">
                <h2 className="font-bold text-2xl ml-20 mt-10">Send Money</h2>
                <p className="text-xs ml-20">to any UPI app</p>
                <div className="bg-gradient-to-br from-violet-500 to-black">
                    <p className="mt-10 text-xs ml-20 bg-gradient-to-br from-gray-200 to-white bg-clip-text text-transparent p-5" >PAYMENTS & CHATS</p>
                </div>
                <div className="flex flex-col w-[700px]">
            
                    <div onClick={Send} className="flex ml-10" >
                        <p className="bg-gradient-to-br from-violet-700 to-pink-600 sendcard">
                            J
                        </p>
            
                        <div className="div_side_sent">
                            <p className="font-bold text-xl">James</p>
                            <p className="text-gray-300 text-sm">$800 - Received Instantly</p>
                        </div>
                    </div>
                    <div className="flex ml-10">
                        <p className="bg-gradient-to-br from-gray-600 to-yellow-300 sendcard">
                            SP
                        </p>
            
                        <div className="div_side_sent">
                            <p className="font-bold text-xl">Sam paul</p>
                            <p className="text-gray-300 text-sm">You: $130 - Sent Securely</p>
                        </div>
                    </div>
                    <div className="flex ml-10">
                        <p className="bg-gradient-to-br from-cyan-700 to-gray-200 sendcard">
                            E
                        </p>
            
                        <div className="div_side_sent">
                            <p className="font-bold text-xl">Emma</p>
                            <p className="text-gray-300 text-sm">You: $50 - Sent Securely</p>
                        </div>
                    </div>
                    <div className="flex ml-10">
                        <p className="bg-gradient-to-br from-green-200 to-green-500 sendcard">
                            E
                        </p>
            
                        <div className="div_side_sent">
                            <p className="font-bold text-xl">Emilia</p>
                            <p className="text-gray-300 text-sm">$400 - Received Instantly</p>
                        </div>
                    </div>
                    <div className="flex ml-10"data-aos="fade-up">
                        <p className="bg-gradient-to-br from-blue-500 to-blue-300 sendcard">
                            M
                        </p>
            
                        <div className="div_side_sent">
                            <p className="font-bold text-xl">Mateo</p>
                            <p className="text-gray-300 text-sm">$20 - Received Instantly</p>
                        </div>
                    </div>
                    <div className="flex ml-10"data-aos="fade-up">
                        <p className="bg-gradient-to-br from-yellow-200 to-violet-700 sendcard">
                            T
                        </p>
            
                        <div className="div_side_sent">
                            <p className="font-bold text-xl">Thiago</p>
                            <p className="text-gray-300 text-sm">You: $150 - Sent Securely</p>
                        </div>
                    </div>
                    <div className="flex ml-10"data-aos="fade-up">
                        <p className="bg-gradient-to-br from-red-200 to-yellow-300 sendcard">
                            LN
                        </p>
            
                        <div className="div_side_sent">
                            <p className="font-bold text-xl">Liam Noah</p>
                            <p className="text-gray-300 text-sm">You: $470 - Sent Securely</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='rounded-xl shadow text-white  ml-20 bg-gradient-to-br from gray-400 to-gray-800 w-3/2' data-aos="zoom-out">
                <div className='flex flex-row'>
                    <p className="bg-gradient-to-br from-violet-700 to-pink-600 sendcard_view">
                            J
                    </p>
        
                    <div className="div_side_sent">
                        <p className="font-bold text-xl">James</p>
                        <p className="text-gray-300 text-xs">+91 9064587321</p>
                    </div>
                    
                    <div className='w-[270px] bg-white text-black rounded-xl mt-20 ml-10 px-10 font-mons font-bold text-xs'>
                        <p>Banking Name: Mr James Luos</p>
                    </div>
                </div>
                <p className='text-center text-xs mt-5'>July 21,2024</p>
                <div className='flex justify-end mb-10'>
                    <div className='send_you'>
                        <p className='mb-2'>$300</p>
                        <hr className='w-40'></hr>
                        <p className='mt-2 text-xs text-gray-300'>Sent Securely</p>
                        <p className='text-xs text-gray-300 ml-30'>7:09 PM</p>
                    </div>
                    <p className="bg-gradient-to-br from-yellow-400 to-yellow-500 mr-4 sendcard_view_You" data-aos="fade-out">
                            You
                    </p>
                </div>
                <p className='text-center text-xs mt-5'>July 29,2024</p>
                <div className='flex justify-start mb-10'>
                    <p className="bg-gradient-to-br from-yellow-400 to-yellow-500 mr-4 sendcard_view" data-aos="fade-out">
                            J
                    </p>
                    <div className='send_others'>
                        <p className='mb-2'>$100</p>
                        <hr className='w-40'></hr>
                        <p className='mt-2 text-xs text-gray-300'>Received Instantly</p>
                        <p className='text-xs text-gray-300 ml-30'>11:36 AM</p>
                    </div>
                </div>
                <p className='text-center text-xs mt-5'>August 21,2024</p>
                <div className='flex justify-end mb-10'>
                    <div className='send_you'>
                        <p className='mb-2'>$240</p>
                        <hr className='w-40'></hr>
                        <p className='mt-2 text-xs text-gray-300'>Sent Securely</p>
                        <p className='text-xs text-gray-300 ml-30'>2:07 PM</p>
                    </div>
                    <p className="bg-gradient-to-br from-yellow-400 to-yellow-500 mr-4 sendcard_view_You" data-aos="fade-out">
                            You
                    </p>
                </div>
                <p className='text-center text-xs mt-5'>October 16,2024</p>
                <div className='flex justify-start mb-10'>
                    <p className="bg-gradient-to-br from-yellow-400 to-yellow-500 mr-4 sendcard_view" data-aos="fade-out">
                            J
                    </p>
                    <div className='send_others'>
                        <p className='mb-2'>$30</p>
                        <hr className='w-40'></hr>
                        <p className='mt-2 text-xs text-gray-300'>Received Instantly</p>
                        <p className='text-xs text-gray-300 ml-30'>10:56 AM</p>
                    </div>
                </div>
                {/* dynamic value update in the body  */}
                <p className='text-center text-xs mt-5'>October 26,2024</p>
                {messages.map((msg, index) => (
                    <div onClick={transcation} key={index} className='flex justify-end mb-10'>
                    <div className='send_you'>
                        <p className='mb-2'>{msg}</p>
                        <hr className='w-40' />
                        <p className='mt-2 text-xs text-gray-300'>Sent Securely</p>
                        <p className='text-xs text-gray-300 ml-30'>9:07 PM</p>
                    </div>
                    <p className="bg-gradient-to-br from-yellow-400 to-yellow-500 mr-4 sendcard_view_You" data-aos="fade-out">
                        You
                    </p>
                    </div>
                ))}
                
                {/* enter the amount */}
                <div className='bg-black '>
                    <div className="flex justify-end mr-5 space-x-4 mt-25 pt-2">
                        <input
                            className="px-4 py-2 border-2 border-gray-200 rounded-md bg-gray-800"
                            type="text"
                            placeholder="Enter the Amount"
                            onChange={(e) => setInputValue(e.target.value)}
                            value={inputValue}
                        />
                        <img
                            src={send}
                            onClick={sent_message}
                            className="w-6 h-6 mt-2"
                            alt="Share icon"
                        />
                    </div>
                </div>


            </div>
        </div>
    </>
}
export default TranscationHistory