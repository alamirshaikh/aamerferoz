import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
<div class="contact-container">
    <div class="contact-info">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you. Reach out using the form below or through our contact information.</p>
      
      <div class="contact-details">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> info@example.com</p>
        <p><strong>Phone:</strong> +1 123 456 7890</p>
        <p><strong>Address:</strong> 123 Main St, City, Country</p>
      </div>
    </div>

    <div class="contact-form">
      <h2>Get In Touch</h2>
      <form action="/submit" method="POST">
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required/>
        </div>
        <div class="form-group">
          <label for="email">Your Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required/>
        </div>
        <div class="form-group">
          <label for="message">Your Message:</label>
          <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
  );
};

export default Contact;
