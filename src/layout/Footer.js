import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer p-20 bg-primary text-white">
      <div className="w-full md:flex">
        <div className="mb-5 md:w-2/6">
          <div className="footer-card flex gap-3">
            <div className="icon">
              <FaMapMarkerAlt size={24} color="#fff" />
            </div>
            <div className="content">
              <p>H#000 (0th Floor), Road #00,</p>
              <p>New DOHS, Mohakhali, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/6">
          <h2>Company</h2>
          <ul className="footer-nav py-5">
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Project</Link>
            </li>
            <li>
              <Link to="">Our Team</Link>
            </li>
            <li>
              <Link to="">Terms Conditions</Link>
            </li>
            <li>
              <Link to="">Submit Listing</Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/6">
          <h2>Quick Links</h2>
          <ul className="footer-nav py-5">
            <li className="footer-nav-item">
              <Link to="">Quick Links</Link>
            </li>
            <li>
              <Link to="">Rentals</Link>
            </li>
            <li>
              <Link to="">Sales</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
            <li>
              <Link to="">Our blog</Link>
            </li>
          </ul>
        </div>
        <div className="footer-about md:w-2/6">
          <h2>About us</h2>
          <p className="py-5 pr-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat{" "}
          </p>
          <ul className="footer-social flex gap-5">
            <li>
              <a
                href="https://facebook.com/riponhossain.shuvo.3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/riponhossainshuvo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rhshuvo44/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
