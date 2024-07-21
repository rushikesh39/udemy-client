
import { MdPlayCircle } from "react-icons/md";
import "./Home.css"
import Footer from './Footer';

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
        <p>
          Trusted by over 15,000 companies and millions of learners around the
          world
        </p>
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
          <li >
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg"
              alt="Samsung logo"
              width="101"
              height="34"
              loading="lazy"
            />
          </li>
          <li >
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg"
              alt="Cisco logo"
              width="87"
              height="40"
              loading="lazy"
            />
          </li>
          <li>
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg"
              alt="ATT&amp;T logo"
              width="97"
              height="40"
              loading="lazy"
            />
          </li>
          <li >
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg"
              alt="Procter &amp; Gamble logo"
              width="48"
              height="48"
              loading="lazy"
            />
          </li>
          <li >
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg"
              alt="Hewlett Packard Enterprise logo"
              width="94"
              height="40"
              loading="lazy"
            />
          </li>
          <li >
            <img
              src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg"
              alt="Citi logo"
              width="62"
              height="40"
              loading="lazy"
            />
          </li>
          <li >
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
            <br /><br />
            <div className='learners_div'>
                <h2 className='learnh2'>How learners like you are achieving their goals</h2>
                <div className='mainlearnercard_div'>
                    <div className='learnercard_div'>
                        <div className='imgdouble'>
                            <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt='not found' className='imgfil' />
                        </div>
                        <p className='learnertext'>I am proud to say that after a few months of taking this course...<span>I passed my exam and am now an AWS Certified Cloud Practitioner!</span> This content was exactly what the CCP exam covered.</p>
                        <div className='profile_learner'>
                            <div className='profileround'>
                                <h5>WA</h5>
                            </div>
                            <h4 className='h4profilename'>Will A</h4>
                        </div>
                        <hr />
                        <div className='flexy'>
                            <MdPlayCircle color='rgb(22, 22, 179)' size={"3em"} />
                            <p className='playspan'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</p>
                        </div>
                    </div>
                    <div className='learnercard_div'>
                        <div className='imgdouble'>
                            <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt='not found' className='imgfil' />
                        </div>
                        <div>
                        <p className='learnertext'>I am proud to say that after a few months of taking this course...<span>I passed my exam and am now an AWS Certified Cloud Practitioner!</span> This content was exactly what the CCP exam covered.</p>
                        <div className='profile_learner'>
                            <div className='profileround'>
                                <h5>WA</h5>
                            </div>
                            <h4 className='h4profilename'>Will A</h4>
                        </div>
                        <hr />
                        <div className='flexy'>
                            <MdPlayCircle color='rgb(22, 22, 179)' size={"3em"} />
                            <p className='playspan'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</p>
                        </div>
                        </div>
                    </div>
                    <div className='learnercard_div'>
                        <div className='imgdouble'>
                            <img src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" alt='not found' className='imgfil' />
                        </div>
                        <p className='learnertext'>I am proud to say that after a few months of taking this course...<span>I passed my exam and am now an AWS Certified Cloud Practitioner!</span> This content was exactly what the CCP exam covered.</p>
                        <div className='profile_learner'>
                            <div className='profileround'>
                                <h5>WA</h5>
                            </div>
                            <h4 className='h4profilename'>Will A</h4>
                        </div>
                        <hr />
                        <div className='flexy'>
                            <MdPlayCircle color='rgb(22, 22, 179)' size={"3em"} />
                            <p className='playspan'>[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</p>
                        </div>
                    </div>
                </div>
            </div><br /><br />
            <div className='becomeinstruc_div'>
                <div className='becomeinstruc_imgdiv'>
                    <img className='imgfil' src='https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg' alt='not found' />
                </div>
                <div className='becomeinstruc_contentdiv'>
                    <h1>Become an instructor</h1>
                    <p>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</p>
                    <button>Start teaching today</button>
                </div>
            </div><br /><br />
            <Footer />
        </div>
    )
}

export default Home