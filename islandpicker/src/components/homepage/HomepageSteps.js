import React from 'react';

function HomepageSteps(props) {
  return (
    <section className="section" id="steps">
      {/* First step */}
      <div className="row step test">
        <div className="col s12 l6 stepOne">
        </div>
        <div className="col s12 l6 flow-text">
          <blockquote>
            <h3 className="indigo-text text-darken-4">Step 1: Be ready to explore</h3>
            <p className="grey-text text-darken-3">
              Are you ready to explore the greek islands?
            </p>
          </blockquote>
          <p className="grey-text text-darken-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
      {/* Second step */}
      <div className="row step">
        <div className="col s12 l6 push-l6 stepTwo">
        </div>
        <div className="col s12 l6 pull-l6 flow-text right-align">
          <blockquote>
            <h3 className="indigo-text text-darken-4">Step 2: Share your criteria</h3>
            <p className="grey-text text-darken-3">
              So... what do you want this year?
            </p>
          </blockquote>
          <p className="grey-text text-darken-3 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
      {/* Third step  */}
      <div className="row step">
        <div className="col s12 l6 stepOne">
        </div>
        <div className="col s12 l6 flow-text">
          <blockquote>
            <h3 className="indigo-text text-darken-4">Step 3: Rate the places you visited</h3>
            <p className="grey-text text-darken-3">
              Share your opinion and help the others!
            </p>
          </blockquote>
          <p className="grey-text text-darken-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomepageSteps;
