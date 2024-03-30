import React from "react";
import Login from "./Login";
export default function Dashboard()
{
    return (
        <div className="grid gap-20 md:grid-cols-2 grid-rows-1 sm:grid-cols-1 place-items-center ">
            <h1 className="text-6xl p-20 font-sans decoration-txt">Unlock Your Potential, One Step at a Time!</h1>
            <Login />
        </div>
    )
}