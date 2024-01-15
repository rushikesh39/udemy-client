import React from "react";
import { MdPlayCircle } from "react-icons/md";
import "./Home.css";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <div className="banner">
        <img
          src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/4eab1b33-68a6-4419-ab03-14a255b62f42.jpg"
          alt="bannerimgs"
        />
        <div className="offer">
          <h1>Skills for your future</h1>
          <p>
            Expand your potential with a course for as little as ₹449. Sale ends
            today.
          </p>
        </div>
      </div>

      <div className="brand-container">
        <h2>
          Trusted by over 15,000 companies and millions of learners around the
          world
        </h2>
        <ul className="brand-list">
          <li>
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg"
              alt="Volkswagen logo"
              width="48"
              height="48"
              loading="lazy"
            />
          </li>
          <li class="partner-logos-module--item--1KtIF">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg"
              alt="Samsung logo"
              width="101"
              height="34"
              loading="lazy"
            />
          </li>
          <li class="partner-logos-module--item--1KtIF">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg"
              alt="Cisco logo"
              width="87"
              height="40"
              loading="lazy"
            />
          </li>
          <li class="partner-logos-module--item--1KtIF">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg"
              alt="ATT&amp;T logo"
              width="97"
              height="40"
              loading="lazy"
            />
          </li>
          <li class="partner-logos-module--item--1KtIF">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg"
              alt="Procter &amp; Gamble logo"
              width="48"
              height="48"
              loading="lazy"
            />
          </li>
          <li class="partner-logos-module--item--1KtIF">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg"
              alt="Hewlett Packard Enterprise logo"
              width="94"
              height="40"
              loading="lazy"
            />
          </li>
          <li class="partner-logos-module--item--1KtIF">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg"
              alt="Citi logo"
              width="62"
              height="40"
              loading="lazy"
            />
          </li>
          <li class="partner-logos-module--item--1KtIF">
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg"
              alt="Ericsson logo"
              width="55"
              height="48"
              loading="lazy"
            />
          </li>
        </ul>
      </div>
      <div className="learner">
        <h2>
          How learners like you are achieving their goals
        </h2>
        <div className="learnercard">
          <div >
            <div >
              <img
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                alt="not found"
                className="imgfil"
                width="20px"
              />
            </div>
            <p >
              I am proud to say that after a few months of taking this course...
              <b>
                I passed my exam and am now an AWS Certified Cloud Practitioner!
              </b>{" "}
              This content was exactly what the CCP exam covered.
            </p>
            <div className="profile">
              <div className="round">
                <h5>WA</h5>
              </div>
              <h4 className="h4profilename">Will A</h4>
            </div>
            <hr />
            <div className="link">
              <MdPlayCircle color="rgb(22, 22, 179)" size={"3em"} />
              <p className="playspan">
                [NEW] Ultimate AWS Certified Cloud Practitioner - 2022
              </p>
            </div>
          </div>
        </div>
        <div className="learnercard">
          <div >
            <div >
              <img
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                alt="not found"
                className="imgfil"
                width="20px"
              />
            </div>
            <p >
              I am proud to say that after a few months of taking this course...
              <b>
                I passed my exam and am now an AWS Certified Cloud Practitioner!
              </b>{" "}
              This content was exactly what the CCP exam covered.
            </p>
            <div className="profile">
              <div className="round">
                <h5>WA</h5>
              </div>
              <h4 className="h4profilename">Will A</h4>
            </div>
            <hr />
            <div className="link">
              <MdPlayCircle color="rgb(22, 22, 179)" size={"3em"} />
              <p className="playspan">
                [NEW] Ultimate AWS Certified Cloud Practitioner - 2022
              </p>
            </div>
          </div>
        </div>
        <div className="learnercard">
          <div >
            <div >
              <img
                src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
                alt="not found"
                className="imgfil"
                width="20px"
              />
            </div>
            <p >
              I am proud to say that after a few months of taking this course...
              <b>
                I passed my exam and am now an AWS Certified Cloud Practitioner!
              </b>{" "}
              This content was exactly what the CCP exam covered.
            </p>
            <div className="profile">
              <div className="round">
                <h5>WA</h5>
              </div>
              <h4 className="h4profilename">Will A</h4>
            </div>
            <hr />
            <div className="link">
              <MdPlayCircle color="rgb(22, 22, 179)" size={"3em"} />
              <p className="playspan">
                [NEW] Ultimate AWS Certified Cloud Practitioner - 2022
              </p>
            </div>
          </div>
        </div>
        
       
      </div>
      <div className="instructor-container">
        <div className="instructor-img-div">
          <img
            src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
            alt="not found"
          />
        </div>
        <div className="instructor-discription">
          <h1>Become an instructor</h1>
          <p>
            Instructors from around the world teach millions of learners on
            Udemy. We provide the tools and skills to teach what you love.
          </p>
          <button>Start teaching today</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
