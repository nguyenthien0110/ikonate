import { FaBlog, FaGithub } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import ButtonLink from "./components/ButtonLink";
import ButtonControll from "./components/ButtonControll";

export default function Home() {
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
        <div className="flex h-full w-full pt-16 justify-center">
          <div className="h-full w-[20%] border-r border-gray-200 flex justify-center pt-2">
            <ButtonControll type="number" />
          </div>
          <div className="h-full w-[80%]"></div>
        </div>
      </div>
    </>
  );
}
