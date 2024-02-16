
import "./SignIn.css";

export function SignIn(){
    return (
        <>
        <form className="border-teal-400 border-2 m-auto p-auto w-4/5 h-40 flex flex-col justify-around p-8">
        <div className="flex flex-col relative group">
            <input required id="Login" type="text" className="w-1/2 pl-2 outline-none outline outline-gray-500 peer " ></input>
            <label for="Login" className="px-2 absolute tansition-transform ease-out duration-300 peer-focus:-translate-y-3  peer-focus:scale-50 peer-valid:-translate-y-3  peer-valid:scale-50 peer-focus:bg-white peer-focus:border-x-2 peer-focus:border-gray-500   peer-valid:bg-white peer-valid:border-x-2 peer-valid:border-gray-500">  Login ID </label>
            </div>
       
            <div className="flex flex-col relative group">
            <input type="text" className="w-1/2 pl-2 outline-gray-500" ></input>
            <span className="absolute tansition-transform ease-out duration-300 group-hover:-translate-y-3 group-hover:scale-50 bg-white border-x-2 border-gray-500">Login ID</span>
            </div>
        </form>
        
        </>
    )
}