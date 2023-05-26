import paris from '../../assets/paris.jpg'
import london from '../../assets/london.jpg'
import bangkok from '../../assets/bangkok.jpg'
import pakistan from '../../assets/pakistan.jpg'
import traveler1 from '../../assets/traveler1.jpg'
import traveler2 from '../../assets/user2.jpg'
import traveler3 from '../../assets/user3.jpg'
import traveler4 from '../../assets/user4.jpg'


const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'Kenji Kishimoto',
    socialLink: '@kenji76'
  },
  {
    id: 2,
    destinationImage: london,
    travelerImage: traveler2,
    travelerName: 'Haider Ibrahim',
    socialLink: '@haider32'
  },
  {
    id: 3,
    destinationImage: bangkok,
    travelerImage: traveler3,
    travelerName: 'Alex Russo',
    socialLink: '@alex46'
  },
  {
    id: 4,
    destinationImage: pakistan,
    travelerImage: traveler4,
    travelerName: 'Justin Sky',
    socialLink: '@justin990'
  }
]

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this Month!</h2>

        <div className="travelersContainer grid">

          {
            travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
              return (
                <div key={id} className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" />
                  <div className="travelersDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className='travelerImage' />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

    </div>
  )
}

export default Travelers
