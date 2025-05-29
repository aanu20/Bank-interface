import DepoistSelf from "./DepoistSelf";
import { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { canara,axis,HDFC,indian,IOS,KMB,KVB,maha,SBI,UBI,Baroda,pandyan } from "./BankImages";
function AddAccount() {
    const [phone, setPhone] = useState([]);
    useEffect(() => {
            AOS.init({ duration: 1200 });
        
            fetch("http://localhost:5000/phone")
                .then((res) => res.json())
                .then((data) => {
                    setPhone(data);  // or [...messages, data] if appending
                    console.log("Last entry of rec:", data);
                })
                .catch((err) => {
                    console.error("Error fetching last money data:", err);
                });
        }, []);
    return (
        <>
            <div className="w-[590px] h-[700px] ml-[500px] bg-gray-300 rounded-md shadow  absolute top-0">
               <p className="mt-10 ml-10 text-xl font-bold">Add Bank Account linked with +91 {phone.phone}</p> 

               <div className="ml-10 mt-10 flex flex-row">
                    <input type="text" placeholder="Search by Bank Name" className="w-2/3 px-4 py-1 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
               </div>
               <p className="mt-5 ml-10 font-bold">Popular Banks</p>
               <div className="flex flex-col mt-10">
                   <div className="flex flex-rows rounded-sm">
                        <div className="image_div">
                            <img className="image_style " src={canara}></img>
                            <p className="text-xs ml-5">Canara Bank</p>
                        </div>

                        <div className="image_div">
                            <img className="image_style" src={axis}></img>
                            <p className="text-xs ml-5">Axis Bank</p>
                        </div>
                        <div className="image_div">
                            <img className="image_style" src={HDFC}></img>
                            <p className="text-xs ml-5">HDFC Bank</p>
                        </div>
                        <div className="image_div">
                            <img className="image_style" src={IOS}></img>
                            <p className="text-xs ml-6">Indian Overseas Bank</p>
                        </div>
                   </div>
                   
                   <div className="flex flex-rows rounded-sm mt-10">
                        <div className="image_div">
                            <img className="image_style" src={maha}></img>
                            <p className="text-xs ml-5">Maharastra Bank</p>
                        </div>
                        <div className="image_div">
                            <img className="image_style" src={pandyan}></img>
                            <p className="text-xs ml-5">Pandyan Bank</p>
                        </div>
                        <div className="image_div">
                            <img className="image_style" src={Baroda}></img>
                            <p className="text-xs ml-2">Bank of Baroda </p>
                        </div>
                        <div className="image_div">
                            <img className="image_style" src={UBI}></img>
                            <p className="text-xs ml-5">Union Bank of India</p>
                        </div>    
                   </div>
                   <div className="flex flex-rows rounded-sm mt-10">
                        <div className="image_div">
                            <img className="image_style" src={SBI}></img>
                            <p className="text-xs ml-5">State Bank of India </p>
                        </div>
                        <div className="image_div">
                            <img className="image_style" src={indian}></img>
                            <p className="text-xs ml-5">Indian Bank </p>
                        </div>
                        <div className="image_div">
                            <img className="image_style" src={KVB}></img>
                            <p className="text-xs ml-5">Karur Vysya Bank</p>
                        </div>
                        <div className="image_div">
                            <img className="image_style" src={KMB}></img>
                            <p className="text-xs ml-5">Kotak Mahindra Bank</p>
                        </div>
                   </div>
               </div>

            </div>
            <DepoistSelf />
        </>
    );
}

export default AddAccount;
