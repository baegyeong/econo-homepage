"use client";

import { RECRUIT } from "@/src/constants/recruit/recruit.ko";
import Footer from "@/src/components/common/Footer.component";
import Faq from "@/src/components/recruit/Faq.component";
import Fileds from "@/src/components/recruit/Fields.component";
import Recruit from "@/src/components/recruit/Recruit.component";
import Subscription from "@/src/components/recruit/Subscription.component";
import Waiting from "@/src/components/recruit/Waiting.component";
import { useInsertionEffect, useRef, useState } from "react";

const RecruitPage = () => {
  const [emailInputValue, setEmailInputValue] = useState("");
  const recruitRef = useRef<HTMLDivElement>(null);

  const scrollToRecruit = () =>
    window.scrollTo({
      top: recruitRef.current?.offsetTop,
      behavior: "smooth",
    });

  useInsertionEffect(() => {
    const html = document.querySelector("html") as HTMLElement;
    const changeFontSize = () =>
      (html.style.fontSize = window.innerWidth >= 1300 ? "100%" : "62.5%");
    window.addEventListener("resize", changeFontSize);

    return () => {
      window.removeEventListener("resize", changeFontSize);
    };
  }, []);

  return (
    <>
      <div className="px-24 max-w-[1920px] m-auto">
        {!RECRUIT.IS_ON && (
          <section>
            <Waiting
              inputValue={emailInputValue}
              inputOnChange={(e) => setEmailInputValue(e.target.value)}
              scrollToRecruit={scrollToRecruit}
            />
          </section>
        )}
        <section ref={recruitRef}>
          <Recruit />
        </section>
        <section>
          <Fileds />
        </section>
        <section>
          <Subscription />
        </section>
        <section>
          <Faq />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RecruitPage;
