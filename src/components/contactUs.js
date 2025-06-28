import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

function ContactUs() {
  const contactInfo = [
    {
      icon: <Mail size={28} className="icon" />,
      title: 'Email',
      value: 'iamzack46@gmail.com',
      link: 'mailto:iamzack46@gmail.com',
    },
    {
      icon: <Phone size={28} className="icon" />,
      title: 'Phone',
      value: '+92 318 1279085',
      link: 'tel:+923181279085',
    },
    {
      icon: <Linkedin size={28} className="icon" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/zaka-ul-hassan',
      link: 'https://www.linkedin.com/in/zaka-ul-hassan',
    },
    {
      icon: <Github size={28} className="icon" />,
      title: 'GitHub',
      value: 'github.com/ZAKAULHASSAN',
      link: 'https://github.com/ZAKAULHASSAN',
    },
  ];

  return (
    <section id="contact" className="contact-section fade-in fade-in-delay-3">
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-cards">
        {contactInfo.map((contact, index) => (
          <div className="contact-card gradient-border" key={index}>
            {contact.icon}
            <h3>{contact.title}</h3>
            <p>
              <a
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {contact.value}
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactUs;
