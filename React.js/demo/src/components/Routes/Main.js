import React, {Component} from 'react';
import './Main.css';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import {MDBAnimation, MDBIcon, MDBProgress} from 'mdbreact';
import {Badge} from 'reactstrap';
import Toolbar from '../Components/Toolbar';
import Tabs from '../Components/Tabs';
import CarouselItem from '../Components/CarouselItem';
import Footer from '../Components/Footer';

class App extends Component {
  render(){
    return(
      <div className="App">
          <Toolbar/>
          <Tabs/>
          <CarouselItem/>
          <RecommendFeaturedDeal/>
          <PrePurchaseCard/>
          <TopSellerCard/>
          <StoreCard/>
          <BrowseMenu/>
          <Footer/>
      </div>
    );
  }
}

class RecommendFeaturedDeal extends Component {
  render(){
    return(
      <Container>
        <Row>
          <Col style={{marginTop: 60}}>
            <MDBAnimation type="bounce">
             <h2 style={{marginLeft: 50}} class="title">RECOMMENDED GAMES</h2>
            </MDBAnimation>
             <MDBProgress className="my-2" material value={100} color="danger"/>
          </Col>
          <Col style={{marginTop: 60}}>
            <MDBAnimation type="bounce">
             <h2 style={{marginRight: 50}} class="title">FEATURED DEAL</h2>
            </MDBAnimation> 
             <MDBProgress className="my-2" material value={100} color="danger"/>
                <Card style={{width: "30rem"}}>
                <Card.Img variant="top" src="https://hb.imgix.net/d5f290c27cc5f1fca9f6340508ba2488b2c07958.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=d54c9e50423c086421970a0edae71024"/>
                <Card.Body>
                  <Card.Title>Monster Hunter World</Card.Title>
                  <Col style={{marginLeft: 70}}>
                    <Row style={{marginLeft: 10}}>
                      <h3 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-50%</Badge><b><strike>59.99$</strike></b></h3>
                      <h3 style={{color: "green", marginLeft: 5}}><b>$29.99</b></h3>
                    </Row>
                  </Col>
                    <Card.Text>Grab this game before it will expire soon.</Card.Text>
                    <Button variant="dark"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
       </Container>
    );
  }
}

