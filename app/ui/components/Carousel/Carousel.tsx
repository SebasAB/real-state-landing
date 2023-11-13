const Carousel = () => {
  return (
    <section>
      <div className="container py-3" id="properties">
        <h1 className="text-center mx-2">Propiedades disponibles:</h1>
        <div id="carouselPropiedades" className="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card h-100">
                <img src="/prop1.jpg" className="card-img-top" alt="..." />
                <img src="/logoASF.svg" alt="Logo" />
                <div className="card-body">
                  <h5 className="card-title text-secondary">
                    Departamento de venta
                  </h5>
                  <h5 className="card-title text-primary">$ ; 250.000</h5>
                  <p className="card-text text-secondary">
                    Some quick example text to build on the Propiedad and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex flex-row mb-3 ">
                    <div className="p-2">
                      <i className="fa-solid fa-bed text-secondary"></i>
                      <span className="card-text"> 4</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-bath text-secondary"></i>
                      <span className="card-text"> 3</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-cube text-secondary"></i>
                      <span className="card-text">
                        120m<sup>2</sup>
                      </span>
                    </div>
                  </div>
                  <a href="details.html" className="btn btn-primary btn-sm">
                    Ver más
                  </a>
                </div>
                <span className="badge badge-venta">Venta</span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card h-100">
                <img src="/prop2.jpg" className="d-block w-100" alt="..." />
                <img src="/logoASF.svg " alt="Logo" />
                <div className="card-body">
                  <h5 className="card-title text-secondary">Casa de campo</h5>
                  <h5 className="card-title text-primary">$ ; 1.250 / mes</h5>
                  <p className="card-text text-secondary">
                    Some quick example text to build on the Propiedad and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex flex-row mb-3 ">
                    <div className="p-2">
                      <i className="fa-solid fa-bed text-secondary"></i>
                      <span className="card-text"> 6</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-bath text-secondary"></i>
                      <span className="card-text"> 4.5</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-cube text-secondary"></i>
                      <span className="card-text">
                        1050m<sup>2</sup>
                      </span>
                    </div>
                  </div>
                  <a href="details.html" className="btn btn-primary btn-sm">
                    Ver más
                  </a>
                </div>
                <span className="badge badge-arriendo">Arriendo</span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card  h-100">
                <img src="/prop3.jpg" className="d-block w-100" alt="..." />
                <img src="/logoASF.svg" alt="Logo" />
                <div className="card-body">
                  <h5 className="card-title text-secondary">
                    Hermosa casa con piscina
                  </h5>
                  <h5 className="card-title text-primary">$ ; 358.000</h5>
                  <p className="card-text text-secondary">
                    Some quick example text to build on the Propiedad and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex flex-row mb-3 ">
                    <div className="p-2">
                      <i className="fa-solid fa-bed text-secondary"></i>
                      <span className="card-text"> 4</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-bath text-secondary"></i>
                      <span className="card-text"> 3.5</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-cube text-secondary"></i>
                      <span className="card-text">
                        250m<sup>2</sup>
                      </span>
                    </div>
                  </div>
                  <a href="details.html" className="btn btn-primary btn-sm">
                    Ver más
                  </a>
                </div>
                <span className="badge badge-venta">Venta</span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card  h-100">
                <img src="/prop4.jpg" className="d-block w-100" alt="..." />
                <img src="/logoASF.svg" alt="Logo" />
                <div className="card-body">
                  <h5 className="card-title text-secondary">
                    Moderna casa por estrenar
                  </h5>
                  <h5 className="card-title text-primary">$ ; 680/mes </h5>
                  <p className="card-text text-secondary">
                    Some quick example text to build on the Propiedad and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex flex-row mb-3 ">
                    <div className="p-2">
                      <i className="fa-solid fa-bed text-secondary"></i>
                      <span className="card-text"> 3</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-bath text-secondary"></i>
                      <span className="card-text"> 3.5</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-cube text-secondary"></i>
                      <span className="card-text">
                        1800m<sup>2</sup>
                      </span>
                    </div>
                  </div>
                  <a href="details.html" className="btn btn-primary btn-sm">
                    Ver más
                  </a>
                </div>
                <span className="badge badge-arriendo">Arriendo</span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card  h-100">
                <img src="/prop5.jpg" className="d-block w-100" alt="..." />
                <img src="/logoASF.svg" alt="Logo" />
                <div className="card-body">
                  <h5 className="card-title text-secondary">
                    Departamento en Cumbaya
                  </h5>
                  <h5 className="card-title text-primary">$ ; 420.000</h5>
                  <p className="card-text text-secondary">
                    Some quick example text to build on the Propiedad and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex flex-row mb-3 ">
                    <div className="p-2">
                      <i className="fa-solid fa-bed text-secondary"></i>
                      <span className="card-text"> 4</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-bath text-secondary"></i>
                      <span className="card-text"> 3.5</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-cube text-secondary"></i>
                      <span className="card-text">
                        205m<sup>2</sup>
                      </span>
                    </div>
                  </div>
                  <a href="details.html" className="btn btn-primary btn-sm">
                    Ver más
                  </a>
                </div>
                <span className="badge badge-venta">Venta</span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card  h-100">
                <img src="/prop6.jpg" className="d-block w-100" alt="..." />
                <img src="/logoASF.svg" alt="Logo" />
                <div className="card-body">
                  <h5 className="card-title text-secondary">
                    Apartamento centro histórico
                  </h5>
                  <h5 className="card-title text-primary">$ ; 82.000 </h5>
                  <p className="card-text text-secondary">
                    Some quick example text to build on the Propiedad and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex flex-row mb-3 ">
                    <div className="p-2">
                      <i className="fa-solid fa-bed text-secondary"></i>
                      <span className="card-text"> 2</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-bath text-secondary"></i>
                      <span className="card-text"> 3.5</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-cube text-secondary"></i>
                      <span className="card-text">
                        70m<sup>2</sup>
                      </span>
                    </div>
                  </div>
                  <a href="details.html" className="btn btn-primary btn-sm">
                    Ver más
                  </a>
                </div>
                <span className="badge badge-venta">Venta</span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card  h-100">
                <img src="/prop7.jpg" className="d-block w-100" alt="..." />
                <img src="/logoASF.svg" alt="Logo" />
                <div className="card-body">
                  <h5 className="card-title text-secondary">
                    Casa en la playa
                  </h5>
                  <h5 className="card-title text-primary">$ ; 68.850</h5>
                  <p className="card-text text-secondary">
                    Some quick example text to build on the Propiedad and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex flex-row mb-3 ">
                    <div className="p-2">
                      <i className="fa-solid fa-bed text-secondary"></i>
                      <span className="card-text"> 2</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-bath text-secondary"></i>
                      <span className="card-text"> 25</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-cube text-secondary"></i>
                      <span className="card-text">
                        120m<sup>2</sup>
                      </span>
                    </div>
                  </div>
                  <a href="details.html" className="btn btn-primary btn-sm">
                    Ver más
                  </a>
                </div>
                <span className="badge badge-venta">Venta</span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card  h-100">
                <img src="/prop8.jpg" className="d-block w-100" alt="..." />
                <img src="/logoASF.svg" alt="Logo" />
                <div className="card-body">
                  <h5 className="card-title text-secondary">
                    Casa con vista al mar
                  </h5>
                  <h5 className="card-title text-primary">$ ; 450/mes </h5>
                  <p className="card-text text-secondary">
                    Some quick example text to build on the Propiedad and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex flex-row mb-3 ">
                    <div className="p-2">
                      <i className="fa-solid fa-bed text-secondary"></i>
                      <span className="card-text"> 5</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-bath text-secondary"></i>
                      <span className="card-text"> 3.5</span>
                    </div>
                    <div className="p-2">
                      <i className="fa-solid fa-cube text-secondary"></i>
                      <span className="card-text">
                        200m<sup>2</sup>
                      </span>
                    </div>
                  </div>
                  <a href="details.html" className="btn btn-primary btn-sm">
                    Ver más
                  </a>
                </div>
                <span className="badge badge-arriendo">Arriendo</span>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselPropiedades"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselPropiedades"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid p-5">
        <div className="container">
          <div className="row g-2 justify-content-center align-items-center">
            <div className="col-md-10">
              <div className="row g-2 ">
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control border-1 py-3"
                    placeholder="¿Donde buscas?"
                  />
                </div>
                <div className="col-md-3">
                  <select className="form-select border-1 py-3">
                    <option selected>Tipo de propiedad</option>
                    <option value="1">Casa</option>
                    <option value="2">Departamento</option>
                    <option value="3">Suite</option>
                    <option value="3">Terreno</option>
                    <option value="5">Oficina</option>
                    <option value="5">Local comercial</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select className="form-select border-1 py-3">
                    <option selected>¿Cómo la quieres?</option>
                    <option value="1">Venta</option>
                    <option value="2">Arriendo</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-success  w-100 py-3">
                    <i className="fa-solid fa-magnifying-glass"></i>Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
