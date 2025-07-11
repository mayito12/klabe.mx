import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

const Conocenos = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Conócenos"} pageDesc={""} />

      <section className="gap about-us-section" style={{ padding: "0" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                src="/img/Cono.png" // 🔴 Cambia esta ruta a la ubicación real en tu proyecto public/
                alt="Conócenos"
                className="img-fluid w-100"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default Conocenos;