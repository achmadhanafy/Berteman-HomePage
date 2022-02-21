
import Image from "next/image";
import {signIn} from "next-auth/react";
import { UserAddIcon } from "@heroicons/react/solid";

function Login({session}) {
    
    return (
        <div className="bg-gradient-to-t from-green-200 to-green-500 font-sans h-full w-screen  pt-12 md:pt-20 pb-6 px-2 md:px-0">
            <div className="body-bg min-h-screen">
                <div className="max-w-lg mx-auto" >{/* Header */}
                    <h1 className="cursor-pointer text-4xl font-bold text-white text-center">Berteman</h1>
                </div>
                <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl"> {/*main */}
                    <div> {/*section */}
                        <h3 class="font-bold text-2xl">Welcome to Berteman</h3>
                        <p className="text-gray-600 pt-2">Sign in to your account.</p>
                    </div>
                    <div className="mt-10"> {/*section */}
                        <form className="flex flex-col" method="post" action="#">
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                                <input type="text" id="email" className=" bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-500 transition duration-500 px-3 pb-3"></input>
                            </div>
                            <div className="mb-6 pt-3 rounded bg-gray-200">
                                <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                                <input type="password" id="password" class=" bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-500 transition duration-500 px-3 pb-3"></input>
                            </div>
                            <div className="flex justify-end">
                                <a href="#" className="text-sm text-green-600 hover:text-green-700 hover:underline mb-6">Forgot your password?</a>
                            </div>
                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl trasntion duration-200" type="submit">Sign In</button>
                            <p onClick={signIn} className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl trasntion duration-200 text-center">Login with Facebook </p>
                        </form>
                    </div>
                </div>

                <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                    <p className="text-gray-600">Don't have an account? <a className="font-bold hover:underline" href="#">Sign up</a>.</p>
                </div>

                <div className="max-w-lg mx-auto flex text-gray-600 justify-center"> {/*footer */}
                    <a href="#" className="hover:underline">Contact</a>
                    <span className="mx-3">.</span>
                    <a href="#" className="hover:underline">Privacy</a>
                </div>
            </div>
            
        </div>
    );
}
//<Image src="https://drive.google.com/uc?id=1VJT0Moer1ysS94Sogd9j4vauz4zQoehH"
               // width={400}
               // height={300}
                //layout="fixed"/>
            //<p onClick={signIn} className="p-5 bg-green-500 rounded-full text-white text-center cursor-pointer">Login with Berteman </p>

export default Login;

