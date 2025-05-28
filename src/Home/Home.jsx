import './Home.css'
import urbanization from '../assets/urbanization.png'
import mikasa from '../assets/mikasa.png'
import { NavBar } from '../NavBar'

export function Home() {

    return (
        <>
            <div className="position-relative urbContainer p-0 vh-100">
                <img
                    src={mikasa}
                    alt="mikasa"
                    className="mikasa-logo m-0"
                />
                <img
                    src={urbanization}
                    alt="Urbanization"
                    className="position-absolute w-100 urbanization"
                />

                <div className="container titleContainer text-white">
                    <div className="row title m-0">

                        <div className="col-12 pb-5">

                            <h1>Find your perfect home in the perfect urbanization</h1>
                            <p>Explore available houses in the best contry areas</p>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <NavBar></NavBar>
                        </div>
                    </div>
                </div>
                <div className="container mt-4 ">
                    <div className="row d-flex">
                        <div className="col-lg-6 mission">
                            <h1>Mission <i className="ms-3 fa-solid fa-handshake"></i></h1>
                            <hr></hr>
                            <p> Our mission is to transform the way people experience homeownership by offering high-quality, accessible, and well-planned homes within secure
                                and dynamic urbanizations. We are committed to guiding our clients throughout the entire buying journey with integrity, professionalism, and personalized
                                attention, ensuring each family finds not just a house, but a true home within a vibrant community.</p>
                        </div>
                        <div className="col-lg-6 vision">
                            <h1>Vision <i className="ms-3 fa-solid fa-eye"></i></h1>
                            <hr></hr>
                            <p> To be the benchmark in residential real estate development by creating integrated urban communities where families can grow, thrive, and enjoy a high quality
                                of life. We envision neighborhoods that combine modern design, environmental responsibility, and essential amenities to promote sustainable living and lasting
                                value.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}   