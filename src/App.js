import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Typist from 'react-typist';

import Background from './components/Background';
import java from './images/logos/java.png'
import spring from './images/logos/spring.png'
import kubernetes from './images/logos/kubernetes.png'
import openshift from './images/logos/openshift.png'
import vaadin from './images/logos/vaadin.png'
import gwt from './images/logos/gwt.png'
import git from './images/logos/git.png'
import aws from './images/logos/aws.png'
import docker from './images/logos/docker.png'
import react from './images/logos/react.png'
import angular from './images/logos/angular.png'
import polymer from './images/logos/polymer.png'
import bootstrap from './images/logos/bootstrap.png'
import jenkins from './images/logos/jenkins.png'
import jira from './images/logos/jira.png'

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

class App extends React.Component {
    state = {
        renderMsg: false,
    }

    onHeaderTyped = () => {
        this.setState({ renderMsg: true });

    }
    componentDidMount() {
        const TagCloud = require('TagCloud');
        const myTags = [
            'java', 'spring', 'spring-boot', 'netflix eureka', 'netflix zuul', 'swagger', 'mongodb', 'oracle 11g', 'jsf', 'graphql', 'jetty', 'weblogic', 'redis', 'hibernate',
            'kubernetes', 'apache camel', 'query dsl', 'openshift', 'docker',
            'aws', 'react', 'angular', 'ngrx', 'rxjs',
            'jenkins', 'jira', 'polymer',
        ];
        TagCloud('.mastery-logos', myTags, {
            // radius in px
            radius: 350,
            // animation speed
            // slow, normal, fast
            maxSpeed: 'normal',
            initSpeed: 'normal',
            // 0 = top
            // 90 = left
            // 135 = right-bottom
            // interact with cursor move on mouse out
            keep: true
        });
    }

