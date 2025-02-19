"use client";

import Loading from "@/src/components/common/Loading.component";
import Portfolio from "@/src/components/portfolio/Portfolio.component";
import { useEffect } from "react";
import { loadingState } from "@/src/stores/common";
import { useAtom } from "jotai";

const PortfolioPage = () => {
  const [isLoading, setIsLoading] = useAtom(loadingState);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Portfolio />
    </>
  );
};

export default PortfolioPage;
