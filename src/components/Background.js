import React, { Component } from 'react'
import Particles from 'react-particles-js';

export default class Background extends Component {
    render() {
        return (
            <div>
               <Particles className="background" params={
                    {
                        "particles": {
                            "number": {
                                "value": 50,
                                "density": {
                                    "enable": true,
                                    "value_area": 789.1476416322727
                                }
                            },
                            "color": {
                                "value": "#223848"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    "width": 100,
                                    "height": 100
                                }
                            },
                            "opacity": {
                                "value": 0.665416005259192,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 0,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "enable": true,
                                    "speed": 0,
                                    "size_min": 23.550239156739007,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": "#3e8989",
                                "opacity": 0.20844356791251797,
                                "width": 0.8017060304327615
                            },
                            "move": {
                                "enable": true,
                                "speed": 3.206824121731046,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "window",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true
                    }
                } /> 
            </div>
        )
    }
}
