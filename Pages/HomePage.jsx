import { Link } from "react-router-dom";
import viaggi from "../src/data/viaggi";
import user from "../src/img/user.jpg"
export default function HomePage() {



    return (
        <>
            <div className="container">
                <h1 className="mt-3 text-center fw-bold">Lista Viaggi</h1>
                <p className="text-center text-muted mb-4">
                    Destinazioni, date e dettagli delle tue prossime avventure
                </p>
                <div className="row">
                    {viaggi.map((viaggio) => (
                        <div key={viaggio.id} className="col-md-6 col-lg-3 mb-4">
                            <div className="card h-100 shadow-sm viaggio-card">
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{viaggio.destinazione}</h5>

                                    <p className="card-text text-muted small">
                                        Data partenza: <strong>{viaggio.dataInizio}</strong> <br />
                                        Data arrivo: <strong>{viaggio.dataFine}</strong>
                                    </p>

                                    <Link
                                        to={`/TravelDetails/${viaggio.id}`}
                                        className="btn btn-outline-primary mt-auto"
                                    >
                                        Dettagli viaggio
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="card" >
                <div className="card-top">
                    <img src={user}></img> {/*IMMAGE DELLA PERSONA*/}
                </div>
                <div className="card-bottom">
                    <p className="name">Gigi Pipino</p> {/*TENDENZIALMENTE QUESTO DA FARE IN STRONG*/}
                    <p><strong>Email:</strong> gigipipino@gmail.com</p>
                    <p>+39 12346789</p>
                    <p>GGIPPN99K13L205Y</p>
                </div>
            </div>
        </>
    );


}