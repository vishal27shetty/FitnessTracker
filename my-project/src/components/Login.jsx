import React from "react";

function Login()
{
   return(
    <div className="size-fit bg-shade-100 drop-shadow-lg rounded-lg m-10  ">
   <form action="POST" className="grid grid-rows-4 place-items-center">
        <h1 className="decortation-txt px-5 pt-5 font-bold text-xl">Sign Up</h1>
        <input type="text" placeholder="Name"  className="mx-12 mt-10 p-2 font-thin text-xs"/>
        <input type="password" placeholder="Password"name="password" className="font-thin text-xs p-2 round-lg mx-6 mt-2"/>
        <button></button>
    </form>
    </div>
   );
}

export default Login;