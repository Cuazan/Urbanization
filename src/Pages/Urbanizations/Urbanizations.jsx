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

  const HTMLUrbanizations = urbanizations.map((urbanization) => {
    return (

      <div className="card rounded rounded-0 border border-0" key={urbanization.id}>
        <img className="card-img-top" src={urbanization.images} alt="Card image"></img>
        <div className="card-body">
          <h4 className="card-title">{urbanization.name}</h4>
          <p className="card-text">Dimensions: {urbanization.dimensions}</p> <p>Foundation date: {urbanization.foundationdate}</p>

          <button className="btn btn-primary">See houses</button>
        </div>
      </div>
    )
  })


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