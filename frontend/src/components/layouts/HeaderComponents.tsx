import React from 'react'
import { Link } from 'react-router-dom'

function HeaderComponents() {
  return (
    <React.Fragment>
        HeaderComponents
        <div>
        <input type="hidden" id="base-url" className="base-url" defaultValue="https://www.trinity.edu.np/" />
        <input type="hidden" id="ncsrf-token" />
        <section className="sidbanner  d-flex align-items-end position-relative">
          <div className="section-inner w-100 position-relative">
            <div className="container">
              <div className="row">
                <div className="col-md-12 py-4">
                  <div className="d-flex align-items-center justify-content-between flex-md-row flex-column ">
                    <div>
                      <h2 className="heading-main d-none">
                        Introduction							</h2>
                      <ul className="breadcrumb">
                        <li>
                          <a href="https://www.trinity.edu.np/">Home</a>
                        </li>
                        <li className="active position-relative">
                          <a href="javascript:void(0);">Introduction</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section><section className="pt-4 pb-3 customuiform ">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="faqs mb-3">
                  <Link className="py-3 px-4 main-card d-lg-none d-flex" data-bs-toggle="collapse" to="#collapse-sidebar" role="button" aria-expanded="false" aria-controls="collapse-sidebar">
                    <h6 className="fw-bold mb-0">Related Links</h6>
                    <i className="fas fa-angle-down" />
                  </Link>
                  <ul className="menu-details list-inline collapse" id="collapse-sidebar">
                    <li className="hasMenu" data-bs-toggle="collapse" ref="#menuCollpase-0" role="button" aria-expanded="false" aria-controls="menuCollpase-0">
                      <a href="javascript:void(0)" target="_self">About Us</a>
                    </li>
                    <ul className="list-inline menu-details-list collapse" id="menuCollpase-0">
                      <li className="menu_active">
                        <a href="https://www.trinity.edu.np/about-trinity">Introduction</a>
                      </li>
                      <li>
                        <a href="https://www.trinity.edu.np/about-trinity/about-us/our-legacy">Our Legacy</a>
                      </li>
                      <li>
                        <a href="https://www.trinity.edu.np/about-trinity/about-us/facts-figures">Facts &amp; Figures</a>
                      </li>
                      <li>
                        <a href="https://www.trinity.edu.np/about-trinity/about-us/timeline">Timeline</a>
                      </li>
                      <li>
                        <a href="https://www.trinity.edu.np/about-trinity/about-us/college-environment">College Environment</a>
                      </li>
                      <li>
                        <a href="https://www.trinity.edu.np/about-trinity/about-us/safety">Safety</a>
                      </li>
                      <li>
                        <a href="https://www.trinity.edu.np/about-trinity/about-us/trinity-in-the-community">Trinity in the Community</a>
                      </li>
                    </ul>
                    <li className="hasMenu" data-bs-toggle="collapse" ref="#menuCollpase-1" role="button" aria-expanded="false" aria-controls="menuCollpase-1">
                      <a href="javascript:void(0)" target="_self">Messages</a>
                    </li>
                    <ul className="list-inline menu-details-list collapse" id="menuCollpase-1">
                      <li className=''>
                        <a href="https://www.trinity.edu.np/about-trinity/messages/ceo">CEO</a>
                      </li>
                      <li className=''>
                        <a href="https://www.trinity.edu.np/about-trinity/messages/principal">Principal</a>
                      </li>
                      <li className=''>
                        <a href="https://www.trinity.edu.np/about-trinity/messages/directors">Directors</a>
                      </li>
                      <li className=''>
                        <a href="https://www.trinity.edu.np/about-trinity/messages/coordinators-plus-two">Coordinators</a>
                      </li>
                    </ul>
                    <li className="hasMenu" data-bs-toggle="collapse" ref="#menuCollpase-2" role="button" aria-expanded="false" aria-controls="menuCollpase-2">
                      <a href="javascript:void(0)" target="_self">Our People</a>
                    </li>
                    <ul className="list-inline menu-details-list collapse" id="menuCollpase-2">
                      <li className=''>
                        <a href="https://www.trinity.edu.np/about-trinity/our-people/advisory-board">Advisory Board </a>
                      </li>
                      <li className=''>
                        <a href="https://www.trinity.edu.np/about-trinity/our-people/board-members">Board Members</a>
                      </li>
                      <li className=''>
                        <a href="https://www.trinity.edu.np/about-trinity/our-people/faculty">Faculty</a>
                      </li>
                      <li className=''>
                        <a href="https://www.trinity.edu.np/about-trinity/our-people/staff">Staff</a>
                      </li>
                    </ul>
                    <li className="hasMenu" data-bs-toggle="collapse" ref="#menuCollpase-3" role="button" aria-expanded="false" aria-controls="menuCollpase-3">
                      <a href="javascript:void(0)" target="_self">On Campus</a>
                    </li>
                    <ul className="list-inline menu-details-list collapse" id="menuCollpase-3">
                      <li className=''>
                        <a href="https://www.trinity.edu.np/about-trinity/on-campus/map">Map</a>
                      </li>
                      <li className=''>
                        <a href="https://www.trinity.edu.np/gallery">Photo Gallery</a>
                      </li>
                      <li className=''>
                        <a href="https://www.trinity.edu.np/video_gallery">Video Gallery</a>
                      </li>
                      <li className=''>
                        <a href="https://www.trinity.edu.np/downloads">Downloads</a>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div></div></div></section></div>
        </React.Fragment>
  )
}

export default HeaderComponents