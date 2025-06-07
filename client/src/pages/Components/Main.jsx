import React from "react";

function Main() {
  return <div className="px-2 flex flex-col justify-start items-start">
     <div>
        <h1 className="text-3xl md:text-6xl pt-6 space-x-4">Find Your Perfect<br/>Stay With Stayio</h1>
        <p className="text-md md:text-lg mt-3">Browse top-rated stays and book your next getaway today!</p>
     </div>
     <div className="mt-5 p-4 py-1 px-2 flex justify-between items-center gap-10 border border-gray-300 rounded-full shadow-lg bg-white">
        <input type="text" placeholder="Search Destination" className="p-3 block md:hidden outline-none" />
       <div className="md:flex hidden justify-between items-center gap-4">
         <div className="rounded-full p-3 px-4">
            <h2 className="text-md">Where</h2>
            <input type="text" placeholder="Select Destination" className="outline-none" />
        </div>
        <div className="h-8 w-[0.1rem] bg-gray-300"></div>
         <div className="rounded-full p-3 px-4">
            <h2 className="text-md">Check in</h2>
            <input type="text" placeholder="Add Date" className="outline-none" />
        </div>
         <div className="h-8 w-[0.1rem] bg-gray-300"></div>
         <div  className="rounded-full p-3 px-4">
            <h2 className="text-md">Check out</h2>
            <input type="text" placeholder="Add Date" className="outline-none" />
        </div>
            <div className="h-8 w-[0.1rem] bg-gray-300"></div>
         <div className="rounded-full p-3 px-4">
            <h2 className="text-md">Price Range</h2>
            <input type="text" placeholder="Add Range" className="outline-none" />
        </div>
       </div>
        <div className="flex justify-center items-center p-3 bg-[#007AFF] text-white text-3xl rounded-full search">
            <ion-icon name="search-outline"></ion-icon>
        </div>
     </div>
  </div>;
}

export default Main;
