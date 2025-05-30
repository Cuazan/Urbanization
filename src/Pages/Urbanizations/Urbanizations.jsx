import { useState, useEffect } from "react";
import { GetProducts } from "../../Requester/Requester";
import { Link } from "react-router-dom";

export function Urbanizations() {
  const [urbanizations, setUrbanizations] = useState([]);

  const getUrbs = async () => {
    try {
      const response = await GetProducts();
      setUrbanizations(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUrbs();
  }, [])

  function FilterHouse(id) {

  }

  const HTMLUrbanizations = urbanizations.map((urbanization) => {
    return (
      <div className="card mb-4 shadow-sm" key={urbanization.id}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={urbanization.imageURL}
              alt="Urbanization"
              className="img-fluid h-100 object-fit-cover rounded-start"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{urbanization.name}</h4>
              <p className="card-text">Dimensions: {urbanization.dimensions}</p>
              <p className="card-text">Foundation date: {urbanization.foundationdate}</p>
              <Link to={`/houses?urbanizationId=${urbanization.id}`} className="btn btn-primary">
                See houses
              </Link>

            </div>
          </div>
        </div>
      </div>
    );
  });



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
      <div className="container mt-4">
        {HTMLUrbanizations}
      </div>
    </>
  )
}