import React from "react";
import Image from "next/image";
import Header from "./components/Header";
export default async function Home() {

  const api = "https://dummyjson.com/posts";

  // const fetchData = () =>{
  const data = await fetch(api);
  const blogData = await data.json();
  console.log(blogData);
  // }
  // fetchData()
return (
    <>
      <Header />
      <h1 className="text-center py-3 font-bold text-[22px]">BLOGS</h1>
      <div className="bg-red-950 w-full h-screen p-10 ">
        <div className="bg-[#a0303094] rounded-lg w-full h-full p-10 grid grid-cols-3 grid-rows-1 gap-5 text-black overflow-hidden">
          <div className="col-span-2 grid grid-cols-2  gap-10 overflow-hidden">
            {data.map((e index: number) => {
              return (
                <>
                  <a key={index} href={`/${index}`}>
                    <div
                      key={index}
                      className="h-[420px]  bg-white w-full flex flex-col rounded-md gap-5 p-4 overflow-hidden"
                    >
                      <Image
                        src={urlFor(e.image).url()}
                        alt={e.image.alt}
                        width={390}
                        height={390}
                      />
                      <h1 className=" font-bold text-[20px] ">
                        {e.mainHeading}
                      </h1>
                      <div>
                        <p className="h-[68px] overflow-hidden">
                          {e.description}
                        </p>
                        <p className="underline text-blue-600">More details</p>
                      </div>
                    </div>
                  </a>
                </>
              );
            })}
          </div>
          <div className="flex flex-col w-full h-full bg-[#dfdfdf] rounded-sm gap-2  p-3">
            {data.map((e: DataType, index: number) => {
              console.log(index);
              return (
                <>
                  <a key={index} href={`/${index}`}>
                    <div
                      key={index}
                      className="flex bg-white w-full h-full  gap-5 p-2 overflow-hidden"
                    >
                      <Image
                        src={urlFor(e.image).url()}
                        alt={e.image.alt}
                        width={90}
                        height={90}
                      />
                      <h1 className=" font-bold overflow-hidden h-11">
                        {e.mainHeading}
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
