import React, {Component} from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="page-footer blue darken-4">
        <div className="container">
          <div className="row">
            <div className="col l6 m4 s8 offset-s3">
              <h5 className="white-text">Who we are?</h5>
              <p className="grey-text text-lighten-4">Need some help choosing your next destination? IslandPicker is here to help you!</p>
            </div>
            {/*<div className="col l3 m4 s8 offset-s3">*/}
            {/*  <h5 className="white-text">Categories</h5>*/}
            {/*  <ul>*/}
            {/*    <li><a className="grey-text text-lighten-3" href="#!">jQuery</a></li>*/}
            {/*    <li><a className="grey-text text-lighten-3" href="#!">JavaScript</a></li>*/}
            {/*    <li><a className="grey-text text-lighten-3" href="#!">CSS</a></li>*/}
            {/*    <li><a className="grey-text text-lighten-3" href="#!">HTML</a></li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
            <div className="col l3 m4 s8 offset-l3 offset-m4 offset-s3">
              <h5 className="white-text">About </h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">About the Company</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Privacy</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Contact Support</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2018 Copyright - All Rights Reserved
            <a className="grey-text text-lighten-4 right" href="#!">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
