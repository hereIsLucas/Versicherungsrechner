import React from 'react';
import './ContactUs.css';

export default function ContactPage() {
  return (
    <div id="outerBody">
        <div>
        <h1>Contact Us</h1>
      <p>Phone: +41 52 267 83 00</p>
      <p>Email: peter.rutschmann@bbw.ch</p>
        </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.528210469654!2d8.74661721556821!3d47.50334827917813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa46b702679c7%3A0x51d7ddcaaa0f9f11!2sPionierstrasse%2028%2C%208400%20Winterthur%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1650500975573!5m2!1sen!2sus"
        width="600"
        height="800"
        loading="lazy"
        allowFullScreen
        title="Google Maps Location"
      ></iframe>
      </div>
      )
    }
