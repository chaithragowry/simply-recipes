import "../styles/footer.scss"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


function Footer() {

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
       sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
 };

  return (
    <footer>
    <div className="footer-info">
      <div className="footer-width about">
        <h2>About</h2>
        <p>Simply Recipes is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks.Simply Recipes was founded in 2003 by Elise Bauer as a home cooking blog to record her favorite family recipes. Today, Simply Recipes has grown into a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal plans.</p>

<div className="social-links">
  <ul>
    <li><a href="https://www.youtube.com/c/simplyrecipes" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} className="social-links-icon"/></a></li>
    <li><a href="https://www.facebook.com/simplyrecipes" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} className="social-links-icon"/></a></li>
    <li><a href="https://www.instagram.com/simplyrecipes/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="social-links-icon" /></a></li>
  </ul>
</div>
      </div>
      <div className="footer-width link">
        <h2>Quick Link</h2>
        <ul>
          <li><Link to ="/specialdishes" onClick={() => scrollToSection('specialdishes-section')} >Dishes</Link></li>
          <li><Link to ="/dishesfiltered" onClick={() => scrollToSection('dishesfiltered-section')} >Menus</Link></li>
          <li><Link to ="/checkout" onClick={() => scrollToSection('checkout-section')}>Checkout</Link></li>
        </ul>
      </div>
    </div>
    <div className="copy-right">
      ©COPYRIGHT 2024 SIMPLY RECIPES ALL RIGHTS RESERVED.
      </div>
    </footer>
  )
}
export default Footer