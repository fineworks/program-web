import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
    this.setModal = this.setModal.bind(this);
  }

  handlePortfolioClick(index, e) {
    e.preventDefault();
    this.setModal(true, index);
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home"/>
        <section className="page-section" id="products">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 d-none d-lg-block">
                <GatsbyImage image={this.props.data.hrimage.childImageSharp.gatsbyImageData} />
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="mt-5">
                  <h3 className="h4 mb-2">HRM (Хүний нөөцийн удирдлага)</h3>
                  <p className="text-muted mb-0">Ажилтны бүх төрлийн мэдээллийн бүртгэл, 
                    Сургалт хөгжлийн бүртгэл, Байгууллагын бүтэц, орон тооны төлөвлөгөө, 
                    Тушаал шийдвэрийн бүртгэл, Тайлан графикууд
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="mt-5">
                  <h3 className="h4 mb-2">CRM (Хэрэглэгчтэй Харилцах Удирдлага)</h3>
                  <p className="text-muted mb-0">Хэрэглэгчидтэй харилцсан бүх төрлийн 
                    бүртгэлийг хөтөлсөнөөр борлуулалтын багт хэрэглэгчээ 360 бүхлээр нь 
                    харж манлайлах боломжийг олгодог
                  </p>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <GatsbyImage image={this.props.data.crmimage.childImageSharp.gatsbyImageData} />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6 d-none d-lg-block">
                <GatsbyImage image={this.props.data.ecommerceimage.childImageSharp.gatsbyImageData} />
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="mt-5">
                  <h3 className="h4 mb-2">Ecommerce (Онлайн худалдаа)</h3>
                  <p className="text-muted mb-0">Онлайн худалдааны боломжыг өөрийн байгууллагад нэвтрүүлээрэй
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">Үйлчилгээ</h2>
            <hr className="divider my-4"/>
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Захиалгат өөрчлөлт</h3>
                  <p className="text-muted mb-0">Танай байгууллагын онцлогт тохируулан нэмэлт модуль хөгжүүлэлт хийх</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Байнгын сайжруулалт</h3>
                  <p className="text-muted mb-0">Бид бүтээгдэхүүнүүдээ байнга сайжруулалт хийдэг бөгөөд ашиглаж байх хугацаанд автоматаар шинэчлэгдэх болно</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Олон хэлний боломж</h3>
                  <p className="text-muted mb-0">Програм нь Монгол, Англи хэлний сонголттой. Хэрэглэгч бүр өөрийн хэлний сонголтоо тохируулж ашиглах боломжтой.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Холболт хийх боломж</h3>
                  <p className="text-muted mb-0">Байгууллагад ашиглаж байгаа системүүдтэй холболт хийх бүрэн боломжтой </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white" id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              
            </div>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Бидэнтэй холбоо барих</h2>
                <hr className="divider my-4"/>
                <p className="text-muted mb-5">Өөрийн байгууллагын дотоод үйл ажиллагааг сайжруулах, мэдээллийн нэгдсэн бүртгэлтэй болохыг хүсвэл бидэнд хандаарай</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>9910 8470</div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a className="d-block" href="mailto:info@fineworks.mn">info@fineworks.mn</a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal show={this.state.modalShow} onHide={() => this.setModal(false, 0)}>
          <PortfolioCarousel images={this.props.data.images.edges} current={this.state.modalCurrent}/>
        </PortfolioModal>
      </Layout>
    )
  }
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    hrimage: file(relativePath: { eq: "human-resource-management-1024x575.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 450
          layout: FIXED
        )
      }
    }
    crmimage: file(relativePath: { eq: "complete-crm-history-header.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 450
          layout: FIXED
        )
      }
    }
    ecommerceimage: file(relativePath: { eq: "how-ecommerce-companies-can-care-for-their-customers-5eb56dfe6c64e-1520x800-1.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 450
          layout: FIXED
        )
      }
    }
  }
`