    render() {
        return (

            <div className="container-fluid">
                <Background/>
                <header className=" header min-vh-100 d-flex align-items-center flex-column justify-content-center text-center " id="home">

                    <Typist
                        avgTypingDelay={100}
                        onTypingDone={this.onHeaderTyped}
                        className="typing-header"
                    >
                        <span className="display-1">
                            Hi!&nbsp; 
                            <Typist.Delay ms={600} />
                          Nice to meet you&nbsp;
                        <Typist.Delay ms={600} />
                        <span className="accent1">:)</span>
                        <Typist.Backspace count={24} delay={1000} />
                             I'm&nbsp;<span className="accent1">Ancel Litto</span>
                        <Typist.Backspace count={15} delay={1000} />
                       I'm a&nbsp;
                        <Typist.Delay ms={600} />
                        <span className="accent1">Polyglot Pragmatic Developer</span></span>
                    </Typist>
                        <div className={`h3 ${this.state.renderMsg ? "fadeIn" : "fadeOut"}`}>
                            My primary area of interest is in back-end and front-end technologies. With over 8 years of experience,
                            I have architectured and built complex enterprise grade applications. I am passionate about coding and learning new technologies. 
                            I have the most experience in the below skills  
                            <p className="accent2">
                                Java | Spring | Spring Boot | Microservice | Kubernetes | Angular
                            </p>
                            <br />
                            <p className={`h3`}>
                             You can read about my skills, experience, education and much much more below or <a className="download accent2" href="./resources/AncelResume.pdf" target="_blank">download</a> it
                             </p>
                             <br/>
                            <div className="contacts">
                                <a href="mailto:contact@ancel.codes" className="social-link far fa-envelope " target="_blank" rel="noopener noreferrer" alt="email" ></a>
                                <a href="https://www.linkedin.com/in/ancellitto" className="social-link fab fa-linkedin " target="_blank" rel="noopener noreferrer" alt="linkedin"></a>
                                <a href="https://github.com/ancellitto" className="social-link  fab fa-git " target="_blank" rel="noopener noreferrer" alt="github"></a>
                            </div>
                            <br/>
                            <a href="#mastery" class="scroll-down" address="true"></a>                  
                        </div>
                </header>

                <div className="row">
                    {/* Navigator */}
                    <Navbar />

                    {/* Main Content */}
                    <main className="col justify-content-center p-0 m-0">
                        <div className="content text-center">
                            <div id="mastery" className="container-fluid " >
                                <h1 className="pt-5">Mastery</h1>
                                <div className="row d-flex align-items-center mastery-logos justify-content-center">
                                    {/* <div className="col m-2"><a href="https://www.java.com/" target="_blank" rel="noopener noreferrer"><img src={java} alt="java" width="120" /></a></div>
                                    <div className="col m-2"><a href="https://spring.io/" target="_blank" rel="noopener noreferrer"><img src={spring} width="120" alt="spring" /></a></div>
                                    <div className="col m-2"><a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer"><img src={kubernetes} width="120" alt="Kubernetes" /></a></div>
                                    <div className="col m-2"><a href="https://www.openshift.com/" target="_blank" rel="noopener noreferrer"><img src={openshift} width="120" alt="Kubernetes" /></a></div>
                                    <div className="col m-2"><a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer"><img src={aws} width="120" alt="aws" /></a></div>
                                    <div className="col m-2"><a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"><img src={docker} width="120" alt="docker" /></a></div>
                                    <div className="col m-2"><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src={react} width="120" alt="react" /></a></div>
                                    <div className="col m-2"><a href="https://angular.io/" target="_blank" rel="noopener noreferrer"><img src={angular} width="120" alt="angular" /></a></div>
                                    <div className="col m-2"><a href="https://www.polymer-project.org/" target="_blank" rel="noopener noreferrer"><img src={polymer} width="120" alt="polymer" /></a></div>
                                    <div className="col m-2"><a href="https://vaadin.com/" target="_blank" rel="noopener noreferrer"><img src={vaadin} width="120" alt="vaadin" /></a></div>
                                    <div className="col m-2"><a href="http://www.gwtproject.org/" target="_blank" rel="noopener noreferrer"><img src={gwt} width="120" alt="gwt" /></a></div>
                                    <div className="col m-2"><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><img src={git} width="120" alt="git" /></a></div>
                                    <div className="col m-2"><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><img src={bootstrap} width="120" alt="bootstrap" /></a></div>
                                    <div className="col m-2"><a href="https://jenkins.io/" target="_blank" rel="noopener noreferrer"><img src={jenkins} width="120" alt="jenkins" /></a></div>
                                    <div className="col m-2"><a href="https://www.atlassian.com/jira" target="_blank" rel="noopener noreferrer"><img src={jira} width="120" alt="jira" /></a></div> */}
                                </div>
                            </div>
                            <div id="expertise" className="container-fluid " >
                                <h1 className="pt-5">Expertise</h1>
                                <ul className="text-left">
                                    <li> Experience in migrating monolithic application to microservices</li>
                                    <li> Experience in leading distributed teams</li>
                                    <li> Implements efficient solutions to complex problems</li>
                                    <li> Strong exposure to advanced development methodologies</li>
                                    <li> Good knowledge in developing algorithms</li>
                                    <li> Self learner and keeps up to date with the latest technologies</li>
                                </ul>
                            </div>
                            <div id="experience" className="container-fluid " >
                                <h1 className="pt-5">Experience</h1>
                                <Timeline lineColor={'#ddd'}>
                                    <TimelineItem
                                        key="001"
                                        dateText="July, 2019-Present"
                                        style={{ color: '#F05F3B' }}
                                        dateInnerStyle={{ background: '#F05F3B' }}
                                    >
                                        <h3>Lead Software Engineer</h3>
                                        <h4>Accenture, Latvia</h4>
                                        <p>
                                            <strong>
                                                Project: Event Management Tool for a large banking institution (July 2020- Present)
                                            </strong>
                                            <br />
                                            Event Management Tool  helps to efficiently plan, manage and conduct events organized by the
                                            institution for its clients.The tool was built on legacy technologies like java 6 and jsf now moving
                                            towards newer technology stack using microservices with spring boot, docker, kubernetes and
                                            open shift. I am involved in migrating the project to a newer tech stack. I am helping in
                                            defining the new target architecture and lay migration strategy to gracefully move away from
                                            the legacy technologies

                                            <br />
                                            <strong>Technologies :</strong>Java 6,8, Spring 5, Spring Boot, Hibernate, Docker, Kubernetes, OpenShift, Angular, Jsf, Weblogic
                                        </p>
                                        <p>
                                            <strong>
                                                Project: Employee Management System(February 2021- Present)
                                            </strong>
                                            <br />

                                            Employee Management System (EMS) is a project targeted to build up the Intern's skills  who have
                                            newly joined the company. The main focus is to build a system that would help in managing,
                                            training and staffing of the interns.

                                            <br />
                                            <strong>Technologies :</strong>Java 6,8, JSF, Weblogic, Oracle 10g
                                        </p>
                                        <p>
                                            <strong>
                                                Project: Advisory tool for Relationship Managers for a large banking institution(July 2019- July 2020)
                                            </strong>
                                            <br />

                                            The Advisory tool is used by Relationship Managers to engage with their clients. It aggregates
                                            data from various downstream services  and provides all the necessary information and statistics
                                            to the Relationship Manager. I worked as a full-stack developer and used Angular for frontend and
                                            Java for backend. Did architecture  and groundworks for transforming the monolithic application
                                            to micro frontend and microservices. Setup the main pillars of microservices architecture like
                                            service gateway, registry all the way from development environment to production


                                            <br />
                                            <strong>Technologies :</strong>Java, Spring Boot, Netflix Eureka, Zuul, Ribbon, Micro-services, Micro-frontends, Angular 8, Ngrx, Rxjs, Apache Camel.
                                        </p>
                                    </TimelineItem>
                                    <TimelineItem
                                        key="002"
                                        dateText="May, 2017-June, 2019"
                                        style={{ color: '#F05F3B' }}
                                        dateInnerStyle={{ background: '#F05F3B' }}
                                    >
                                        <h3>Senior Software Engineer</h3>
                                        <h4>Palnar Transmedia Pvt. Ltd</h4>
                                        <p>
                                            <br />
                                            <strong>Client  : MARKANT Deutschland GmbH
                                                <br />
                                                Project: Vxplorer (May 2017 – Present)
                                                <br />
                                            </strong>
                                            Vxplorer is a Enterprise Content Management framework to cater the needs
                                            for managing the content for the Markant. A core framework was designed and
                                            developed from scratch which was used to create multiple solutions for various
                                            products across the company. The framework is robust enough to handle all the
                                            use cases and now is also launched as a product by the company
                                        </p>
                                        <p>
                                            Vaadin and java were the base technologies for developing the frameworks. A web application
                                            java module and a server java application was made. Core advantage of the software is that
                                            it is fully customizable. A business user can configure various business requirements for
                                            content management through the application and web application for the configured business
                                            requirements will be deployed.
                                            <br />
                                            <strong>Technologies :</strong>Vaadin, GWT, Java
                                        </p>
                                        <p>
                                            <br />
                                            <strong>Client  : Movado USA
                                                <br />
                                                Project: Movado Portal (March 2018 – Present)
                                                <br />
                                            </strong>

                                            An online portal for Movado Group for its employees and user base.
                                            Development and architecturing  of the backend for various stages of
                                            the portal including  various section like employee login, employee sales
                                            and ecommerce functionalities like shopping cart and wish list etc.Spring
                                            boot is the core technology used as the backend which exposes various services
                                            which is consumed  by the front end.

                                            <br />
                                            <strong>Technologies :</strong>Spring Boot ,Java,Restful web services
                                        </p>
                                    </TimelineItem>
                                    <TimelineItem
                                        key="003"
                                        dateText=" July 2013-May 2017"
                                        style={{ color: '#F05F3B' }}
                                        dateInnerStyle={{ background: '#F05F3B' }}
                                    >

                                        <h3> Software Engineer</h3>
                                        <h4>SunTec Business Solution</h4>
                                        <h5>Onsite: Nuwaza Softwares, JLT, Dubai :(Oct 2014-Jan 2015)</h5>
                                        <div>
                                            Was responsible for Researching and developing various modules from ground
                                            up for the next generation enterprise application. Coordinated a team of 5.
                                            <br />
                                            <strong>Developed an Automated Application Code Generation and Rendering Framework
                                                <br />
                                            </strong>
                                            This framework was capable of automatically generating a deployable web
                                            application, it could be configured either to generate the entire code base
                                            and create a WAR (web Archive) or render the application and deploy it in its own server.
                                            <br />
                                            <strong>Distributed Application Environment Manager
                                                <br />
                                            </strong>
                                            Distributed Application Environment Manager was capable of building and managing
                                            a multi node distributed cluster environment and  deploy an application across various
                                            nodes of a cluster, It had a communication channel which could detect when a node is added,
                                            deleted or crashed. It had the capabilities of invoking various services of the
                                            deployed application in the cluster.
                                            <br />
                                            <strong>Developed a web based graphical modeling framework
                                                <br />
                                            </strong>
                                            This served as an underlying framework which was used to build various graphical
                                            modeling softwares and tools.
                                            <br />
                                            <strong>Developed a data visualization framework
                                                <br />
                                            </strong>
                                            Data visualization involves converting statistical data into  visualization .This
                                            framework was capable of converting data into any type of visualizations like Line
                                            charts, Bar Graphs, Spider charts, pie charts graphs, charts, histogram
                                            <p>Designed and developed the underlying structure which can convert data into any
                                                type of visualization, designed Algorithms and developed various charts like line
                                                chart, bar chart, and pi chart
                                            </p>
                                            <strong>Developed a web based UML Diagramming Tool
                                                <br />
                                            </strong>
                                            This Tool helped in creating class, component, sequence and context diagrams. This
                                            was capable of Round trip engineering i.e. generating class diagram for code and
                                            generate code from class diagram. The tool was context aware so that it could provided
                                            a navigation from component to class to sequence navigation of a specific module.
                                            The tool was intelligent enough to provide a dynamic layout for class, component and
                                            sequence diagrams
                                            <p>	was responsible for designing and developing the web application, Developed complex
                                                Layout algorithms which could create a class diagram from a java project for Dynamic
                                                class diagram, Developed layouts for component diagram and sequence diagram
                                                generation, Integrated with other in house web services for creating a continuous
                                                integration platform
                                            </p>
                                            <br />
                                            <strong>Technologies :</strong>Java,GWT,Polymer,Antlr String Template
                                        </div>
                                    </TimelineItem>
                                </Timeline>
                            </div>
                            <div id="education" className="container-fluid " >
                                <h1 className="pt-5">Education</h1>
                                <Timeline lineColor={'#ddd'}>
                                    <TimelineItem
                                        key="001"
                                        dateText=" 2009-2013"
                                        style={{ color: '#007872' }}
                                        dateInnerStyle={{ background: '#007872' }}
                                    >
                                        <p>
                                            <strong>Qualification:</strong> Bachelor of Engineering-Computer Science
                                            <br />
                                            <strong>University/Board::</strong>  Anna University
                                        </p>
                                    </TimelineItem>
                                    <TimelineItem
                                        key="002"
                                        dateText=" 2008-2009"
                                        style={{ color: '#007872' }}
                                        dateInnerStyle={{ background: '#007872' }}
                                    >
                                        <p>
                                            <strong>Qualification:</strong> AISSCE
                                            <br />
                                            <strong>University/Board::</strong> CBSE
                                        </p>
                                    </TimelineItem>
                                    <TimelineItem
                                        key="003"
                                        dateText=" 2006-2007"
                                        style={{ color: '#007872' }}
                                        dateInnerStyle={{ background: '#007872' }}
                                    >
                                        <p>
                                            <strong>Qualification:</strong> AISSE
                                            <br />
                                            <strong>University/Board::</strong> CBSE
                                        </p>
                                    </TimelineItem>
                                </Timeline>

                            </div>
                        </div>
                    </main>
                </div>
                {/* Footer */}
                <footer className="row">
                    <div className="title text-center align-self-center w-100">
                        <h2>Contact Me</h2>
                        <h5><a href="mailto:contact@ancel.codes">contact@ancel.codes</a></h5>
                    </div>
                </footer>
            </div>
        );

    }
}

export default App;
