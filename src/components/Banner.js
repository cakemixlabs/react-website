import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h1 className="display-4">Artificial intelligence for location</h1>
                <p className="lead">Solving complex spatial problems</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        );
    }
}


export default Banner;