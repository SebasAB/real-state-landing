import Image from "next/image";

const Showcase = () => {
  return (
    <section className="bg-dark text-white p-5 p-lg-0 pt-lg-5 text-center text-sm-start mt-4">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div className="ps-2">
            <h1>
              Anuncia con <span className="text-warning">nosotros.</span>
            </h1>
            <p className="lead my-4">
              {" "}
              Te ayudamos a vender tu propiedad con éxito, con el mejor servicio
              y precios del mercado.
            </p>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#contactoModal"
            >
              Contáctanos
            </button>
          </div>
          <Image
            className="img-fluid  rounded w-50 d-none d-sm-block mb-3"
            src="/new-home.png"
            alt=""
            width={550}
            height={40}
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
