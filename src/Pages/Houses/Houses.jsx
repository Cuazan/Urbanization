import { useState, useEffect } from "react";
import { GetHouses } from "../../Requester/Requester";
import { Link, useLocation } from "react-router-dom";
import "./Houses.css"
import portada from "../../assets/portada2.png"

export function Houses() {
    const [houses, setHouses] = useState([]);

    const query = new URLSearchParams(useLocation().search);
    const urbanizationId = query.get("urbanizationId");

    const getHous = async () => {
        try {
            const response = await GetHouses();

            const filtered = urbanizationId
                ? response.filter(house => house.urbanizationId.id == urbanizationId)
                : response;

            setHouses(filtered);
            console.log(filtered);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getHous();
    }, [urbanizationId]);

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
                <img
                    src={portada}
                    alt="portada2"
                    className="portada2 m-0"
                />
                <h1 className="text-center display-5 fw-bold">Discover your new house</h1>
            </header>

            <div className="container mb-5 mt-5">
                <div className="row g-4">
                    {houses.map(house => (
                        <div className="col-6 col-md-4 col-lg-2-4" key={house.id}>
                            <div className="card h-100 shadow-sm houseCard border-0">
                                <img src={house.imageURL} className="card-img-top" alt={house.name} />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        ${new Intl.NumberFormat("en-US").format(house.price)}
                                    </h5>
                                    <p className="card-text small">
                                        Availability: {house.available ? "Available" : "Not available"}
                                    </p>
                                    <p className="card-text small">Dimensions: {house.dimensions}</p>
                                    <p className="card-text small">
                                        Rent: {house.rentAllowed ? "Allowed" : "Not allowed"}
                                    </p>
                                    <Link to={`/houses/${house.id}`} className="btn btn-outline-primary w-100">More</Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
