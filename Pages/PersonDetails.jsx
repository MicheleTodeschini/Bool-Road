import viaggi from "../src/data/viaggi"

export default function PersonDetail() {





  return (
    <>
      <div className="card" >
        <div className="card-top">
          <img src="https://placehold.co/600x400"></img> {/*IMMAGE DELLA PERSONA*/}
        </div>
        <div className="card-bottom">
          <p className="name">Nome del viaggiatore</p> {/*TENDENZIALMENTE QUESTO DA FARE IN STRONG*/}
          <p>email del viaggiatore</p>
          <p>telefono del viaggiatore</p>
          <p>Codice fiscale del viaggiatore</p>
        </div>
      </div>
    </>
  )


}