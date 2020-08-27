import React from 'react'

function Parallax(props) {
  return (
    <section className="section">
      <div className="parallax-container center valign-wrapper">
        <div className="container">
          <div className="row">
            <div className="col s12 white-text">
              <h2>{props.content}</h2>
            </div>
          </div>
        </div>
        <div className="parallax">
          <img src={props.image} alt="" className="responsive-img"/>
        </div>
      </div>
    </section>
  );
}

export default Parallax;
