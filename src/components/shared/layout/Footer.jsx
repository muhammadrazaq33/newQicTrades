import React from "react";

const Footer = () => {
  return (
    <footer class="footer-wrapper">
      <div class="footer-top">
        <div class="footer-top-content">
          <h3>Need help?</h3>
          <h1>We are here to help</h1>
          <p>
            Our QikTrade support team is ready to assist you 24/7 with any
            trading or account concerns.
          </p>
          <button>Contact Us</button>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>+44 2034 567 890</li>
            <li>support@qiktrade.com</li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Trade</h4>
          <ul>
            <li>
              <a href="#">Buy Crypto</a>
            </li>
            <li>
              <a href="#">Sell Crypto</a>
            </li>
            <li>
              <a href="#">P2P Market</a>
            </li>
            <li>
              <a href="#">Spot Exchange</a>
            </li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </div>
        <div class="footer-column newsletter">
          <h4>Newsletter</h4>
          <p>Be the first to hear about our latest offers.</p>
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <p>© 2025 QikTrade Ltd. All rights reserved.</p>
        <div class="social-icons">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
