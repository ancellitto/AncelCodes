import React, { Component } from 'react'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Ancel Litto',
            items: [{
                name: 'Mastery',
                icon: 'fas fa-magic'
            }, {
                name: 'Expertise',
                icon: 'fas fa-book-open'
            }, {
                name: 'Experience',
                icon: 'fas fa-briefcase'
            }, {
                name: 'Education',
                icon: 'fas fa-graduation-cap'
            }]
        }
    }
    renderNavItem = (item) => {
        return (
            <a className="nav-link" key={item.name} href={"#" + item.name.toString().toLowerCase()}>
                <i className={item.icon} />
                <span className="d-none d-md-inline">{" " + item.name}</span>
            </a>
        );
    }

    render() {
        return (
            <aside className="aside col-12 col-md-2 p-0  sticky-top blurred-box" >
                <nav className=" navbar navbar-expand navbar-dark flex-row flex-md-column   justify-content-around" >
                    <a className="navbar-brand" href="#home"><i className="fab fa-connectdevelop"></i> <span>{this.state.name}</span></a>
                    <div className="navbar-nav flex-row flex-md-column" >
                        {this.state.items.map(this.renderNavItem)}
                        <a className="nav-link" href="./resources/AncelResume.pdf" target="_blank">
                            <i className="fas fa-download accent2" />
                            <span className="d-none d-md-inline">{" Resume"}</span>
                        </a>
                    </div>
                </nav>
            </aside >
        )
    }
}
export default Navbar