class PrePurchaseCard extends Component {
  render(){
    return(
          <div className="App">
            <Container>
              <Row>
                <Col>
                  <MDBAnimation type="bounce">
                    <h2 style={{marginTop: 60}} class="title">PRE-PURCHASE</h2>
                  </MDBAnimation>
                  <MDBProgress className="my-2" material value={100} color="danger"/>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row style={{marginTop: 40}}>
                <Col>
                  <Card style={{width: "20rem", height: "20.5rem"}}>
                    <Card.Img variant="top" src="https://hb.imgix.net/105ad3217a2f29506704d058bf72cee3c84964c4.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=92fbee15ac564ee0036ac6cd96b26777"/>
                    <Card.Body>
                      <Card.Title style={{fontSize: 16}}>The Occupation</Card.Title>
                      <h3 style={{color: "red"}}><b>$44.99</b></h3>
                      <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{width: "20rem", height: "20.5rem"}}>
                    <Card.Img variant="top" src="https://hb.imgix.net/5b7f5c0d88e31afff9138c453204796850f81b34.jpg?auto=compress,format&fit=crop&h=353&w=616&s=8297809a84427edbd3c5d3afb24eb76e"/>
                    <Card.Body>
                      <Card.Title style={{fontSize: 16}}>OCTOPATH TRAVELER</Card.Title>
                      <h3 style={{color: "red"}}><b>$23.99</b></h3>
                      <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{width: "20rem", height: "20.5rem"}}>
                    <Card.Img variant="top" src="https://hb.imgix.net/b81f91e0f16093443eef143117ab47175aaabcc6.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=20c91cfe049fdd22349721d0dea8750b"/>
                    <Card.Body>
                      <Card.Title style={{fontSize: 16}}>GOD EATER 3</Card.Title>
                        <Col>
                          <Row>
                             <h3 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-33%</Badge><b><strike>$59.99</strike></b></h3>
                             <h3 style={{color: "green", marginLeft: 5}}><b>$40.19</b></h3>
                          </Row>
                        </Col>
                      <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row style={{marginTop: 40}}>
                <Col>
                  <Card style={{width: "15rem", height: "17.5rem"}}>
                    <Card.Img variant="top" src="https://hb.imgix.net/6e63614da72a4ff459be5f6070af78549af897a0.jpg?auto=compress,format&fit=crop&h=353&w=616&s=7f0d6ea5628aa07bd0073bfdc40885b2"/>
                    <Card.Body>
                      <Card.Title style={{fontSize: 16}}>Borderlands 3</Card.Title>
                      <h5 style={{color: "red"}}><b>$44.99</b></h5>
                      <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{width: "15rem", height: "17.5rem"}}>
                    <Card.Img variant="top" src="https://hb.imgix.net/52e6ffd76e037ef7e4ee10a6a681b827b98a8c5a.jpg?auto=compress,format&fit=crop&h=353&w=616&s=883f103c42db9ea9c26a0000c37e3185"/>
                    <Card.Body>
                      <Card.Title style={{fontSize: 16}}>RAGE 2</Card.Title>
                      <h5 style={{color: "red"}}><b>$59.99</b></h5>
                      <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{width: "15rem", height: "17.5rem"}}>
                    <Card.Img variant="top" src="https://external-preview.redd.it/MQzvgIqkVnJt65a-UJw10EUJI_mN50OYF5Hq7MaH-Rg.jpg?width=960&height=502.617801047&auto=webp&s=84734187fc54a58e47d71511e1f6f0dc5a84c074"/>
                    <Card.Body>
                      <Card.Title style={{fontSize: 13.5}}>Tom Clancy's Ghost Recon: Breakpoint</Card.Title>
                      <h5 style={{color: "red"}}><b>$59.99</b></h5>
                      <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{width: "15rem", height: "17.5rem"}}>
                    <Card.Img variant="top" src="https://hb.imgix.net/0691cd1148494cce1387283912f3be3486be1823.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=e594fdf5a69968139bdfc6e723bd3487"/>
                    <Card.Body>
                      <Card.Title style={{fontSize: 16}}>Total War: Three Kingdoms</Card.Title>
                      <h5 style={{color: "red"}}><b>$47.99</b></h5>
                      <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          <Container>
            <Row style={{marginTop: 40}}>
              <Col>
                <Card style={{width: "15rem", height: "17.5rem"}}>
                  <Card.Img variant="top" src="https://hb.imgix.net/4168150c3e8435d746e6d8c87666dea3086f6f29.jpg?auto=compress,format&fit=crop&h=353&w=616&s=3479a59da33cb63f2bd81abfaf370556"/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 16}}>Wolfenstein Youngblood</Card.Title>
                    <h5 style={{color: "red"}}><b>$39.99</b></h5>
                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{width: "15rem", height: "17.5rem"}}>
                  <Card.Img variant="top" src="https://hb.imgix.net/87d4c1a5b6ecb02fc899e30a317cedd387795d1e.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=af82ae302ec4b7e507cb1f514cdf6da3"/>
                    <Card.Body>
                      <Card.Title style={{fontSize: 16}}>Wolfenstein Cyberpilot</Card.Title>
                      <h5 style={{color: "red"}}><b>$19.99</b></h5>
                      <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                  </Card.Body>
                </Card>
            </Col>
            <Col>
              <Card style={{width: "15rem", height: "17.5rem"}}>
                  <Card.Img variant="top" src="https://hb.imgix.net/97ca263a59cb38765c7558517f70171458f07f12.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=d892047821346cb1f6745be434ca2a1f"/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 16}}>Far Cry® New Dawn</Card.Title>
                    <Col>
                        <Row>
                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-50%</Badge><b><strike>$39.99</strike></b></h5>
                            <h5 style={{color: "green", marginLeft: 5}}><b>$19.99</b></h5>
                        </Row>
                    </Col>
                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{width: "15rem", height: "17.5rem"}}>
                <Card.Img variant="top" src="https://hb.imgix.net/dafa2d44d23de0947ce5a770949310f1bc8db082.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=4cc9ea2ce63dbf816706e7d3b121e0cd"/>
                  <Card.Body>
                  <Card.Title style={{fontSize: 14}}>Vampire: The Masquerade® - Bloodlines™ 2</Card.Title>
                  <h5 style={{color: "red"}}><b>$59.99</b></h5>
                  <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Button variant="outline-light" size="lg" style={{marginTop: 40, padding: 10, width: "55%"}}>View All</Button>
      </div>
    );
  }
}



