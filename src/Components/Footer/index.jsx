import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="Footer">
      <div id="copyright">
        Copyright {(new Date(Date.now())).getFullYear()} by David Sommers
      </div>
    </div>
  )
}

export default Footer;