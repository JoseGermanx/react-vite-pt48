const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex flex justify-content-between">
      <div className="container-md">
        <a className="navbar-brand" href="#">
          Star Wars
        </a>
      </div>
      <div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </a>

  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    </nav>
  );
};

export default NavBar;
