import { ReactNode } from "react";

function ButtonLink({ title, icon }: { title: string; icon: ReactNode }) {
  return (
    <>
      <div className="w-auto h-12 flex items-center px-4 py-2 rounded-2xl gap-2 hover:cursor-pointer select-none border-6 bg-blue-100 hover:bg-blue-200 border-blue-100">
        <div className="text-xl">{icon}</div>
        <b>{title}</b>
      </div>
    </>
  );
}

export default ButtonLink;
