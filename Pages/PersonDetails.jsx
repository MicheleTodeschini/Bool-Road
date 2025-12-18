import { Link, useParams, useNavigate } from "react-router-dom"
import user from "../src/img/user.jpg"
import viaggi from "../src/data/viaggi"

export default function PersonDetail() {

  const id = 1

  const filterTrip = viaggi.filter(items => (
    items.id == id

  ))

  const filterUser = filterTrip[0].viaggiatori.find(items => items.id === id)

  const navigate = useNavigate()

  const traveler = filterUser


  return (
    <>
      <Link to={`/TravelDetails/:${id}`}>
        <button type="button" className="eye btn btn-outline-primary" onClick={() => navigate(-1)}>
          <i className="bi bi-arrow-left"></i>

        </button>
      </Link>
      <div className="card" >
        <div className="card-top">
          <img src={user}></img> {/*IMMAGE DELLA PERSONA*/}
        </div>
        <div className="card-bottom">
          <p className="name">{traveler.nome} {traveler.cognome}</p> {/*TENDENZIALMENTE QUESTO DA FARE IN STRONG*/}
          <p><strong>Codice fiscale:</strong>{traveler.codiceFiscale}</p>
          <p><strong>Email:</strong> {traveler.email}</p>
          <p><strong>Numero di telefono:</strong>+39 {traveler.telefono}</p>
        </div>
      </div>
    </>
  )


}