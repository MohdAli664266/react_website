import { Link } from "react-router-dom";

function Login(){
    return (
        <>
            <div className="bg-[hsl(120,2%,26%)] max-w-full h-auto py-16 flex justify-center items-center ">
                <div className="shadow-lg flex bg-slate-600 shadow-slate-900">
                    <form action="/" className="flex flex-col justify-center items-center sm:max-w-xl h-auto border-3 text-green-400 sm:p-10  sm:gap-10 gap-3 max-w-md">
                        <h1 className=" shadow-lg hover:shadow-yellow-300 text-xl sm:text-3xl sm:px-5 sm:py-2 text-yellow-500">Login Form</h1>
                        <div>
                            <input className="shadow-md bg-transparent sm:px-2 py-1 outline-none text-fuchsia-400" type="text" placeholder='Enter the Email' />
                        </div>
                        <div>
                            <input className="shadow-md bg-transparent sm:px-2 py-1 text-fuchsia-400 outline-none" type="password" placeholder='Enter the Password' />
                        </div>
                        <p className="px-2">If you are new user then? <Link to="../signup" className="underline text-yellow-400">Signup First</Link></p>
                        <button type="submit" className="bg-slate-900 text-yellow-400 px-10 my-2 text-md">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;