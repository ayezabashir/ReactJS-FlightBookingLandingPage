import imageGrid from '../../assets/imageGrid.webp'

const Lounge = () => {
  return (
    <div className="lounge container flex">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={imageGrid} alt="" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
          <div className="grids grid">

            <div className="singleGrid">
              <span className="gridTitle">
                Help through the airport
              </span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum consectetur, nesciunt ipsam aliquam eius sint aperiam.</p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">
                Proority Boarding
              </span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum consectetur, nesciunt ipsam aliquam eius sint aperiam.</p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">
                Chauffeur-drive service
              </span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum consectetur, nesciunt ipsam aliquam eius sint aperiam.</p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">
                Care on Flight
              </span>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum consectetur, nesciunt ipsam aliquam eius sint aperiam.</p>
            </div>

          </div>
        </div>



      </div>
    </div>
  )
}

export default Lounge
