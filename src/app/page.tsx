import React from "react";
import Header from "./components/Header";
export default async function Home() {
  interface DataType {
   
  id: number,                 
  title: string,               
  body: string,                
               
}

  const api = "https://dummyjson.com/posts";
  const fetchdata =await fetch(api);
  const postdata = await fetchdata.json();
  const data = postdata.posts
  console.log("posr data",data)
 
  return (
    <>
      <Header />
      <h1 className="text-center py-3 font-bold text-[22px]">BLOGS</h1>
      <div className="bg-red-950 w-full md:h-screen p-10 ">
        <div className="bg-[#a0303094] rounded-lg w-full h-full p-0 md:p-10  md:grid md:grid-rows-5  lg:grid-cols-3  lg:grid-rows-1 gap-5 text-black md:overflow-hidden">
          <div className="row-span-5 col-span-2 flex flex-col md:grid md:grid-cols-2  gap-10 overflow-hidden">
            {data.map((e: DataType) => {
              return (
                <>
                  <a key={e.id} href={`/${e.id}`}>
                    <div
                      key={e.id}
                      className="h-[420px] bg-white w-full flex flex-col rounded-md gap-5 p-4 overflow-hidden"
                    >
                      
                      <h1 className=" font-bold text-[20px] ">
                        {e.title}
                      </h1>
                      <div>
                        <p className="h-[68px] overflow-hidden">
                          {e.body}
                        </p>
                        <p className="underline text-blue-600">More details</p>
                      </div>
                    </div>
                  </a>
                </>
              );
            })}
          </div>
          <div className="flex mt-10 flex-col md:col-span-3 md:row-span-1 md:h-40 md:overflow-y-scroll md:overflow-hidden lg:col-span-1 lg:h-[450px]  lg:flex-col w-full h-full bg-[#dfdfdf] rounded-sm gap-2  p-3">
            {data.map((e: DataType) => {
              
              return (
                <>
                  <a key={e.id} href={`/${e.id}`}>
                    <div
                      key={e.id}
                      className="flex bg-white w-full h-full  gap-5 p-2 overflow-hidden"
                    >
                     
                      <h1 className=" font-bold overflow-hidden h-11">
                        {e.title}
                      </h1>
                    </div>
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
