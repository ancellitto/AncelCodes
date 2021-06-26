import React, { Component } from 'react'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Ancel Litto',
            items: [{
                name: 'Mastery',
                icon: 'fas fa-magic'
            },{
                name: 'Expertise',
                icon: 'fas fa-book-open'
            },{
                name: 'Experience',
                icon: 'fas fa-briefcase'
            },{
                name: 'Education',
                icon: 'fas fa-graduation-cap'
            }]
        }
    }
    renderNavItem = (item) => {
        return (
            //    <a className="nav-item nav-link " href={"#" + item.toString().toLowerCase()} >{item} </a>
            <a class="nav-link" href={"#" + item.name.toString().toLowerCase()}><i class={item.icon}/> <span class="d-none d-md-inline">{" "+item.name}</span></a>
        );
    }

    render() {
        return (
            <aside className="col-12 col-md-2 p-0 bg-light sticky-top" >
                <nav className=" navbar navbar-expand navbar-light bg-light flex-row flex-md-column   justify-content-around" >
                    <a className="navbar-brand" href="#home"><i class="fab fa-connectdevelop"></i> <span>{this.state.name}</span></a>
                    <div className="navbar-nav flex-row flex-md-column" >
                        {this.state.items.map(this.renderNavItem)}
                    </div>
                </nav>
            </aside>
        )
    }
}
export default Navbar