class TopSellerCard extends Component {
  render(){
    return(
      <div class="App">
        <Container>
          <Row>
            <Col style={{marginTop: 60}}>
              <MDBAnimation type="bounce">
                <h2 style={{marginRight: 50}} class="title">TOP SELLER</h2>
              </MDBAnimation>
              <MDBProgress className="my-2" material value={100} color="danger"/>
            </Col>
          </Row>
        </Container>
        <Container>
              <Row style={{marginTop: 40}}>
                <Col>
                  <Card style={{width: "20rem", height: "20.5rem"}}>
                    <Card.Img variant="top" src="https://hb.imgix.net/a7466447643ec505a5bbbfac4f62c773feeaec65.jpg?auto=compress,format&fit=crop&h=353&w=616&s=fd0d4946b9473ea9d5f6cea69b72d63f"/>
                    <Card.Body>
                      <Card.Title style={{fontSize: 16}}>Metal Gear Solid V: Phantom Pain</Card.Title>
                      <h3 style={{color: "red"}}><b>$59.99</b></h3>
                      <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{width: "20rem", height: "20.5rem"}}>
                    <Card.Img variant="top" src="https://hb.imgix.net/fd21e27cf43b4d716cb834c4b854e476badc0530.jpg?auto=compress,format&fit=crop&h=353&w=616&s=eed29a3ca4710a6236a11cb3c5ee562c"/>
                    <Card.Body>
                      <Card.Title style={{fontSize: 16}}>Assassin's Creed Origins</Card.Title>
                      <h3 style={{color: "red"}}><b>$59.99</b></h3>
                      <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{width: "20rem", height: "20.5rem"}}>
                    <Card.Img variant="top" src="https://hb.imgix.net/40f83042b19b29066c5c24e874b71b67ebf08958.jpg?auto=compress,format&fit=crop&h=353&w=616&s=0c30c10d66ee7d1f57f3a0f0819c927f"/>
                    <Card.Body>
                      <Card.Title style={{fontSize: 16}}>Tom Clancy's Ghost Recon: Wildlands</Card.Title>
                      <Col>
                        <Row>
                          <h3><Badge color="success" style={{marginRight: 5}}>-65%</Badge></h3>
                          <h3 style={{color: "red", marginRight: 5}}><b><strike>$49.99</strike></b></h3>
                          <h3 style={{color: "green", marginLeft: 5}}><b>$17.49</b></h3>
                        </Row>
                      </Col>
                      <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
        <Container>
          <Row style={{marginTop: 40}}>
            <Col>
              <Card style={{width: "15rem", height: "17rem"}}>
                <Card.Img variant="top" src="https://hb.imgix.net/74e8d7c2ec7dde490abf64d54f9828fa073ae4e3.jpg?auto=compress,format&fit=crop&h=353&w=616&s=6b9af392df9564413a51c35a14a3c6d1"/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 16}}>Assassin's Creed Odyssey</Card.Title>
                    <h5 style={{color: "red"}}><b>$59.99</b></h5>
                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                  </Card.Body>
                </Card>
            </Col>
          <Col>
          <Card style={{width: "15rem", height: "17rem"}}>
            <Card.Img variant="top" src="https://hb.imgix.net/f99fae7c6bcdf3621cec7248d34668dc047c1586.jpg?auto=compress,format&fit=crop&h=353&w=616&s=5a2470de8d830ad1d364d9288deebeee"/>
              <Card.Body>
                <Card.Title style={{fontSize: 16}}>Just Cause 4</Card.Title>
                <h5 style={{color: "red"}}><b>$59.99</b></h5>
                <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{width: "15rem", height: "17rem"}}>
              <Card.Img variant="top" src="https://hb.imgix.net/8bd4c140fe4a0c5cfba973470521fedaf0d18f92.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=c88bd13c7710cf51d1411f4777f595c7"/>
                <Card.Body>
                  <Card.Title style={{fontSize: 16}}>Mortal Kombat 11</Card.Title>
                  <h5 style={{color: "red"}}><b>$59.99</b></h5>
                  <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                </Card.Body>
              </Card>
            </Col>
          <Col>
            <Card style={{width: "15rem", height: "17rem"}}>
              <Card.Img variant="top" src="https://hb.imgix.net/5987e888edbc2957940153ca3727a0b5520ee62b.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=3b8346cced963fb4a961843f833cd07e"/>
                <Card.Body>
                  <Card.Title style={{fontSize: 16}}>A Plague Tale Innocence</Card.Title>
                  <h5 style={{color: "red"}}><b>$44.99</b></h5>
                  <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row style={{marginTop: 40}}>
            <Col>
              <Card style={{width: "15rem", height: "17rem"}}>
                <Card.Img variant="top" src="https://hb.imgix.net/2a470e47529df9a836ec290787b91894aad0c7ce.png?auto=compress,format&fit=crop&h=353&w=616&s=66d9dc3ba4fdad4e1f7f66df89bc7312"/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 16}}>Metro Exodus</Card.Title>
                    <h5 style={{color: "red"}}><b>$59.99</b></h5>
                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
              <Card style={{width: "15rem", height: "17rem"}}>
                <Card.Img variant="top" src="https://hb.imgix.net/73b854a6c097c499edebf21702498686a2c2c219.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=128134e324ec8dca30e186c11cd89915"/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 16}}>Devil May Cry 5</Card.Title>
                    <h5 style={{color: "red"}}><b>$59.99</b></h5>
                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{width: "15rem", height: "17rem"}}>
                  <Card.Img variant="top" src="https://hb.imgix.net/b1a9b5f7c74c7f1910ec0df0aa7a3166caf14d79.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=d325a26ea2dcafb170ff311759cdc6ad"/>
                    <Card.Body>
                      <Card.Title style={{fontSize: 16}}>Sekiro: Shadows Die Twice</Card.Title>
                      <h5 style={{color: "red"}}><b>$59.99</b></h5>
                      <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Card style={{width: "15rem", height: "17rem"}}>
                  <Card.Img variant="top" src="https://hb.imgix.net/18cce3b172fb6133a5e2aea7a176bf7a1dce9a63.png?auto=compress,format&fit=crop&h=353&w=616&s=2f9cc94ac7d045555cde27cfd6153259"/>
                    <Card.Body>
                      <Card.Title style={{fontSize: 13.5}}>Tom Clancy's Rainbow Six Siege</Card.Title>
                        <Col>
                          <Row>
                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-45%</Badge><b><strike>19.99$</strike></b></h5>
                            <h5 style={{color: "green", marginLeft: 5}}><b>$10.99</b></h5>
                          </Row>
                        </Col>
                        <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
        </Container>
        <Button variant="outline-light" size="lg" style={{marginTop: 40, padding: 10, width: "55%"}}>View All</Button>
      </div>
    );
  }
}

