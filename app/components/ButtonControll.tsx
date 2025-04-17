function ButtonControll({ type }: { type?: string | "number" }) {
  return (
    <>
      {type === "number" ? (
        <>
          <div className="bg-blue-100 w-64 h-24 rounded-2xl flex items-center justify-center text-4xl select-none relative">
            <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center text-[#2329D6] border-4 border-white hover:cursor-pointer hover:border-blue-200">
              -
            </div>
            <div className="w-20 h-20 flex items-center justify-center text-xl">
              1
            </div>
            <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center text-[#2329D6] border-4 border-white hover:cursor-pointer hover:border-blue-200">
              +
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default ButtonControll;
