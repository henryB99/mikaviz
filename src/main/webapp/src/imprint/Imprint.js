import React, {Component} from "react";
import {Background, Parallax} from "react-parallax";
import "./Imprint.css";
import backgroundImage from "../timeline/Mittellandkanal-Background-1920x1500.jpg";

class Imprint extends Component {
    render() {
        return (
            <Parallax>
            <Background>
                <img
                    style={{
                        filter: "blur(1.25px) saturate(75%)"
                    }}
                    src={backgroundImage}
                    alt={""} />
            </Background>
            <div id="imprint" className={"text"}>

                <div>
                    <h1> Impressum </h1>
                    <p>
                        Die verwendeten Bilder und deren Informationen stammen vom <a href="https://nla.niedersachsen.de/startseite/" target="_blank">NLA Niedersachsen</a>.<br/><br/>
                        Alle Bilder können unter <a href="https://download.codingdavinci.de/index.php/s/7fddFkadWTFXc9g" target="_blank">dieser Adresse</a> abgerufen werden.<br/>
                    </p>
                    <p>
                        Die Umsetzung der Website erfolgte im Umfeld des CodingDaVinci-Hackathons Niedersachsen 2020 <br/>
                        durch eine Studentengruppe der Ostfalia Hochschule für angewandte Wissenschaften.
                    </p>
                </div>
            </div>
        </Parallax>
        )
    }
}
export default Imprint;