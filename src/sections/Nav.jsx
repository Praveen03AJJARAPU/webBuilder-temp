import { useState } from "react";
import { SearchBar, btnTags, flexBet, navItems } from "../constants/constants";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
const Nav = () => {
  const [navOpened, isNavOpened] = useState(false);
  return (
    <div className="flex justify-between px-2 lg:justify-center hover:scale gap-5 md:gap-10 lg:gap-16 bg-[#212731] py-3 items-center">
      <div className="relative">
        <div className="absolute top-[4px] left-1">
          <SearchBar />
        </div>
        <input
          type="text"
          className="outline-none py-[5px] w-[200px] pl-8 rounded-lg"
        />
      </div>
      <div className="lg:block hidden">
        <div
          className={` ${flexBet} text-xs md:text-sm gap-3 md:gap-10 text-grayHeader `}
        >
          {navItems.map((item, id) => (
            <p className={btnTags} key={id}>
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="block text-white lg:hidden" onClick={() => isNavOpened(true)}>
        <HiOutlineMenuAlt3 size={25} />
      </div>
      <div className={`fixed duration-200 ease ${navOpened ? "right-0" : "right-[-120vh]"} h-[50vh] w-full md:w-[50%] bg-[#212731] top-0 right-0`}>
        <div className="float-right m-5 cursor-pointer text-white" onClick={() => isNavOpened(false)}>
          <RxCross1 />
        </div>
        <div className={`mt-20 flex flex-col items-center text-gray gap-10 text-xl justify-around`}>
          {navItems.map((item, id) => (
            <p className={btnTags} key={id}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nav