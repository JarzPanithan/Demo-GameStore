import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

class ControlledCarousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            direction: null
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const {index, direction} = this.state;
        return(
            <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} fade={true}>
            <Carousel.Item>
              <img className="d-block w-100" src="https://hb.imgix.net/74e8d7c2ec7dde490abf64d54f9828fa073ae4e3.jpg?auto=compress,format&fit=crop&h=353&w=616&s=6b9af392df9564413a51c35a14a3c6d1" 
                alt="First slide" style={{height: 600}}/>
              <Carousel.Caption>
                <h3>Assassin's Creed Odyssey</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://hb.imgix.net/f99fae7c6bcdf3621cec7248d34668dc047c1586.jpg?auto=compress,format&fit=crop&h=353&w=616&s=5a2470de8d830ad1d364d9288deebeee"
                alt="Second slide" style={{height: 600}}/>
              <Carousel.Caption>
                <h3>Just Cause 4</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://hb.imgix.net/13fe894e113bc79728638e64f76c612ba3cc9c1e.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=b5121f50d82cd6745ad33e7909415bdd"
                alt="Third slide" style={{height: 600}}/>
              <Carousel.Caption>
                <h3>Resident Evil 2 Remake</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://hb.imgix.net/73b854a6c097c499edebf21702498686a2c2c219.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=128134e324ec8dca30e186c11cd89915"
                  alt="Forth Slide" style={{height: 600}}/>
                <Carousel.Caption>
                    <h3>Devil May Cry 5</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
    }
}

export default ControlledCarousel;
