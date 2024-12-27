import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="">Company name</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link className="nav-link" to="Features">Features</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="Enterprise">Enterprise</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="Support">Support</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="Pricing">Pricing</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  </>
  )
}

export default Header
