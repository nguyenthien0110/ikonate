import clsx from "clsx";
import { Dispatch, memo, SetStateAction } from "react";

function Item({
  icon,
  name,
  currentName,
  setNameItem,
}: {
  icon?: string;
  name: string;
  currentName: string;
  setNameItem: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
      <div
        onClick={() => setNameItem(name)}
        className={clsx(
          `h-16 w-16 flex items-center justify-center bg-white rounded-2xl border-4 hover:cursor-pointer hover:border-blue-200 `,
          name === currentName ? "border-blue-200" : "border-white"
        )}
        dangerouslySetInnerHTML={{ __html: icon || "" }}
      ></div>
    </>
  );
}

export default memo(Item);
