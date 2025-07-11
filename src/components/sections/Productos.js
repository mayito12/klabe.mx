import React from 'react';
import Data from "@data/sections/productos.json";
import Link from "next/link";

const ProductsSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="gap service-style-one">
        <div className="container">
          <div className="row">
              {Data.items.map((item, key) => (
                <div key={`products-item-${key}`} className="col-lg-4 col-md-6 col-sm-12 text-center mb-5" >
                  <div className="service-data">
                    <div className="svg-icon d-flex-all">
                      <img className="light-icon" src={item.icon.light} alt={item.icon.alt} />
                      <img className="dark-icon" src={item.icon.dark} alt={item.icon.alt} />
                    </div>
                    <h3><Link href={item.link}>{item.title}</Link></h3>
                    <p>{item.text}</p>
                      <Link href={item.link} className="icon">
                          <i className="fa-solid fa-angles-right" />
                      </Link>
                    </div>
                  </div>
              ))}
          </div>
        </div>
    </section>
  );
});

export default ProductsSection;