import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export default function Footer() {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis explicabo quibusdam veniam odit voluptates sit excepturi odio numquam quidem voluptate quasi amet illum quas debitis, obcaecati natus aperiam, facilis quaerat.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+12 566 899</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
            

        </div>
        <hr />
            <p className="footer-copyright">
                Lorem, ipsum disicing elit. Optio, praesentium ipsam. Dolore perferendis accto sed, cum tempore commodi.
            </p>
    </div>
  )
}
