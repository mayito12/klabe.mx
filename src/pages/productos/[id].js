import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import ImageView from "@components/ImageView";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useRef, useState } from "react";

import { getAllProductsIds, getProductData } from "@library/productos";

const ProductDetail = ({ productData }) => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (sectionRef.current) {
      const headerHeight = 0;
      const sectionPosition = sectionRef.current.offsetTop - headerHeight;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  }, []);
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <Layouts>
      <PageBanner pageTitle={""} />

      {/* Sección 1: Imagen izquierda */}

      <section
        ref={sectionRef}
        className="gap about-first service-detail-first detail-page"
        style={{
          backgroundImage: `url(${productData.backgroundImage})`,
        }}
      >
        <div className="container">
          {typeof productData.seccion1 != "undefined" &&
            productData.seccion1.enabled == 1 && (
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-8 col-8">
                  <figure className="product-image">
                    <img
                      src={productData.seccion1.imagen}
                      className="img-fluid w-100"
                      alt={productData.seccion1.alt} // Siempre incluye el atributo alt
                    />
                  </figure>
                </div>

                {/* Solo renderiza imagen1 si existe y no es "/img/" */}
                {productData.seccion1.imagen1 &&
                  productData.seccion1.imagen1 !== "/img/" && (
                    <div className="col-lg-2 col-md-4 col-4">
                      <figure className="product-image-icon">
                        <img
                          src={productData.seccion1.imagen1}
                          className="img-fluid w-100"
                          alt={productData.seccion1.alt1 || ""} // Usa alt1 o fallback vacío
                        />
                      </figure>
                    </div>
                  )}
              </div>
            )}

          {/* Data resaltada */}
          {productData.contentHtml != "" && (
            <div className="row">
              <div className="col-lg-12">
                <div
                  dangerouslySetInnerHTML={{ __html: productData.contentHtml }}
                />
              </div>
            </div>
          )}
          {/* Sección 3: Lista con puntos */}
          {typeof productData.description0 != "undefined" && (
            <>
              {productData.description0.enabled == 1 && (
                <div className="row">
                  <div className="col-lg-5 offset-lg-1">
                    <div className="who-we-are">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: productData.description0.text2,
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          )} 
        </div>
      </section>
      {/* Sección 4: Asesores (fuera de la sección principal) */}
      {productData.asesores && productData.asesores.enabled && (
        <section className="asesores-section py-5">
          <div className="container asesores-list">
            <div className="row mb-4">
              <div className="col-12">
                <h3 className="text-center">{productData.asesores.title || "Nuestros Asesores"}</h3>
              </div>
            </div>
            <div className="row">
              {productData.asesores.items?.map((asesor, idx) => {
                const mensaje = encodeURIComponent(asesor.mensaje || "¡Hola! Estoy interesado en recibir más información.");
                const whatsappUrl = `https://wa.me/${asesor.whatsapp}?text=${mensaje}`;
                return (
                  <div className="col-md-6 col-6 d-flex flex-column align-items-center mb-4" key={idx}>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <img
                        src={asesor.imagen}
                        alt={asesor.nombre}
                        className="asesor-img mb-2"
                      />
                    </a>
                    {/* <div className="mb-2 fw-bold text-center">{asesor.nombre}</div> */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success d-flex align-items-center"
                    >
                     <i className="fa-brands fa-whatsapp"></i>
                     <span className="ms-2">Contactar</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </Layouts>
  );
};
export default ProductDetail;

export async function getStaticPaths() {
  const paths = getAllProductsIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productData = await getProductData(params.id);

  return {
    props: {
      productData,
    },
  };
}