class StoreCard extends Component {
  render(){
    return(
      <div class="App">
        <Container>
          <Col style={{marginTop: 60}}>
            <MDBAnimation type="bounce">
              <h2 style={{marginLeft: 50}} class="title">STORE</h2>
            </MDBAnimation>
            <MDBProgress className="my-2" material value={100} color="danger"/>
          </Col>
        </Container>
        <Container>
          <Row style={{marginTop: 40}}>
            <Col>
              <Card style={{width: "20rem", height: "20.5rem"}}>
                <Card.Img variant="top" src="https://hb.imgix.net/523b868fb7a6f2df32aff5a759125b0277e84c3b.jpg?auto=compress,format&fit=crop&h=353&w=616&s=d67213e8614b477d9e632340d35fc60e"/>
                  <Card.Body>
                    <Card.Title>Forager</Card.Title>
                    <h3 style={{color: "red"}}><b>$19.99</b></h3>
                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                  </Card.Body>
                </Card>
              </Col>
            <Col>
              <Card style={{width: "20rem", height: "20.5rem"}}>
                <Card.Img variant="top" src="https://hb.imgix.net/d228d58fdfaae1b7963a481b5e0807406c8029c4.jpg?auto=compress,format&fit=crop&h=353&w=616&s=c6adf7d740d7e06ce010f74e24a45342"/>
                  <Card.Body>
                    <Card.Title>Squad</Card.Title>
                      <Col>
                        <Row>
                          <h3><Badge color="success" style={{marginRight: 5}}>-30%</Badge></h3>
                          <h3 style={{color: "red", marginRight: 5}}><b><strike>$39.99</strike></b></h3>
                          <h3 style={{color: "green", marginLeft: 5}}><b>$27.99</b></h3>
                        </Row>
                      </Col>
                      <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                  </Card.Body>
                </Card>
              </Col>
            <Col>
              <Card style={{width: "20rem", height: "20.5rem"}}>
                <Card.Img variant="top" src="https://hb.imgix.net/f1145f13ff162ad7fdc206fed0822f68bc1b5359.jpg?auto=compress,format&fit=crop&h=353&w=616&s=25d6483201bd16f973a83ced32a796ad"/>
                  <Card.Body>
                    <Card.Title>DOOM</Card.Title>
                    <h3 style={{color: "red"}}><b>$19.99</b></h3>
                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                  </Card.Body>
                </Card>
              </Col>
          </Row>
        </Container>
        <Container>
        <Row style={{marginTop: 40}}>
            <Col>
              <Card style={{width: "15rem", height: "17rem"}}>
                <Card.Img variant="top" src="https://hb.imgix.net/49b71bcbe7093f14360db3473d74b0f978735cb8.jpg?auto=compress,format&fit=crop&h=353&w=616&s=5c510efbb3de7d5bd4294a97fc23a126"/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 16}}>Prey</Card.Title>
                    <h5 style={{color: "red"}}><b>$29.99</b></h5>
                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{width: "15rem", height: "17rem"}}>
                  <Card.Img variant="top" src="https://hb.imgix.net/128e6258434d37fd81f79a2d03c00dae10ace5e3.jpg?auto=compress,format&fit=crop&h=353&w=616&s=0ffb25ae99986d7ad2d5e51795c78076"/>
                    <Card.Body>
                      <Card.Title style={{fontSize: 13.5}}>Dying Light</Card.Title>
                        <Col>
                          <Row>
                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-60%</Badge><b><strike>39.99$</strike></b></h5>
                            <h5 style={{color: "green", marginLeft: 5}}><b>15.99$</b></h5>
                          </Row>
                        </Col>
                        <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{width: "15rem", height: "17rem"}}>
                    <Card.Img variant="top" src="https://hb.imgix.net/b446b5ff6b6979f8d83e9f41ab2d2a4f92e60687.jpg?auto=compress,format&fit=crop&h=353&w=616&s=726514cedff0db7fca616cf4fc9a06f92"/>
                      <Card.Body>
                        <Card.Title style={{fontSize: 16}}>Fade To Silence</Card.Title>
                          <h5 style={{color: "red"}}><b>$39.99</b></h5>
                          <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                      </Card.Body>
                  </Card>
                </Col>
                <Col>
              <Card style={{width: "15rem", height: "17rem"}}>
                <Card.Img variant="top" src="https://hb.imgix.net/43b8b93308f9073013b697fee028e1a77e541155.jpg?auto=compress,format&fit=crop&h=353&w=616&s=970da8fed4ed3d454e6f91561a060af8"/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 16}}>Eagle Flight</Card.Title>
                    <Col>
                      <Row>
                        <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-70%</Badge><b><strike>19.99$</strike></b></h5>
                        <h5 style={{color: "green", marginLeft: 5}}><b>$5.99</b></h5>
                     </Row>
                    </Col>
                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
        </Container>
        <Container>
          <Row style={{marginTop: 40}}>
            <Col>
              <Card style={{width: "15rem", height: "17rem"}}>
                <Card.Img variant="top" src="https://hb.imgix.net/9957fb0b043159dfcd1bbf20ed748411985b9df8.jpg?auto=compress,format&fit=crop&h=353&w=616&s=d848a1b14e7fc2141ed5d58c1601c048"/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 16}}>Conan Exiles</Card.Title>
                    <h5 style={{color: "red"}}><b>$25.99</b></h5>
                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                  </Card.Body>
                </Card>
              </Col>
            <Col>
              <Card style={{width: "15rem", height: "17rem"}}>
                <Card.Img variant="top" src="https://hb.imgix.net/0c2ac75059742ea93d53c9fea57fe4aa716a5385.jpg?auto=compress,format&fit=crop&h=353&w=616&s=d73c2855cedae7c0d4bfaf9b35a19859"/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 16}}>Saints Row: The Third</Card.Title>
                    <h5 style={{color: "red"}}><b>$14.99</b></h5>
                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                  </Card.Body>
                </Card>
              </Col>
            <Col>
              <Card style={{width: "15rem", height: "17rem"}}>
                <Card.Img variant="top" src="https://hb.imgix.net/7367f1bd2249f54f70dcfe4575dab02eb2672aa8.jpg?auto=compress,format&fit=crop&h=353&w=616&s=31f9aabb4de86e89ad679ae8e3905bdc"/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 16}}>Mafia 3</Card.Title>
                    <Col>
                      <Row>
                        <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-75%</Badge><b><strike>9.99$</strike></b></h5>
                        <h5 style={{color: "green"}}><b>$39.99</b></h5>
                      </Row>
                    </Col>
                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                  </Card.Body>
                </Card>
              </Col>
            <Col>
              <Card style={{width: "15rem", height: "17rem"}}>
                <Card.Img variant="top" src="https://hb.imgix.net/e6fcc9ee2825d22a48b54a22a7beb7f52bbf4af5.jpg?auto=compress,format&fit=crop&h=353&w=616&s=0f16ffa339cf45c3fdec1bdcb5bbf6df"/>
                  <Card.Body>
                    <Card.Title style={{fontSize: 16}}>HITMAN™2</Card.Title>
                    <h5 style={{color: "red"}}><b>$59.99</b></h5>
                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                  </Card.Body>
                </Card>
              </Col>
          </Row>
        </Container>
        <Button variant="outline-light" size="lg" href="store-page=1" style={{marginTop: 40, padding: 10, width: "55%"}}>View All</Button>
      </div>
    );
  }
}

class BrowseMenu extends Component {
  render(){
    return(
      <div class="App">
        <Container>
          <Col style={{marginTop: 60}}>
            <MDBAnimation type="bounce">
              <h2 style={{marginLeft: 50}} class="title">BROWSE MENU</h2>
            </MDBAnimation>
            <MDBProgress className="my-2" material value={100} color="danger"/>
          </Col>
        </Container>
        <Container>
          <Row style={{marginTop: 40}}>
            <Col><Button variant="outline-light" size="lg" style={{width: "100%"}}>ALL GAMES</Button></Col>
            <Col><Button variant="outline-light" size="lg" style={{width: "100%"}}>FEATURED GAMES</Button></Col>
            <Col><Button variant="outline-light" size="lg" style={{width: "100%"}}>TOP SELLER</Button></Col>
            <Col><Button variant="outline-light" size="lg" style={{width: "100%"}}>BUNDLE GAMES</Button></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
