import "./Footer.css"

export function Footer() {
    return (
        <div className="footer">
            <div className=" d-flex align-items-center mt-5">
                <div className="container d-flex justify-content-between mt-3 align-items-center">
                    <div>
                        <h1 className=" d-flex justify-content-center"> <i className="fa-solid fa-circle-dollar-to-slot"></i></h1>
                        <p>
                            Funding
                            available
                        </p>
                    </div>
                    <div>
                        <h1 className=" d-flex justify-content-center "> <i className="fa-solid fa-headset"></i></h1>
                        <p>
                            Personalized
                            <br></br>
                            support
                        </p>
                    </div>
                    <div>
                        <h1 className=" d-flex justify-content-center "> <i className="fa-solid fa-calculator"></i></h1>
                        <p>
                            Calculate
                            <br></br>
                            funding
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}