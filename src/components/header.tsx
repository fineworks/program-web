import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'
import logo from "../images/programlogo.png"


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  public render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" expand="lg"
                collapseOnSelect={true}>
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top" onClick={Scroller.handleAnchorScroll}>
              <img src={logo} alt="Logo" href="#page-top" />
            </a>
            
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav my-2 my-lg-0 ms-auto ">
                <Scrollspy className="navbar-nav"
                           items={["products", "services", "portfolio", "contact"]}
                           currentClassName="active" rootEl={"#mainNav"} offset={-75}>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#products" onClick={Scroller.handleAnchorScroll}>Бүтээгдэхүүн</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#services" onClick={Scroller.handleAnchorScroll}>Үйлчилгээ</Nav.Link>
                  </li>
                  {/* <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#portfolio" onClick={Scroller.handleAnchorScroll}>Нэвтэрүүлсэн туршлагууд</Nav.Link>
                  </li> */}
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"} href="#contact" onClick={Scroller.handleAnchorScroll}>Холбоо барих</Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">Компаний үйл ажиллагааг дэмжих програмууд</h1>
                <hr className="divider my-4"/>
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">CRM (Хэрэглэгчтэй Харилцах Удирдлага), Ecommerce (Онлайн худалдаа), HR Management (Хүний нөөцийн удирдлага), PMS (Бүтээгдэхүүн Удирдлагын Систем)</p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#products" onClick={Scroller.handleAnchorScroll}>Дэлгэрэнгүй мэдээлэл</a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}



