import './HomeStyle.css'
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
function SendMoney(){
    const navigate=useNavigate();
    
    useEffect(()=>{
        AOS.init({duration:1200})
    })
    const Send=()=>{
        navigate('/Sendhistory')
    }
    return<>
        <div className="text-white bg-gradient-to-br from-gray-700 to-black w-[500px] rounded-md ml-30">
            <h2 className="font-bold text-2xl ml-20 mt-10">Send Money</h2>
            <p className="text-xs ml-20">to any UPI app</p>
            <div className="bg-gradient-to-br from-violet-500 to-black">
                <p className="mt-10 text-xs ml-20 bg-gradient-to-br from-gray-200 to-white bg-clip-text text-transparent p-5" >PAYMENTS & CHATS</p>
            </div>
            <div className="flex flex-col w-[700px]">
                
                <div onClick={Send} className="flex ml-10" data-aos="fade-up">
                    <p className="bg-gradient-to-br from-violet-700 to-pink-600 sendcard">
                        J
                    </p>
                    
                    <div className="div_side_sent">
                        <p className="font-bold text-xl">James</p>
                        <p className="text-gray-300 text-sm">$800 - Received Instantly</p>
                    </div>
                </div>
                <div className="flex ml-10"data-aos="fade-up">
                    <p className="bg-gradient-to-br from-gray-600 to-yellow-300 sendcard">
                        SP
                    </p>
                    
                    <div className="div_side_sent">
                        <p className="font-bold text-xl">Sam paul</p>
                        <p className="text-gray-300 text-sm">You: $130 - Sent Securely</p>
                    </div>
                </div>
                <div className="flex ml-10"data-aos="fade-up">
                    <p className="bg-gradient-to-br from-cyan-700 to-gray-200 sendcard">
                        E
                    </p>
                    
                    <div className="div_side_sent">
                        <p className="font-bold text-xl">Emma</p>
                        <p className="text-gray-300 text-sm">You: $50 - Sent Securely</p>
                    </div>
                </div>
                <div className="flex ml-10"data-aos="fade-up">
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
    </>
}
export default SendMoney