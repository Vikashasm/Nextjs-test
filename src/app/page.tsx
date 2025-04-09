"use client"
import Image from 'next/image';
import women from '../../public/Images/jpg/women-with-leptop.jpg'
import { useEffect, useState } from 'react';
import Loader from './components/Loader';


export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading,setLoading]=useState(true)



async function fetchData() {

  const response = await fetch(
    "https://healing-life-c4ce4d4d52.strapiapp.com/api/menus"
  );

  const data = await response.json();
  setLoading(false)
  return data;
}

  useEffect(() => {
    // Call the async function inside useEffect
    const getPosts = async () => {
      try {
        const data = await fetchData();
        setData(data.data[0].title);
      } catch (err:any) {
        setError(err.message);
      }
    };

    getPosts();
  }, []);
  if(loading){
    return (
      <Loader/>
    )
  }else
  return (
    <>
      <main className="px-5 md:px-10 py-10">
        <div className="text-center">
          <label className="text-xl md:text-2xl text-black/70">
            {" "}
            Why Choose Us
          </label>
          <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl text-center py-3">
            We are defferent from others
          </h1>
          <p className="text-xl md:text-2xl text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem explicabo unde facere?
          </p>
        </div>
        <div className="flex flex-wrap justify-between mt-10 md:mt-20">
          <div className="w-full lg:w-7/12">
            <div className="relative flex justify-between w-full h-[300px] md:h-[450px] lg:h-full">
              <div className="lg:absolute top-0 left-[150px] sm:left-[200px] md:left-[50px] xl:left-[70px] 2xl:left-[220px] w-[60%] sm:w-[45%] md:w-[55%] xl:w-[50%] 2xl:w-[40%] h-full rounded-full border flex flex-col justify-center p-6 md:p-3 z-[1] text-white bg-[#9B3F55]/70">
                <h2>Indestry Experts</h2>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores optio eaque nam! Odit illum labore incidunt a
                  explicabo commodi,
                </p>
              </div>
              <div className="absolute top-0 right-0 w-[60%] sm:w-[45%] md:w-[55%] xl:w-[50%] 2xl:w-[40%] h-full rounded-full lg:flex lg:flex-col lg:justify-center p-10 z-0 border-[1px] border-green-200">
                <Image
                  src={women}
                  alt="women-with-leptop"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-4/12 mt-8 lg:mt-0">
            {data.map((items, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#bcb6b6] rounded-full font-bold py-4 px-5 mt-5 flex gap-3 justify-between capitalize hover:bg-[#9B3F55] hover:text-white duration-300"
                >
                  <span>{"<"}</span>
                  <span>{items}</span>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
