function Item({ icon }: { icon?: string }) {
  return (
    <>
      <div
        className="h-16 w-16 flex items-center justify-center bg-white rounded-2xl border-4 border-white hover:cursor-pointer hover:border-blue-200"
        dangerouslySetInnerHTML={{ __html: icon || "" }}
      ></div>
    </>
  );
}

export default Item;
