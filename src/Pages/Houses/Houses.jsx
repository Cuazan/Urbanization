import { useState, useEffect } from "react";
import { GetHouses } from "../../Requester/Requester";
import { Link } from "react-router-dom";
import "./Houses.css"

export function Houses({ id }) {
    const [houses, setHouses] = useState([]);

    const getHous = async () => {
        try {
            const response = await GetHouses();
            setHouses(response);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getHous();
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
                <Link className="navbar-brand fw-bold" to="/">Mikasa</Link>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/urbanizations">Urbanizations</Link></li>
                    </ul>
                </div>
            </nav>

            <header className="houses-banner text-white d-flex align-items-center justify-content-center">
                <h1 className="text-center display-5 fw-bold">Discover your new house</h1>
            </header>

            <div className="container mb-5 mt-5">
                <div className="row g-4">
                    {houses.map(house => (
                        <div className="col-6 col-md-4 col-lg-2-4" key={house.id}>
                            <div className="card h-100 shadow-sm houseCard border-0">
                                <img src={house.images} className="card-img-top" alt={house.name} />
                                <div className="card-body">
                                    <h5 className="card-title">${new Intl.NumberFormat("en-US").format(house.price)}</h5>
                                    <p className="card-text small">Availability: {house.available ? "Available" : "Not available"}</p>
                                    <p className="card-text small">Dimensions: {house.dimensions}</p>
                                    <p className="card-text small">Rent: {house.rentAllowed ? "Allowed" : "Not allowed"}</p>
                                    <button className="btn btn-outline-primary w-100">Ver más</button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}