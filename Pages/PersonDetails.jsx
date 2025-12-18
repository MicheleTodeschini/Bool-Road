import viaggi from "../src/data/viaggi"
import user from "../src/img/user.jpg"

export default function PersonDetail() {





  return (
    <>
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
  )


}