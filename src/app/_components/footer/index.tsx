import React from 'react'
import Logo from '@assets/svgs/logo.svg'
import Facebook from '@assets/svgs/facebook.svg'
import Linkedin from '@assets/svgs/linkedin.svg'
import X from '@assets/svgs/twitter.svg'
import Youtube from '@assets/svgs/youtube.svg'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="logo-and-socials">
        <Logo />
        <div className="social-links">
          <Facebook />
          <Linkedin />
          <X />
          <Youtube />
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-link">
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-link">
          <h3>Support</h3>
          <a href="#">Help Center</a>
          <a href="#">Safety Center</a>
          <a href="#">Community Guidelines</a>
        </div>
      </div>
      <div className="footer-rights-and-terms">
        <p className="footer-rights">
          © 2024 NOWwith Ventures Inc. All Rights Reserved.
        </p>
        <div className="terms">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  )
}
