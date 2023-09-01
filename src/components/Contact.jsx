import React from "react";

import "../styles/components/contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <h3 id="contact">Me contacter</h3>
      <p>
        Mon profil vous intéresse ? N'hésitez pas à me contacter en complétant
        le formulaire çi-dessous.
      </p>
      <div className="form-container">
        <form action="submit">
          <label htmlFor="email">E-mail :</label>
          <input type="text" name="email" placeholder="exemple@email.com" />
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            name="email"
            placeholder="Nom complet / Nom de l'entreprise"
          />
          <label htmlFor="texte">Message :</label>
          <input
            id="placeholder"
            type="text"
            name="texte"
            placeholder="Sujet du message "
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
