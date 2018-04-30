import React, { Component } from 'react';

class Feature extends Component {
    render() {
        return (
            <div>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">Feature heading 1 <span className="text-muted">Some text</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" src="https://images.pexels.com/photos/34753/pexels-photo.jpg" alt="Map image" />
                    </div>
                </div>

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Feature heading 2 <span className="text-muted">More text</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="featurette-image img-fluid mx-auto" src="https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg" alt="Generic placeholder image" />
                    </div>
                    </div>
                </div>
                );
            }
        }
        
        
export default Feature;