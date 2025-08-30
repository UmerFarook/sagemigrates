

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram,faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Socialmedia () {

    return (
        <div style={{ display: "flex", gap: "15px", marginTop:"30px" }}>
            <a href="https://www.facebook.com/profile.php?id=61579640040332" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} style={{ color: "#d9b166", fontSize: "28px" }} />
            </a>
            <a href="https://www.instagram.com/sage_migration_legal?igsh=MXgyMWczdnF1OHEyNg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} style={{ color: "#d9b166", fontSize: "28px" }} />
            </a>
            <a href="https://m.youtube.com/@SAGEConsultancyLLC?fbclid=PAVERDUAMdtIpleHRuA2FlbQIxMAABpzc0Hzgj2aRULA0uwmzxrlaLMtL4gKdLG4IaONnsSVEQR1-kpizQ1QEFVt3x_aem_Im012CshAMaFIZFegXSfEg" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                <FontAwesomeIcon icon={faYoutube} style={{ color: "#d9b166", fontSize: "28px" }} />
            </a>
        </div>
    );
}