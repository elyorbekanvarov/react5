import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <Fragment>
      <ul class="flex flex-col items-center gap-4 w-full mt-4 md:hidden">
        <li class="text-center">
          <Link to="/" class="text-[14px] font-medium text-[#0f1729]">
            Home
          </Link>
        </li>

        <li class="text-center">
          <Link to="/PostsPage" class="text-[14px] font-medium text-[#0f1729]">
            Posts
          </Link>
        </li>
        <Link to={"/login"} className="w-full">
          <button
            class="w-full h-[40px] rounded-xl
           bg-[#4346ef] text-white text-[13px] font-medium
           flex items-center justify-center text-center
           shadow-[0px_4px_6px_-1px_#0000001a]
           transition-all duration-300 ease-out
           hover:-translate-y-[2px] hover:scale-[1.02]
           hover:bg-gradient-to-br hover:from-[#5a5eff] hover:to-[#8a8dff]
           hover:shadow-[0px_8px_20px_rgba(67,70,239,0.5),0_0_15px_rgba(108,111,255,0.8)]
           active:scale-95
           animate-pulseGlow"
          >
            Login
          </button>
        </Link>
      </ul>
    </Fragment>
  );
}

export default SideBar;
