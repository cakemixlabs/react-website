import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Solving complex spatial problems</h1>
                <p className="lead">Cakemix Labs</p>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        );
    }
}


export default Banner;