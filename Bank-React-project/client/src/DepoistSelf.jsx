
import './HomeStyle.css';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function DepoistSelf(){
    const navigate=useNavigate()
    useEffect(()=>{
            AOS.init({duration:1200})
        });
    const selectaccount=()=>{
        navigate('/depoist/select')
    }
    return<>
    <div className='bg-gray-400 h-[700px] w-1/2 ml-[200px] rounded-md text-white'>
        <div className='w-full'>
            <h1 className='p-10 bg-gray-900'>To Self Account</h1>
            <button onClick={selectaccount} className='ml-[300px] mt-[130px] rounded-md bg-violet-900 pr-5 pl-5 pt-2 pb-2 transition-transform duration:300 hover:-translate-y-1 hover:shadow-md hover:scale-85 hover:cursor-pointer'>
                Add New Bank Account
            </button>
        </div>
    </div>


    </>
}
export default DepoistSelf;