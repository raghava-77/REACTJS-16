import React, { Component } from 'react'

export class Image extends Component {
    constructor(props){
        super(props)
        this.state={
            car: false,
            bike: false,
            laptop: false,
            img1:"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349",
            img2:" https://m.media-amazon.com/images/I/810R660dqjL._AC_SS450_.jpg",
            img3:"https://rukminim1.flixcart.com/image/416/416/kctf0cw0/computer/j/n/a/hp-na-thin-and-light-laptop-original-imaftv7fxtmzhkw3.jpeg?q=70",
          }
          }
    updateInput = (event) => {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.checked,
        });
      };
    render() {
        return (
            <React.Fragment>
              <div className="container mt-4">
                <div className="row">
                  <div className="col-md-8">
                    <div className="card"></div>
                    <div className="card-header bg-success">
                      <h4> DISPLAY THE IMAGE </h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-check">
                            <input type="checkbox" value="" className="form-check-input" onChange={this.updateInput} name="car"
                            />
                            <label className="form-check-label">car</label>
                          </div>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              value=""
                              onChange={this.updateInput}
                              className="form-check-input"
                              name="bike"
                            />
                            <label className="form-check-label">bike</label>
                          </div>
                          <div className="form-check">
                            <input
                              type="checkbox"
                              value=""
                              onChange={this.updateInput}
                              className="form-check-input"
                              name="laptop"
                            />
                            <label className="form-check-label">laptop</label>
                          </div>
                        </div>
                        <div className="col-md-8">
                          {this.state.car ? (
                            <React.Fragment>
                              <div className="card">
                                <div className="card-body">
                                <div className="card-header"><img src={this.state.img1} /> </div>                               
                                  </div>
                              </div>
                            </React.Fragment>
                          ) : null}
                          {this.state.bike ? (
                            <React.Fragment>
                              <div className="card">
                                <div className="card-body">
                                <img src={this.state.img2} /> 
                                  
                                </div>
                              </div>
                            </React.Fragment>
                          ) : null}
      
                          {this.state.laptop ? (
                            <React.Fragment>
                              <div className="card">
                                <div className="card-body">
                                <img src={this.state.img3} /> 
                                </div>
                              </div>
                            </React.Fragment>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
      }
         
    
}

export default Image
