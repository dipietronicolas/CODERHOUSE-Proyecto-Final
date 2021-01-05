import './NavBar.css';

function NavBar(props) {

  const handleItem = (item) => {
    const { handleCategory } = props;
    handleCategory(item);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid d-flex justify-content-around">
        <a className="navbar-brand" href="/">La Tienda Virtual</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item dropdown">
          {/* eslint-disable-next-line  */} 
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/#" onClick={() => handleItem('Vehiculos')}>Vehiculos</a></li>
                <li><a className="dropdown-item" href="/#" onClick={() => handleItem('Inmuebles')}>Inmuebles</a></li>
                <li><a className="dropdown-item" href="/#" onClick={() => handleItem('Tecnologia')}>Tecnologia</a></li>
                <li><a className="dropdown-item" href="/#" onClick={() => handleItem('Hogar y Muebles')}>Hogar y Muebles</a></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Ingresar</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/">Registrarse</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;