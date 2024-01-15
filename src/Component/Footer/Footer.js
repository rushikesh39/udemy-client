import React from 'react'
import { MdLanguage } from 'react-icons/md'
import "./Footer.css"

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='link-container'>
                <div className='footer-link'>
                    <p>Udemy Business</p>
                    <p>Teach on Udemy</p>
                    <p>Get the app</p>
                    <p>About us</p>
                    <p>Contact us</p>
                </div>
                <div className='footer-link'>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Help and Support</p>
                    <p>Affiliate</p>
                    <p>Popular courses</p>
                </div>
                <div className='footer-link'>
                    <p>Terms</p>
                    <p>Privacy policy</p>
                    <p>cookie settings</p>
                    <p>Sitemap</p>
                    <p>Accessibility statement</p>
                </div>
                </div>
                
                <div className='footerbutton'>
                <MdLanguage  color='white' />
                <span className='langbut'>English</span>
            </div>
            </div>
            
            <div className='footerlogo'>
                
                    <div>
                    <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg' alt='not found' />
                    </div>
                
                    <p>© 2023 Udemy, Inc.</p>
                
            </div>

        </footer>
    )
}

export default Footer