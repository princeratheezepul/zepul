import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaPhoneVolume, FaHome } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm">
      <div className="flex flex-col md:flex-row justify-between gap-8 px-6 md:px-16 py-10 border-b border-white/20">
        <div className="md:w-1/3">
          <img src="/assets/image.png" alt="logo" className="mb-4" />
          <p className="opacity-50  leading-none">
            Zepul™ is committed to removing inefficiencies from the recruitment process while maximizing the value of human expertise.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 md:w-1/2 ml-10">
          <div>
            <h5 className="uppercase opacity-50 mb-3 ml-8">Company</h5>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:underline text-white" style={{ textDecoration: 'none' }}>Terms</Link></li>
              <li><Link to="/privacy" className="hover:underline text-white" style={{ textDecoration: 'none' }}>Privacy</Link></li>
              <li><Link to="/support" className="hover:underline text-white" style={{ textDecoration: 'none' }}>Support</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="uppercase opacity-50 mb-3 ml-8">Quick Link</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline text-white" style={{ textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/companies" className="hover:underline text-white" style={{ textDecoration: 'none' }}>Companies</Link></li>
              <li><Link to="/recruitment" className="hover:underline text-white" style={{ textDecoration: 'none' }}>Recruitment Partners</Link></li>
              <li><Link to="/jobseeker" className="hover:underline text-white" style={{ textDecoration: 'none' }}>Job Seekers</Link></li>
            </ul>
          </div>
        </div>

        <div className="md:w-1/3">
          <div className="flex gap-4 mb-4 ml-10">
            <a href="https://www.facebook.com/tryzepul?mibextid=ZbWKwL" target="_blank" rel="noreferrer"><FaFacebook size={20} color="white" /></a>
            <a href="https://www.instagram.com/tryzepul/" target="_blank" rel="noreferrer"><FaInstagram size={20} color="white"/></a>
            <a href="https://x.com/tryzepul?t=a7vaOJwbEV_EnDwn9tNiAg&s=08" target="_blank" rel="noreferrer" ><FaTwitter size={20} color="white" /></a>
          </div>
          <ul className="space-y-3 opacity-50">
            <li className="flex items-start gap-2">
              <FaHome className="mt-1" />
              <span>
                Floor 1 & 3, Plot No. 5–9/64<br />
                Road No. 6, Alkapuri Township<br />
                Manikonda, Hyderabad – 500089<br />
                Telangana, India
              </span>
            </li>
            <li className="flex items-center gap-2"><FaPhoneVolume /><span>+91-77939 55555</span></li>
            <li className="flex items-center gap-2"><MdAlternateEmail /><span>support@zepul.com</span></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6 px-6 md:px-16 py-6 border-b border-white/20">
        <div className="md:w-2/3">
          <h4 className="font-semibold mb-2">Disclaimer</h4>
          <p className="opacity-50 leading-none">
            Zepul™ and its partners, authorized vendors, and subsidiaries do not charge any fees from job seekers for employment placements.
            If anyone claims otherwise, please report such violations immediately.
          </p>
        </div>
        <div className="flex flex-col space-y-2 md:items-start">
          <Link to="/report-violations" className="text-lg " style={{ textDecoration: 'none' }}>Report Violations</Link>
          <a href="mailto:info@zepul.com" className="opacity-50 hover:underline text-white leading-none" style={{ textDecoration: 'none' }}>info@zepul.com</a>
          <a href="mailto:legal@zepul.com" className="opacity-50 hover:underline text-white" style={{ textDecoration: 'none' }}>legal@zepul.com</a>
        </div>
      </div>

      <div className="px-6 md:px-16 py-4 text-left text-white opacity-50 text-xs">
        © Copyright 2023. All Rights Reserved by Zepul
      </div>
    </footer>
  );
};

export default Footer;
