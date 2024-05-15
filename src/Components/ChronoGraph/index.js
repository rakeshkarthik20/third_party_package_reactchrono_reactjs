import {Chrono} from 'react-chrono'

const items = [{title: '2018'}, {title: '2019'}]

const ChronoGraph = () => (
  <div className="chrono-container">
    <Chrono mode="VERTICAL" items={items}>

    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
        className="image"
        alt="chennai-super-kings"
      />
    </div> 

    <div>
        <h1>Mumbai Indians</h1>
        <p>IPL Team winner for the year 2019 is Mumbai Indians.</p>
    </div>
      
    </Chrono>
 </div>
)

export default ChronoGraph