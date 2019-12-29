import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className = "container">
                <div className = "row">
                    <div className = "col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h3 className = "display-3">404</h3>
                        <h3>page not found</h3>
                        <h3>The requested URL <span className = "text-danger">
                            {this.props.location.pathname}
                            </span> is not authorized by Jeff Mormah</h3>
                    </div>
                </div>
            </div>
        )
    }
}
