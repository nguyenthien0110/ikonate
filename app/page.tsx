"use client";

import { FaBlog, FaGithub } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import ButtonLink from "./components/ButtonLink";
import ButtonControll from "./components/ButtonControll";
import { useEffect, useState } from "react";
import { TypeFile } from "./type";
import Item from "./components/Item";

export default function Home() {
  const [item, setItem] = useState<TypeFile[]>([]);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setItem(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(item);

  return (
    <>
      <div className="h-screen w-full bg-white">
        <div className="flex h-16 w-full fixed">
          <div className="h-full w-[20%] flex items-center gap-2 p-6 border-b border-r border-gray-200">
            <FaBlog />
            <p className="text-xl">Ikonate</p>
          </div>
          <div className="h-full w-[80%] border-b border-gray-200 flex items-center gap-2">
            <div className="h-full w-[80%] flex relative">
              <div className="absolute flex items-center justify-center h-16 w-16">
                <IoSearchOutline className="text-blue-300 h-6 w-6" />
              </div>
              <input
                placeholder="Search icon ..."
                className="w-full h-full border-4 border-white focus:border-blue-100 focus:outline-none px-12 text-xl"
                type="text"
              />
            </div>
            <div className="h-full w-[20%] flex items-center">
              <ButtonLink title="Documentation" icon={<FaGithub />} />
            </div>
          </div>
        </div>
        <div className="fixed flex h-full w-full pt-16 justify-center">
          <div className="h-full w-[20%] border-r border-gray-200 flex flex-col items-center pt-2 gap-4 overscroll-auto">
            <div>
              <label htmlFor="" className="text-xl">
                border
              </label>
              <ButtonControll type="number" />
            </div>
            <div>
              <label htmlFor="" className="text-xl">
                size
              </label>
              <ButtonControll type="number" />
            </div>
          </div>
          <div className="bg-blue-100/30 h-full w-[80%] grid grid-cols-12 gap-2 overflow-auto p-6">
            {item.map((i, index) => (
              <>
                <Item key={index} icon={i.context} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
