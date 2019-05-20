import React, {Component} from 'react';
import '../Main.css';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import {Badge} from 'reactstrap';
import {MDBAnimation, MDBBtn, MDBIcon, MDBProgress} from 'mdbreact';
import Toolbar from '../../Components/Toolbar';
import Tabs from '../../Components/Tabs';
import Footer from '../../Components/Footer';

class App extends Component {
    render(){
        return(
            <div className="App">
                <Toolbar/>
                <Tabs/>
                <Store/>
                <Footer/>
            </div>
        );
    }
}

class Store extends Component {
    render(){
        return(
            <div className="App">
                <Container style={{marginTop: 40}}>
                    <MDBAnimation type="bounce">
                        <h1 className="storeTitle">STORE</h1> 
                    </MDBAnimation>
                    <MDBProgress className="my-2" material value={100} color="danger"/>  
                </Container>
                <Container>
                    <Row style={{marginTop: 40}}>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/0ea149c34b6643612ec42c60a654b734c7b8e796.jpg?auto=compress,format&fit=crop&h=353&w=616&s=1822ce9ef81014549ab9ae67652fb354"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Call of Duty®: Black Ops 4</Card.Title>
                                    <h5 style={{color: "red"}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/0691cd1148494cce1387283912f3be3486be1823.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=e594fdf5a69968139bdfc6e723bd3487"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 15}}>Total War: THREE KINGDOMS</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/4168150c3e8435d746e6d8c87666dea3086f6f29.jpg?auto=compress,format&fit=crop&h=353&w=616&s=3479a59da33cb63f2bd81abfaf370556"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 15}}>Wolfenstein®: Youngblood™</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$39.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/dafa2d44d23de0947ce5a770949310f1bc8db082.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=4cc9ea2ce63dbf816706e7d3b121e0cd"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>Vampire: The Masquerade® - Bloodlines™ 2</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$59.99</b></h5>
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
                            <Card.Img variant="top" src="https://hb.imgix.net/52e6ffd76e037ef7e4ee10a6a681b827b98a8c5a.jpg?auto=compress,format&fit=crop&h=353&w=616&s=883f103c42db9ea9c26a0000c37e3185"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 15}}>RAGE 2</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/eb1226b70c3f37fb68fc757bf12a152d2d5973e4.jpg?auto=compress,format&fit=crop&h=353&w=616&s=fc5eceab39114ae2a73603aac2908909"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>The Crew™ 2 - Gold Edition</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-75%</Badge><b><strike>99.99$</strike></b></h5>
                                            <h5 style={{color: "green"}}><b>$29.99</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/1f9a6379f7e3efd29c76b31420790c8acfec9564.jpg?auto=compress,format&fit=crop&h=353&w=616&s=4b5243afc6b82924bb04025a3fbcbcbe"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Call of Duty®: WWII</Card.Title>
                                    <h5 style={{color: "red"}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/4b07930b52ec058305bf9d60c653b1f9a9db361f.jpg?auto=compress,format&fit=crop&h=353&w=616&s=812305840b086a0f635a84b5e75c3da8"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>The Crew™ 2 - Gold Edition</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-67%</Badge><b><strike>89.99$</strike></b></h5>
                                            <h5 style={{color: "green"}}><b>$29.69</b></h5>
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
                                <Card.Img variant="top" src="https://hb.imgix.net/74e8d7c2ec7dde490abf64d54f9828fa073ae4e3.jpg?auto=compress,format&fit=crop&h=353&w=616&s=6b9af392df9564413a51c35a14a3c6d1"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Assassin's Creed Odyssey</Card.Title>
                                <Col>
                                    <Row>
                                        <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-50%</Badge><b><strike>59.99$</strike></b></h5>
                                        <h5 style={{color: "green"}}><b>$29.99</b></h5>
                                    </Row>
                                </Col>
                                <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>    
                                </Card.Body>
                            </Card>
                       </Col>
                       <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/fd21e27cf43b4d716cb834c4b854e476badc0530.jpg?auto=compress,format&fit=crop&h=353&w=616&s=eed29a3ca4710a6236a11cb3c5ee562c"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Assassin's Creed Origins</Card.Title>
                                <Col>
                                    <Row>
                                        <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-70%</Badge><b><strike>59.99$</strike></b></h5>
                                        <h5 style={{color: "green"}}><b>$17.99</b></h5>
                                    </Row>
                                </Col>
                                <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>    
                                </Card.Body>
                            </Card>
                       </Col>
                       <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/523b868fb7a6f2df32aff5a759125b0277e84c3b.jpg?auto=compress,format&fit=crop&h=353&w=616&s=d67213e8614b477d9e632340d35fc60e"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Forager</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$19.99</b></h5>
                                <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>    
                                </Card.Body>
                            </Card>
                       </Col>
                       <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/128e6258434d37fd81f79a2d03c00dae10ace5e3.jpg?auto=compress,format&fit=crop&h=353&w=616&s=0ffb25ae99986d7ad2d5e51795c78076"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Dying Light</Card.Title>
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
                    </Row>
                </Container>
                <Container>
                    <Row style={{marginTop: 40}}>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/29fe72d3a03acda1ddff1c3f2a9d791a0cb047ed.jpg?auto=compress,format&fit=crop&h=353&w=616&s=00724527761e1de21d98b91f88aaa207"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 14}}>Total War™: WARHAMMER® II</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>  
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/d5f290c27cc5f1fca9f6340508ba2488b2c07958.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=d54c9e50423c086421970a0edae71024"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 14}}>Monster Hunter World</Card.Title>
                                <Col>
                                    <Row>
                                        <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-50%</Badge><b><strike>59.99$</strike></b></h5>
                                        <h5 style={{color: "green"}}><b>$29.99</b></h5>
                                    </Row>
                                </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>  
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/85655dca0526df525d0f3f3b5e0a336f224e0571.jpg?auto=compress,format&fit=crop&h=353&w=616&s=c344b5b9d7f7a45afbe3090f994e48d4"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13}}>FINAL FANTASY® XV WINDOWS EDITION</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$49.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>  
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/91a08dbeacf7d222786bced45aaa037d4b968a43.jpg?auto=compress,format&fit=crop&h=353&w=616&s=2f29970b29fcb1a2e22e35d4752fab5e"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 14}}>Total War™: WARHAMMER®</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$59.99</b></h5>
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
                                <Card.Img variant="top" src="https://hb.imgix.net/3137172859b833ff2b6e616b5206ef72cc54da0b.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=b14df627cd29b9fc9e5f579d2192807c"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 14}}>WARRIORS OROCHI 4 - 無双OROCHI３</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/41e12784fbe401ae7837627c6c12cc99b27cf6c7.jpg?auto=compress,format&fit=crop&h=353&w=616&s=552460c1ae777c82a2ac03bc51590613"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>METAL GEAR SURVIVE</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/17f420c0b297519d0f4bdbe7d9366cddcebd1e57.jpg?auto=compress,format&fit=crop&h=353&w=616&s=817d791d8e6739a48f76bc2a36b24142"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Fallout 76</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/21b800742a89b7d93166aa5b4b3bdfc2ce6138fc.jpg?auto=compress,format&fit=crop&h=353&w=616&s=07647ff0c2507b699717dc3a1ed42218"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Catherine Classic</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$19.99</b></h5>
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
                                <Card.Img variant="top" src="https://hb.imgix.net/73b854a6c097c499edebf21702498686a2c2c219.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=128134e324ec8dca30e186c11cd89915"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Devil May Cry 5</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/b81f91e0f16093443eef143117ab47175aaabcc6.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=20c91cfe049fdd22349721d0dea8750b"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>GOD EATER 3</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-33%</Badge><b><strike>$59.99</strike></b></h5>
                                            <h5 style={{color: "green", marginLeft: 5}}><b>$40.19</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/52a2725ec445cad42f9c4a937523336fa9dc5291.jpg?auto=compress,format&fit=crop&h=353&w=616&s=ef295048ed1f189ff28d3c650b02e736"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Grand Theft Auto V</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/3b3480186dde97669d7f2f5df40b2d1e2d779717.jpg?auto=compress,format&fit=crop&h=353&w=616&s=7dfd6243206ec265835018c450c8dca4"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>The Surge</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$29.99</b></h5>
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
                                <Card.Img variant="top" src="https://hb.imgix.net/8845b1a174e592a26b40963bcadae934d7135605.jpg?auto=compress,format&fit=crop&h=353&w=616&s=7994c9ebee8cdc3f5186c8209a622214"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 14}}>ONE PIECE PIRATE WARRIORS 3 Gold Edition</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-75%</Badge><b><strike>$51.98</strike></b></h5>
                                            <h5 style={{color: "green", marginLeft: 5}}><b>$12.99</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/88d8463a1c86ec134fbfb00c9abe90ffc9f33f54.jpg?auto=compress,format&fit=crop&h=353&w=616&s=db7c83072177491c2341c5cea20c7754"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 14}}>NieR:Automata™ Game of the YoRHa Edition</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$39.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/895e86475257ba55c931b4ed7999c1bf88a1a0fb.jpg?auto=compress,format&fit=crop&h=353&w=616&s=6d6b8f0c3a228b0ba813501926b5f99f"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Ni no Kuni™ II: Revenant Kingdom</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-66%</Badge><b><strike>$59.99</strike></b></h5>
                                            <h5 style={{color: "green", marginLeft: 5}}><b>$20.39</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/2a470e47529df9a836ec290787b91894aad0c7ce.png?auto=compress,format&fit=crop&h=353&w=616&s=66d9dc3ba4fdad4e1f7f66df89bc7312"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Metro: Exodus</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$59.99</b></h5>
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
                                <Card.Img variant="top" src="https://hb.imgix.net/1372546e61e5fe2d61dcfa149e36eeff8725b311.jpg?auto=compress,format&fit=crop&h=353&w=616&s=14a7cec31734dc69c7766fa4dff8857d"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 14}}>Rise of the Tomb Raider: 20 Year Celebration</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/13fe894e113bc79728638e64f76c612ba3cc9c1e.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=b5121f50d82cd6745ad33e7909415bdd"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Resident Evil 2 Remake</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/fb8f558710ae46d03d1aa274af18442284082f38.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=3c49107d25a54f06c71ef9f4e05be7f6"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 15}}>Thronebreaker: The Witcher Tales</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$29.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/0ac6d58d7e490ba286804d8ec5834bfc69d8792c.jpg?auto=compress,format&fit=crop&h=353&w=616&s=a698ca7f47077bb2ed4eef1bf6b1b8a6"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 14}}>Hyperdimension Neptunia Re;Birth3 V Generation</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-70%</Badge><b><strike>$24.99</strike></b></h5>
                                            <h5 style={{color: "green", marginLeft: 5}}><b>$7.49</b></h5>
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
                                <Card.Img variant="top" src="https://hb.imgix.net/59941491777be52e88f29742c62822ef3e430b2d.jpg?auto=compress,format&fit=crop&h=353&w=616&s=9c3796f04eefbedb32de72217d0a3915"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 14}}>Megadimension Neptunia VII Digital Complete Set</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-63%</Badge><b><strike>$66.46</strike></b></h5>
                                            <h5 style={{color: "green", marginLeft: 5}}><b>$24.59</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/1900c9edc81b5756ac0d87d9d8b1a735e8d14606.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=0263b49ec578ab2055a09b404af94eeb"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>MY HERO ONE'S JUSTICE</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-50%</Badge><b><strike>$59.99</strike></b></h5>
                                            <h5 style={{color: "green", marginLeft: 5}}><b>$29.99</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/1acde753c7e25284b03426598b3763d2b1967eb6.jpg?auto=compress,format&fit=crop&h=353&w=616&s=6c40dd721a6cb2f18dbe441504fe904b"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Tales of Berseria™</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-75%</Badge><b><strike>$49.99</strike></b></h5>
                                            <h5 style={{color: "green", marginLeft: 5}}><b>$12.49</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/d65f4d5afc918ec9af5a0e6a69c769c9ef5469da.jpg?auto=compress,format&fit=crop&h=353&w=616&s=73b7b0dc878fff9f8f8986a104454ec7"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Tales of Zestiria™</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-50%</Badge><b><strike>$49.99</strike></b></h5>
                                            <h5 style={{color: "green", marginLeft: 5}}><b>$24.99</b></h5>
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
                                <Card.Img variant="top" src="https://hb.imgix.net/d228d58fdfaae1b7963a481b5e0807406c8029c4.jpg?auto=compress,format&fit=crop&h=353&w=616&s=c6adf7d740d7e06ce010f74e24a45342"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Squad</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-30%</Badge><b><strike>$39.99</strike></b></h5>
                                            <h5 style={{color: "green", marginLeft: 5}}><b>$27.99</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/80f4e098487310c91162f452423cb9f40de30cd6.jpg?auto=compress,format&fit=crop&h=353&w=616&s=fc4fe0110efa0de0968da599bc3b2452"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 15}}>Dishonored®: Death of the Outsider</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$29.99</b></h5>
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
                                <Card.Img variant="top" src="https://hb.imgix.net/41e5729eb856fcfb494bd73568ca3f5bb602b1a3.jpg?auto=compress,format&fit=crop&h=353&w=616&s=bb6c17d3df16f41716badfff576f75f4"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 14}}>SOULCALIBUR VI Deluxe Edition</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-40%</Badge><b><strike>$89.99</strike></b></h5>
                                            <h5 style={{color: "green", marginLeft: 5}}><b>$53.99</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container style={{marginTop: "7rem"}}>
                    <Row>
                        <Col>
                            <MDBBtn active disabled rounded color="light" className="storeButton" href="store-page=1">1</MDBBtn>
                            <MDBBtn rounded color="light" className="storeButton" href="store-page=2">2</MDBBtn>
                            <MDBBtn rounded color="light" className="storeButton">3</MDBBtn>
                            <MDBBtn rounded color="light" className="storeButton">4</MDBBtn>
                            <MDBBtn rounded color="light" className="storeButton">5</MDBBtn>
                            <MDBBtn rounded color="light" className="storeButton" href="store-page=2">→</MDBBtn>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
