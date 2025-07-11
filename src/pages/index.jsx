import React, { useState, useEffect } from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic"; 
 
import LoadingScreen from "@common/LoadingScreen";

const HeroSlider = dynamic(() => import("@components/sliders/Hero"), { ssr: false }); 

const Home1 = (props) => {
   const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);


  useEffect(() => { 
    const t1 = setTimeout(() => setFadeOut(true), 2500); 
    const t2 = setTimeout(() => setShowLoader(false), 3100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      {showLoader && <LoadingScreen fadeOut={fadeOut} />}
      {!showLoader && (
        <Layouts transparent>
          <>
            <HeroSlider/> 
          </>
        </Layouts>
      )}
    </>
  );
};

export default Home1; 