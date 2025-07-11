import { useState,useRef,useEffect } from 'react';
import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";


import { getSortedProductsData } from "@library/productos";


import ProductsSection from "@components/sections/Productos"; 


const Productos = (props) => {
  const [isOpen, setOpen] = useState(false);
   const sectionRef = useRef(null); 
    useEffect(() => {
      if (sectionRef.current) { 
        const headerHeight = 0;  
        const sectionPosition = sectionRef.current.offsetTop - headerHeight;
         
        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth'
        });
      }
    }, []);  
  
  return (
    <Layouts>
      <PageBanner  pageTitle={"CRÉDITOS Y SERVICIOS"} />
         

      <ProductsSection ref={sectionRef}/> {/* Sección de productos */} 
      
      {/* <CallToActionSection /> */}
      
    </Layouts>
  );
};
export default Productos;

export async function getStaticProps() {
  const allProducts = getSortedProductsData(); 

  return {
    props: {
      productos: allProducts
    }
  }
}