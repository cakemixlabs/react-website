import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <p className="float-right"><a href="#">Back to top</a></p>
                    <p>&copy; 2018 Cakemix Labs &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                </footer>
            </div>
        );
    }
}


export default Footer;