import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top py-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
          <Image src="/logoASF.svg" alt="Bootstrap" width={100} height={40} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarmenu">
          <ul className="navbar-nav ms-auto">
            <Link href="/properties" className="nav-link">
              Propiedades
            </Link>
            <Link href="/clients" className="nav-link">
              Clientes
            </Link>
            <Link href="/vendors" className="nav-link">
              Vendedores
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
