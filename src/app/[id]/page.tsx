import React from "react";
import CommentsBox from "../components/CommentsBox";
import Header from "../components/Header";


export default async function Pages({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const { id } = params;
  const api = `https://dummyjson.com/posts`;
  const fetchdata = await fetch(api);
  const postdata = await fetchdata.json();
  const data = postdata.posts;
  console.log("posr data", data);



  return (
    <>
      <Header />
      <div className="p-10 bg-red-950 w-full h-full flex gap-5 flex-col justify-center items-center">
        <div className="w-[350px] md:w-[600px] p-5 flex flex-col gap-10 justify-center items-center bg-[#ececec] rounded-lg text-black">
         
          <div className="md:w-[550px] w-[350px] py-5">
            <h1 className="font-extrabold text-[24px]">
              {data[id].title}
            </h1>
  
            <p className="text-[17px]">{data[id].body}</p>
          </div>
        </div>
        <CommentsBox params={{ id }} />
      </div>
    </>
  );
}
