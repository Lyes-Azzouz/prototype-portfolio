import React from "react";
import "../styles/components/skills.scss";
import Collapse from "./Collapse";

const Skills = () => {
  return (
    <section className="skills">
      <div className="sidebar">
        <h1>Mes compétences</h1>
        <p id="subtitle">
          Dans cette section , vous trouverez toutes les compétences aquises par
          la pratique des différents langages et technologies utilisées dans le
          cadre du développement web , autant en front qu'en back
        </p>
        <div className="sidebar-content">
          <div className="techno-front">
            <span>Front-end</span>
            <Collapse
              title={"Javascript"}
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <Collapse
              title={"Html"}
              content={
                "Urna neque viverra justo nec ultrices. Scelerisque viverra mauris in aliquam sem fringilla. Pretium lectus quam id leo in vitae turpis massa. Pellentesque habitant morbi tristique senectus et netus et malesuada. Dui id ornare arcu odio ut sem. Nullam non nisi est sit amet facilisis magna. Suscipit adipiscing bibendum est ultricies integer quis. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Cras pulvinar mattis nunc sed blandit. Molestie nunc non blandit massa enim. Dignissim sodales ut eu sem. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Ligula ullamcorper malesuada proin libero nunc. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt."
              }
            />
            <Collapse title={"Css"} content={"je test"} />
            <Collapse title={"Sass"} content={"je test"} />
            <Collapse title={"React"} content={"je test"} />
            <Collapse title={"Responsive Desing"} content={"je test"} />
          </div>
          <div className="techno-back">
            <span>Back-end</span>
            <Collapse title={"Node.js"} content={"je test"} />
            <Collapse title={"Express.js"} content={"je test"} />
            <Collapse title={"Api RESTful"} content={"je test"} />
            <Collapse title={"Bcrypt"} content={"je test"} />
          </div>
          <div className="bdd">
            <span>Base de données</span>
            <Collapse title={"MongoDB"} content={"Je test"} />
          </div>

          <div className="versioning">
            <span className="v">Gestion de version</span>
            <Collapse title={"Git"} content={"test"} />
            <Collapse title={"GitHub"} content={"test"} />
          </div>
          <div className="logiciels">
            <span className="sw">Logiciels</span>
            <Collapse title={"VsCode"} content={"test"} />
            <Collapse title={"3dsmax"} content={"test"} />
            <Collapse title={"Figma"} content={"test"} />
            <Collapse title={"Gimp"} content={"test"} />
          </div>

          <div className="dev-tools">
            <span className="dt">Outils de développement</span>
            <Collapse title={"Google DevTool"} content={"test"} />
            <Collapse title={"Google Lighthouse"} content={"test"} />
            <Collapse title={"Waze"} content={"test"} />
            <Collapse title={"Json web token"} content={"test"} />
            <Collapse title={"Shemas.org"} content={"test"} />
            <Collapse title={"JSONVue"} content={"test"} />
            <Collapse title={"Talent Api tester"} content={"test"} />
            <Collapse title={"Postman"} content={"test"} />
            <Collapse title={"Swagger"} content={"test"} />
            <Collapse title={"Regex101"} content={"test"} />
          </div>
          <div className="communication">
            <span className="com">Gestion de projets & Communication</span>
            <Collapse title={"Trello"} content={"test"} />
            <Collapse title={"Microsoft Teams"} content={"test"} />
            <Collapse title={"Slack"} content={"test"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
