import styles from "./Promotions.module.css";

const Promotions = () => {
  return (
    <section className={`text-light p-3 ${styles.backgroundColor}`}>
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h5 className="mb-2 mb-md-0">
            Suscríbete a nuestra lista de ofertas
          </h5>
          <div className="input-group my-input w-50">
            <input
              type="text"
              className="form-control"
              placeholder="Correo electrónico"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-dark btn-sm r"
              type="button"
              id="button-addon2"
            >
              Suscríbete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
