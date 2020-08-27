import React from 'react'
import HomepageSteps from '../components/homepage/HomepageSteps'
import Parallax from '../components/dashboard/Parallax'

function Home(props) {
  let firstParallax = <div>
    <h1>Welcome to IslandPicker</h1>
    <h4>Need help choosing your next destination? We are here to help you!</h4>
    <a className="waves-effect waves-light btn-large" href="#">Get started</a>
  </div>
  return (
    <div>
      {/* Parallax section */}
      <Parallax content={firstParallax} image="islandOpen.jpg"/>

      {/* Services/Tabs section */}
      <section className="container section">
        <div className="row">
          <div className="col s12 l4">
            <h2 className="indigo-text text-darken-4">What we do</h2>
            <p>islandPicker is an original idea which arose out of the need to choose the next (Greek island)
              destination based on certain criteria.</p>
            <p>The main idea is building a community, whose members will be vivid travellers, ready to explore the
              beauties of the greek islands.</p>
          </div>
          <div className="col s12 l7 offset-l1">
            <ul className="tabs">
              <li className="tab col s6">
                <a href="#pickIsland" className="indigo-text text-darken-4"><h6>Find your destination</h6></a>
              </li>
              <li className="tab col s6">
                <a href="#helpOthers" className="indigo-text text-darken-4"><h6>Sharing is caring</h6></a>
              </li>
            </ul>
            <div className="col s12 center" id="pickIsland">
              <p className="flow-text indigo-text text-darken-4">CAN'T CHOOSE AN ISLAND?</p>
              <h5>What attracts you the most?</h5>
              <p>Is it the beaches? Nature? Do you want a relaxing place or heavy clubbing? Maybe you are a food lover!</p>
              <b>Create an account, prioritize your preferences and let out algorithm do the rest!</b>
            </div>
            <div className="col center s12" id="helpOthers">
              <p className="flow-text indigo-text text-darken-4">HELP THE OTHERS</p>
              <h5>Want to help others choose the island of their dreams?</h5>
              <p>Rate the islands you have already visited and highlight each destination's beauties!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps section*/}
      <HomepageSteps/>
    </div>
  );
}

export default Home;
