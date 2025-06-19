import facebook from "../../assets/facebook.png";
import tiktok from "../../assets/tiktok.png";
import instragram from "../../assets/instagram.png";

function FooterView() {
  return (
    <div className="bg-white w-screen">
      <div className="border-t border-gray-900 h-auto px-4 py-4 pt-4 pb-12 ">
        <div className="flex gap-2.5">
          <div className="text-white font-bold bg-black px-2 lg:text-2xl md:text-xl ">
            B
          </div>
          <div className="text-white font-bold bg-black px-2 lg:text-2xl md:text-xl ">
            B
          </div>
          <div className="text-white font-bold bg-black px-2 lg:text-2xl md:text-xl ">
            C
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap space-x-5 ">
          <div className="text-black text-sm font-semibold pt-5 cursor-pointer hover:underline">
            Home
          </div>
          <div className="text-black text-sm font-semibold pt-5 cursor-pointer hover:underline">
            Home
          </div>
          <div className="text-black text-sm font-semibold pt-5 cursor-pointer hover:underline">
            Home
          </div>
        </div>

        <button className="h-[44px] w-[204px] bg-gray-200 flex justify-center items-center mt-6.5 mb-4.5">
          <div className="text-black text-sm font-semibold">
            BBC in other languages
          </div>
        </button>

        <div className="border-y-[0.5px] border-gray-200 mb-4"></div>

        <div className="flex flex-col sm:flex-row sm:gap-14 gap-5 items-start sm:items-center">
          <div className="text-black font-semibold text-base">
            Follow BBC on:
          </div>
          <div className="flex gap-2.5">
            <img
              src={facebook}
              alt="Facebook"
              className="h-6 w-auto cursor-pointer hover:border hover:border-black "
            />
            <img
              src={instragram}
              alt="Instagram"
              className="h-6 w-auto cursor-pointer  hover:border hover:border-black"
            />
            <img
              src={tiktok}
              alt="TikTok"
              className="h-6 w-auto cursor-pointer  hover:border hover:border-black"
            />
          </div>
        </div>

        <div className="flex-wrap flex gap-x-6 mt-3.5 gap-y-3 cursor-pointer">
          <p className="text-[12px] text-black font-semibold cursor-pointer hover:underline">
            Terms of Use
          </p>
          <p className="text-[12px] text-black font-semibold cursor-pointer hover:underline">
            About the BBC
          </p>
          <p className="text-[12px] text-black font-semibold cursor-pointer hover:underline">
            Private Policy
          </p>
          <p className="text-[12px] text-black font-semibold cursor-pointer hover:underline">
            Cookies
          </p>
          <p className="text-[12px] text-black font-semibold cursor-pointer hover:underline">
            Accesibility Help
          </p>
          <p className="text-[12px] text-black font-semibold cursor-pointer hover:underline">
            Contact the BBC
          </p>
          <p className="text-[12px] text-black font-semibold cursor-pointer hover:underline">
            Advertise with us
          </p>
          <p className="text-[12px] text-black font-semibold cursor-pointer hover:underline">
            Do not share or sell my info
          </p>
          <p className="text-[12px] text-black  font-semibold cursor-pointer hover:underline">
            Contact technical support
          </p>
        </div>

        <p className="text-[12px] text-black mt-5">
          Copyright 2025 BBC. All rights reserved. The
          <em> BBC is not responsible for the content of external sites. </em>
          <strong className="cursor-pointer">
            Read about our approach to external linking.
          </strong>
        </p>
      </div>
    </div>
  );
}

export default FooterView;
