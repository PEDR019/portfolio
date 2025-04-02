import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);

  // Function to start the typing animation
  const startTypingAnimation = () => {
    if (hasAnimated) return; // Prevents the animation from running more than once
    
    setHasAnimated(true);
    
    // Full text that will be typed
    const fullText = "Leave me a message!";
    let currentText = "";
    let index = 0;
    
    // Pencil icon element
    const pencilIcon = document.querySelector('.pencil-icon');
    
    // Add the writing animation to the pencil
    if (pencilIcon) {
      pencilIcon.classList.add('writing-animation');
    }
    
    // Function to simulate typing
    const typeText = () => {
      if (index < fullText.length) {
        currentText += fullText.charAt(index);
        if (titleRef.current) {
          titleRef.current.textContent = currentText;
        }
        index++;
        setTimeout(typeText, 100); // Typing speed
      } else {
        // When typing is finished, make the pencil disappear
        if (pencilIcon) {
          pencilIcon.classList.add('fade-out');
          // Remove the pencil from the DOM after the fade-out animation
          setTimeout(() => {
            if (pencilIcon && pencilIcon.parentNode) {
              pencilIcon.parentNode.removeChild(pencilIcon);
            }
          }, 1000); // Fade-out animation duration
        }
      }
    };
    
    // Start the typing effect
    typeText();
  };

  useEffect(() => {
    // Set up the Intersection Observer to detect when the contact section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTypingAnimation();
            observer.disconnect(); // Disconnect the observer after starting the animation
          }
        });
      },
      { threshold: 0.3 } // The animation starts when at least 30% of the section is visible
    );

    // Observe the contact section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Add click event for the contact button in the footer
    const contactButton = document.querySelector('a[href="#contact"]');
    if (contactButton) {
      contactButton.addEventListener('click', startTypingAnimation);
    }

    // Cleanup
    return () => {
      observer.disconnect();
      if (contactButton) {
        contactButton.removeEventListener('click', startTypingAnimation);
      }
    };
  }, [hasAnimated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_l999fxf",
        "template_x3b9249",
        form.current,
        "9nQcsj4Ktrktzlsy4",
      )
      .then(() => {
        setSubmitStatus("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        setSubmitStatus("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="typing-title-container">
        <span ref={titleRef} className="typing-title"></span>
        <i className="pencil-icon"></i>
      </div>
      
      {submitStatus && <p className="submit-status">{submitStatus}</p>}
      
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input type="text" id="user_name" name="user_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
