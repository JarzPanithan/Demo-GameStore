import React, {Component} from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

class Footer extends Component {
    render() {
        return(
            <MDBFooter color="black" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="6">
                  <h5 className="title"><b>WARNING!!</b></h5>
                  <p>This is only demo project. It can't be use right now.</p>
                  <p>Owned by: Mr. Panithan Ponpadung</p>
                </MDBCol>
                <MDBCol md="6">
                  <h5 className="title"><b>Links</b></h5>
                  <ul>
                    <li className="list-unstyled">
                      <a href="#!">Link 1</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Link 2</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Link 3</a>
                    </li>
                    <li className="list-unstyled">
                      <a href="#!">Link 4</a>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
              </MDBContainer>
            </div>
          </MDBFooter>
        );
    }
}

export default Footer;