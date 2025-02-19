"use client";

import { RECRUIT } from "@/src/constants/recruit/recruit.ko";
import LinkTo from "@/src/components/common/LinkTo.component";
import { MAIN_NAV } from "@/src/constants/main.ko";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between min-h-fit px-12 my-12">
      <div>
        {MAIN_NAV.filter((data) => data.POSITION === "left").map((data) => (
          <LinkTo
            className="py-4 px-8 uppercase text-xl"
            key={data.LINK}
            link={data.LINK}
          >
            {data.NAME}
          </LinkTo>
        ))}
      </div>
      <div>
        {MAIN_NAV.filter((data) => data.POSITION === "right").map((data) => (
          <LinkTo
            className="p-2 bg-[#0038FF] text-white uppercase text-xl"
            key={data.LINK}
            link={data.LINK}
          >
            {`${RECRUIT.GENERTAION}TH`} {data.NAME}
          </LinkTo>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
