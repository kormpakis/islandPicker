import React, {useEffect} from 'react'
import HomepageSteps from '../components/homepage/HomepageSteps'
import Parallax from '../components/dashboard/Parallax'

function Home(props) {
  let firstParallax = <h1>First parallax</h1>
  return (
    <div>
      {/* Parallax section */}
      <Parallax content={firstParallax} image="island.jpg"/>
      {/* Steps section*/}
      <HomepageSteps/>
    </div>
  );
}

export default Home;
