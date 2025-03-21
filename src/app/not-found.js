export default function Notfound(props) {
  return (
    <div className=" w-full h-[208px] my-[100px] flex justify-center items-center">
      <h1 className="text-[72px] font-semibold border-r-[2px] border-[#000] pr-[40px]">
        404
      </h1>
      <div className="ml-[40px] flex flex-col gap-[20px]">
        <h2 className="text-[24px] font-medium">Page Not Found</h2>
        <p className="text-[18px] font-extralight text-[#696A75]">
          We&apos;re sorry, This page is unknown or does not exist the page you
          are looking for.
        </p>
        <p className="max-w-fit border-[1px] px-[16px] py-[10px] rounded-[6px] bg-[#4B6BFB] text-white">
          <a href="/">Back To Home</a>
        </p>
      </div>
    </div>
  );
}
