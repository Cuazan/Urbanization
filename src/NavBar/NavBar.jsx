import { Link } from "react-router-dom";


export function NavBar() {

    return (
        <>
            <nav className="navbar navbar-expand rounded-2 col-lg-6 bg-light shadow">

                <div className="container d-flex justify-content-center">
                    <ul className="navbar-nav d-flex justify-content-between w-75">
                        <li className="nav-item">
                           <Link className="nav-link" to="/urbanizations">Urbanizations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/houses">Houses</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}