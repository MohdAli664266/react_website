import { Link } from "react-router-dom";

function Signup(){
    return (
        <>
            <div className="bg-black max-w-full h-auto py-16 flex justify-center items-center ">
                <div className="shadow-lg flex bg-slate-600 shadow-slate-900">
                    <form action="/" className="flex flex-col justify-center items-center sm:max-w-xl h-auto border-3 text-green-400 sm:p-10  sm:gap-5 gap-2 max-w-md">
                        <h1 className=" shadow-lg hover:shadow-yellow-300 text-xl sm:text-3xl sm:px-5 sm:py-2 text-yellow-500">Signup Form</h1>
                        <div>
                            <input className="shadow-md bg-transparent sm:px-2 py-1 outline-none text-fuchsia-400" type="text" placeholder='Enter your name' />
                        </div>
                        <div>
                            <input className="shadow-md bg-transparent sm:px-2 py-1 outline-none text-fuchsia-400" type="text" placeholder='Enter your phone number' />
                        </div>
                        <div>
                            <input className="shadow-md bg-transparent sm:px-2 py-1 outline-none text-fuchsia-400" type="text" placeholder='Enter the Email' />
                        </div>
                        <div>
                            <input className="shadow-md bg-transparent sm:px-2 py-1 text-fuchsia-400 outline-none" type="password" placeholder='Enter the Password' />
                        </div>
                        <p className="px-2">If you are existing user then? <Link to="../login" className="underline text-yellow-400">Login</Link></p>
                        <button type="submit" className="bg-slate-900 text-yellow-400 px-10 my-2 text-md">Signup</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Signup;