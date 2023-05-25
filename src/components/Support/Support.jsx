import supportimg from "../../assets/supportimg.png"

function Support() {
  return (
    <div className="support container section">
      <div className="sectionContainer">

        <div className="titlesDiv">
          <small>Travel Support</small>
          <h2>Find help with Booking</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit. </p>
        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">

            <div className="singleInfo">
              <span className="number">01</span>
              <h4>Travel requirments for USA</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At! </p>
            </div>

            <div className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Travel Insurance</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At! </p>
            </div>

            <div className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Services at your arrival</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. At! </p>
            </div>

          </div>

          <div className="imgDiv">
            <img src={supportimg} alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Support
