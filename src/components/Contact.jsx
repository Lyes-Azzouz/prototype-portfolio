import React, { useEffect } from "react";
import "../styles/components/contact.scss";

function Contact() {
  useEffect(() => {
    window.onload = () => {
      const iframe = document.getElementById("iframe");

      if (iframe) {
        iframe.src = "https://tally.so/r/nWEgMj";
      }
    };
  }, []);

  return (
    <div className="contact" id="contact">
      <iframe
        id="iframe"
        width="100%"
        height="1000px"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Me contacter"
      ></iframe>
      <div id="bloc-hide"></div>
    </div>
  );
}

export default Contact;
