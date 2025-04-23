import "./Home.css"
import { useNavigate } from "react-router-dom";
function Home(){
    const navigate = useNavigate();
    const Login=()=>{
        navigate("/login")
    }
    return<>
        <div className="w-full flex justify-end p-0.5">
            <ul className="flex space-x-4 text-sm text-black">
                <li><button onClick={Login} className="bg-white p-2 rounded-md shadow hover:bg-gray-300 hover:cursor-pointer transition">Login</button></li>
                <li><button className="bg-white p-2 rounded-md shadow hover:bg-gray-300 hover:cursor-pointer transition">Create</button></li>
            </ul>
        </div>
    </>
}
export default Home