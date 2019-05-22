import React, {Component} from 'react';
import '../Main.css';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';
import {MDBAnimation, MDBBtn, MDBIcon, MDBProgress} from 'mdbreact';
import {Badge} from 'reactstrap';
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
                                <Card.Img variant="top" src="https://hb.imgix.net/4221fa767125ab6c6f892065579bb76121809d65.jpg?auto=compress,format&fit=crop&h=353&w=616&s=d50610572db666f1cc36049ba7885af5"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>SHADOW OF TOMB RAIDER</Card.Title>
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
                                <Card.Img variant="top" src="https://hb.imgix.net/d0ade5eab341879ee1134cf893e0f2e6a3b6568d.jpg?auto=compress,format&fit=crop&h=353&w=616&s=12cd400121a737bc4504387680770b5c"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Toukiden: Kiwami</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/3c28372ff9df9f78c5deb5bb6db42436a11e8b8b.png?auto=compress,format&fit=crop&h=353&w=616&s=16761debe1547508c3f3c74eb54f2caf"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 12}}>Far Cry® 5 Gold Edition + Far Cry® New Dawn Deluxe Edition</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$129.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/96be8e4235092986f994f964c9259f53ceb5e76e.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=7e2677989b47e0212947e075a45bb547"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Surviving Mars Green Planet</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$19.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row style={{marginTop: 40}}>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/eb53ad3dea5946b4d8fea1313e24ca602daf17b8.jpg?auto=compress,format&fit=crop&h=353&w=616&s=b475999add024b1026b1fa9477e3c57d"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>DARK SOULS™ III</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/f15983a75135cf7366f3df28989ed18fb7c7d431.jpg?auto=compress,format&fit=crop&h=353&w=616&s=8557f46b45d8343a5d4a6c29c56b26a8"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>ARK: Survival Evolved</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$49.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/d4933b53e29e4f277f41b992f5566fd6f75575b8.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=f8940727f7be0f1cebda1c1ce765f0a3"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>ATLAS</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$29.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/9957fb0b043159dfcd1bbf20ed748411985b9df8.jpg?auto=compress,format&fit=crop&h=353&w=616&s=d848a1b14e7fc2141ed5d58c1601c048"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Conan Exiles</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$39.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row style={{marginTop: 40}}>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/50a82970908fc39d41ab85b58e7cd629ef7293b9.png?auto=compress,format&fit=crop&h=353&w=616&s=cbcf64074ff2d1908525d6cacdac48f2"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>The Evil Within™ 2</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/6e0fa8a542605271d248d3866b4a3e07e3a3e157.jpg?auto=compress,format&fit=crop&h=353&w=616&s=4d7f021efa5bc5a65b1a7f6b5f3e125f"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Resident Evil® 7 Gold Edition</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 10}}><Badge color="success" style={{marginRight: 5}}>-50%</Badge><b><strike>$50.38</strike></b></h5>
                                            <h5 style={{color: "green"}}><b>$25.19</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/f1145f13ff162ad7fdc206fed0822f68bc1b5359.jpg?auto=compress,format&fit=crop&h=353&w=616&s=25d6483201bd16f973a83ced32a796ad"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>DOOM®</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 10}}><Badge color="success" style={{marginRight: 5}}>-50%</Badge><b><strike>$19.99</strike></b></h5>  
                                            <h5 style={{color: "green"}}><b>$14.99</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/670effa4256a6d0c53335de9da574d17165b92e8.jpg?auto=compress,format&fit=crop&h=353&w=616&s=56ea99736c4323c566d0e763d0bc8aeb"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>TEKKEN 7</Card.Title>
                                    <h5 style={{color: "red", marginLeft: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row style={{marginTop: 40}}>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/c3273bccbef4299601b2b8dedd0090273f891aa7.jpg?auto=compress,format&fit=crop&h=353&w=616&s=8df45642df92a9a07e5b8359fe957a5c"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 15}}>Resident Evil: Revelations 2 Deluxe Edition</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 10}}><Badge color="success" style={{marginRight: 5}}>-50%</Badge><b><strike>$29.99</strike></b></h5>
                                            <h5 style={{color: "green"}}><b>$14.99</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/f055efc923c59db1be574f6e13fca65146c5b680.jpg?auto=compress,format&fit=crop&h=353&w=616&s=a40e549588d2d2676460ea69640ac073"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Prey Deluxe Edition</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 10}}><Badge color="success" style={{marginRight: 5}}>-40%</Badge><b><strike>$39.99</strike></b></h5>
                                            <h5 style={{color: "green"}}><b>$23.99</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/9dbd1657957505b23be97c5cc8c89bad28afbbc6.jpg?auto=compress,format&fit=crop&h=353&w=616&s=adfab3c6dbfbfb56a27c0ac47be5da73"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Bayonetta</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 10}}><Badge color="success" style={{marginRight: 5}}>-50%</Badge><b><strike>$19.99</strike></b></h5>  
                                            <h5 style={{color: "green"}}><b>$4.99</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/ff971df5f5c551592aa0ecada5523b75bf886be0.jpg?auto=compress,format&fit=crop&h=353&w=616&s=a0234ba6460b2164dad329862bcc8f90"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Resident Evil 5 Gold Edition</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 10}}><Badge color="success" style={{marginRight: 5}}>-75%</Badge><b><strike>$29.99</strike></b></h5>
                                            <h5 style={{color: "green"}}><b>$7.49</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="card-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row style={{marginTop: 40}}>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/243d07430eb62e57d4e21c84aa13d76cd939a3d9.jpg?auto=compress,format&fit=crop&h=353&w=616&s=fb3a84aba864b8569fb9faea74770145"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Just Cause™ 3</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-85%</Badge><b><strike>19.99$</strike></b></h5>
                                            <h5 style={{color: "green"}}><b>$2.99</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/fe6837e1bdeb0e8de7e1db7f2b6ca8c9a9451c67.jpg?auto=compress,format&fit=crop&h=353&w=616&s=3b208998e1c0c196fa4100f130bccfa8"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Friday the 13th: The Game</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>39.99$</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/13b677b1fa9c49ef47762646c76653d56b5c144f.jpg?auto=compress,format&fit=crop&h=353&w=616&s=8d904bfd988a9daed45a8c7bc96ba5e3"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 16}}>Watch_Dogs® 2</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-85%</Badge><b><strike>59.99$</strike></b></h5>
                                            <h5 style={{color: "green"}}><b>$8.99</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/9ebbf69d62ca7e3879300556b30e6e041bf8b57c.jpg?auto=compress,format&fit=crop&h=353&w=616&s=ae96a86a37dd3f31c75e373c854e32ba"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13}}>Wolfenstein® II: The New Colossus™</Card.Title>
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
                    </Row>
                </Container>
                <Container>
                    <Row style={{marginTop: 40}}>
                        <Col>
                            <Card style={{width: "15rem", height: "17.5rem"}}>
                                <Card.Img variant="top" src="https://hb.imgix.net/45324b17e971dec79e795a607392b846842864cd.jpg?auto=compress,format&fit=crop&h=353&w=616&s=1ac55731606073f17fa396bb6a76a008"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 15}}>DRAGON BALL XENOVERSE 2</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-75%</Badge><b><strike>49.99$</strike></b></h5>
                                            <h5 style={{color: "green"}}><b>$12.49</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/db6b9ae4c6364c5ad6f618224ea20246da628d6b.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=24c3305254a31cedd737589ab2c55739"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 15}}>Shadow Warrior 2</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$39.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/e9a2cda7c5314541d4ca7d55d88280d57282cac8.jpg?auto=compress,format&fit=crop&h=353&w=616&s=42b6f96578adb9bd93805ed4050e6958"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 15}}>GOD EATER 2 Rage Burst</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-75%</Badge><b><strike>$49.99</strike></b></h5>
                                            <h5 style={{color: "green"}}><b>$12.49</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/c27490bc85f7191fa7a837f5a6ab6d0de63b5309.jpg?auto=compress,format&fit=crop&h=353&w=616&s=6edcc6011353f59f7e9f71418fccd20d"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>Kingdom Come: Deliverance Collection</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-30%</Badge><b><strike>$61.15</strike></b></h5>
                                            <h5 style={{color: "green"}}><b>$42.80</b></h5>
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
                            <Card.Img variant="top" src="https://hb.imgix.net/5265a7438b6b627fccede8eb9b420af3e58c3b3e.jpg?auto=compress,format&fit=crop&h=353&w=616&s=e35ed7f95f7fe331df3abce2221d4082"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>Shadow Warriors 2</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$49.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/955975216e9dd9c6891806798e3bbfca184f3eaa.jpg?auto=compress,format&fit=crop&h=353&w=616&s=57c8f32a439faa456ebe7312c56a02b4"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>For Honor</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$39.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/4817793a4611f48dae98d819c0940f0047956291.jpg?auto=compress,format&fit=crop&h=353&w=616&s=723c6d4386846dc6dfc5fba499e34ca0"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>Call of Duty®: Infinite Warfare</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-60%</Badge><b><strike>$59.99</strike></b></h5>
                                            <h5 style={{color: "green"}}><b>$23.99</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/b81ecd9d5ab390b1fd8d2c11d1513a70df93aca1.jpg?auto=compress,format&fit=crop&h=353&w=616&s=0d1328dfa48ef7bf29b5a612451aeba2"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>Planet Coaster</Card.Title>
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
                            <Card.Img variant="top" src="https://hb.imgix.net/c9f88b5b77df50f4d1428d44e130138ee7b22d69.jpg?auto=compress,format&fit=crop&h=353&w=616&s=29c789aaa8d005bed23b5480468c50e9"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>Stardew Valley</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$23.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/e943c44cd7450c91ee9a4af3ba81333bb080e6a3.jpg?auto=compress,format&fit=crop&h=353&w=616&s=1b6694c3771d36f8ff9d5de282a942ea"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>XCOM® 2</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/0ae5beab7bab769a8c9a3bb2a0d46453a6a2c852.jpg?auto=compress,format&fit=crop&h=353&w=616&s=4d9a704ebd826719bf29ade9e30b510c"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>XCCOM: Enemy Unknown</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$29.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/dd2b96006d094f68b1127e330d0aa3dbc0532ac5.jpg?auto=compress,format&fit=crop&h=353&w=616&s=13e1651f029d39abb5e5ee6708b165a3"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>BATTLETECH - Digital Deluxe Content</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$12.99</b></h5>
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
                            <Card.Img variant="top" src="https://hb.imgix.net/2d030830460400b88d5337470fc99833e474dd76.jpg?auto=compress,format&fit=crop&h=353&w=616&s=8fd3958694f432fa9ae9186535187f8b"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>Assassin's Creed Syndicate</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/84acea4f0b20eb65ddde3168280c1fdc5a2211d2.jpg?auto=compress,format&fit=crop&h=353&w=616&s=e00273cf74779765e576efcc80eb8b96"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>Torchlight 2</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-50%</Badge><b><strike>$14.99</strike></b></h5>
                                            <h5 style={{color: "green"}}><b>$7.49</b></h5>
                                        </Row>
                                    </Col>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/83b13658f32fedd861793cb756f265895c63ec92.jpg?auto=compress,format&fit=crop&h=353&w=616&s=77db2bed93ba9bf04a052365c6f21ffc"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>Vampyr</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$49.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/df62a4af2d69fc59a6aab9285f1f44fc301b92f0.jpg?auto=compress,format&fit=crop&h=353&w=616&s=42a6c2b1e1f274df8475c34473aee9c8"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>Elite Dangerous</Card.Title>
                                    <Col>
                                        <Row>
                                            <h5 style={{color: "red", marginRight: 5}}><Badge color="success" style={{marginRight: 5}}>-55%</Badge><b><strike>$29.99</strike></b></h5>
                                            <h5 style={{color: "green"}}><b>$29.99</b></h5>
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
                            <Card.Img variant="top" src="https://hb.imgix.net/dc9c0c19dac282ff21a8fa68175a82f740fd5007.jpg?auto=compress,format&fit=crop&h=353&w=616&s=71063e2a04f36b690522113f9408dc22"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>Warhammer: Vermintide 2</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$29.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/5cff89342e7f4521dc3f5bc5d0455eb6a52a5370.jpg?auto=compress,format&fit=crop&h=353&w=616&s=732d41bb71f22a0e0130784868344dc4"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>The Witcher® 3: Wild Hunt GAME OF THE YEAR EDITION</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$59.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/d9f94c2f6b2347dcc7872a7348c8d30f95023a88.jpg?auto=compress,format&fit=crop&h=353&w=616&s=ea58b4a4a52c7b64cc96f214b5fcfcea"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>Watch_Dogs™ Complete Edition</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$49.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col>
                        <Card style={{width: "15rem", height: "17.5rem"}}>
                            <Card.Img variant="top" src="https://hb.imgix.net/47cac6de93212af59a7d2259c6016af1ddb9f25b.jpg?auto=compress,format&fit=crop&h=353&w=616&s=46affb7896de9b164353dce58c6662b7"/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: 13.5}}>Assassin's Creed IV: Black Flag</Card.Title>
                                    <h5 style={{color: "red", marginRight: 5}}><b>$19.99</b></h5>
                                    <Button variant="dark" size="sm"><MDBIcon icon="cart-arrow-down"/> Add to Basket</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Container style={{marginTop: "7rem"}}>
                <Row>
                    <Col>
                        <MDBBtn rounded color="light" className="storeButton" href="store-page=1">←</MDBBtn>
                        <MDBBtn rounded color="light" className="storeButton" href="store-page=1">1</MDBBtn>
                        <MDBBtn active disabled rounded color="light" className="storeButton" href="store-page=2">2</MDBBtn>
                        <MDBBtn rounded color="light" className="storeButton" href="store-page=3">3</MDBBtn>
                        <MDBBtn rounded color="light" className="storeButton">4</MDBBtn>
                        <MDBBtn rounded color="light" className="storeButton">5</MDBBtn>
                        <MDBBtn rounded color="light" className="storeButton" href="store-page=3">→</MDBBtn>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default App;
