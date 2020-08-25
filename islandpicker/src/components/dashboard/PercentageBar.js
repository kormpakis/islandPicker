import React from 'react';

function PercentageBar(props) {
  const style = {transform: 'rotate(' + props.percentage*360 / 100 + 'deg)'}
  return (
    <div>
      {props.percentage <= 50 ?
        <div className="set-size charts-container">
          <div className="pie-wrapper progress-30">
            <span className="label">{props.percentage}<span className="smaller">%</span></span>
            <div className="pie">
              <div style={style} className="half-circle"></div>
              <div className="right-side half-circle"></div>
            </div>
          </div>
        </div>
          :
        <div className="set-size charts-container">
          <div className="pie-wrapper progress-60">
          <span className="label">{props.percentage}<span className="smaller">%</span></span>
          <div className="pie">
            <div style={style} className="left-side half-circle"></div>
            <div className="right-side half-circle"></div>
          </div>
        </div>
        </div>
      }
    </div>
    );
}

export default PercentageBar;
