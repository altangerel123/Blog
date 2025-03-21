"use client";
export default function Footer() {
  return (
    <div className="w-full pt-[64px] border-t-2 border-black">
      <div className="flex justify-between gap-[20px] mb-[25px]">
        <div className="gap-[12px] w-[290px]">
          <h1 className="text-[18px] font-semibold">About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <div>
            <h2 className="text-[16px] font-normal">
              Email : info@jstemplate.net
            </h2>
            <h2 className="text-[16px] font-normal">Phone : 880 123 456 789</h2>
          </div>
        </div>
        <div className=" flex flex-row  items-center gap-[30px]">
          <a
            className="text-[20px] font-medium p-2 hover:bg-black hover:text-white rounded-2xl"
            href="/"
          >
            Home
          </a>
          <a
            className="text-[20px] font-medium p-2 hover:bg-black hover:text-white rounded-2xl"
            href="/blog"
          >
            Blog
          </a>
          <a
            className="text-[20px] font-medium p-2 hover:bg-black hover:text-white rounded-2xl"
            href="/contact"
          >
            Contact
          </a>
        </div>
        <div className="flex gap-[20px]">
          <img src="facebook.png" className="w-[20px] h-[20px]"></img>
          <img src="twitter.png" className="w-[20px] h-[20px]"></img>
          <img src="instagram.png" className="w-[20px] h-[20px]"></img>
          <img src="in.png" className="w-[20px] h-[20px]"></img>
        </div>
      </div>
      <div className=" py-[32px] flex justify-between gap-[64px]">
        <div className="flex">
          <img src="Logo (2).png"></img>
          <div>
            <p>MetaBlog</p>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex w-[100%] justify-end">
          <div className="flex gap-[16px] items-center">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
