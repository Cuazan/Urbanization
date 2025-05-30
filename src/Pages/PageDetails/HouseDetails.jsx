import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetHouses } from "../../Requester/Requester";
import { ToggleAvailability } from "../../Requester/Requester";

export function HouseDetails() {
    const { id } = useParams();
    const [house, setHouse] = useState(null);

    const getHouseById = async () => {
        try {
            const response = await GetHouses();
            const selectedHouse = response.find(h => h.id == id);
            setHouse(selectedHouse);
        } catch (error) {
            console.log(error);
        }
    };

    const handleToggleAvailability = async () => {
        try {
            const updatedHouse = await ToggleAvailability(house.id, house.available);
            setHouse(prev => ({ ...prev, available: updatedHouse.available }));
        } catch (error) {
            console.error("Error updating availability", error);
        }
    };

    useEffect(() => {
        getHouseById();
    }, [id]);

    if (!house) return <div className="text-center mt-5">Loading...</div>;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
                <Link className="navbar-brand fw-bold" to="/">Mikasa</Link>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/houses">Houses</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <img src={house.imageURL} alt={house.name} className="img-fluid rounded shadow mb-3" />

                        <button
                            className={`btn ${house.available ? "btn-danger" : "btn-success"} w-100`}
                            onClick={handleToggleAvailability}
                        >
                            Purchase house
                        </button>
                    </div>

                    <div className="col-md-6 border">
                        <h2 className="fw-bold mb-3">${new Intl.NumberFormat().format(house.price)}</h2>
                        <p><strong>Availability:</strong> {house.available ? "Available" : "Not available"}</p>
                        <p><strong>Rent:</strong> {house.rentAllowed ? "Allowed" : "Not allowed"}</p>
                        <p><strong>Dimensions:</strong> {house.dimensions}</p>
                        <p><strong>Rooms:</strong> {house.numDeCuartos}</p>
                        <p><strong>Bathrooms:</strong> {house.numDeBanos}</p>
                        <p><strong>Address:</strong> {house.direccion}</p>

                        <hr />

                        <h5>Urbanization Info</h5>
                        <p><strong>Name:</strong> {house.urbanizationId.name}</p>
                        <p><strong>Dimensions:</strong> {house.urbanizationId.dimensions}</p>
                        <p><strong>Founded:</strong> {house.urbanizationId.foundationdate}</p>
                        <img src={house.urbanizationId.imageURL} alt="Urbanization" className="img-fluid rounded mt-2" />
                    </div>
                </div>
            </div>
        </>
    );
}
