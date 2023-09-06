const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "azzouz.lyes.w@gmail.com",
    pass: "Actiondrive123",
  },
});

// Vérification de la connexion SMTP
transporter.verify(function (error, success) {
  if (error) {
    console.log("Erreur lors de la vérification de la connexion SMTP :");
    console.log(error);
  } else {
    console.log("Serveur de messagerie prêt à envoyer des e-mails !");
  }
});

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.path}`);
  next();
});

app.post("/sendMessage", (req, res) => {
  const { email, name, texte } = req.body;

  console.log("Requête POST reçue !");
  console.log("Données du formulaire :", req.body);

  const mailOptions = {
    from: "test457457822@gmail.com",
    to: "azzouz.lyes.w@gmail.com",
    subject: `Nouveau message de ${name}`,
    text: texte,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :");
      console.error(error);
      res
        .status(500)
        .send("Une erreur s'est produite lors de l'envoi de l'e-mail.");
    } else {
      console.log("E-mail envoyé : " + info.response);
      res.status(200).send("E-mail envoyé avec succès !");
    }
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
