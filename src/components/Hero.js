import '../styles/hero.scss'
import { Link , useLocation} from 'react-router-dom'



function Hero() {
    const location = useLocation();


    const scrollToSection = (sectionId) => {
       const sectionElement = document.getElementById(sectionId);
       if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
       }
    };

    return (

        <div className="hero-container" id="hero-section">
            <div className='hero-nav'>
                <div className='logo'>Simply Recipes</div>
                <div className='nav'>
                <Link to="/" onClick={() => scrollToSection('hero-section')} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
               <Link to="/specialdishes" onClick={() => scrollToSection('specialdishes-section')}  className={location.pathname === '/specialdishes' ? 'active' : ''}>Dishes</Link>
               <Link to="/dishesfiltered" onClick={() => scrollToSection('dishesfiltered-section')} className={location.pathname === '/dishesfiltered' ? 'active' : ''}>Menu</Link>
               <Link to="/checkout" onClick={() => scrollToSection('checkout-section')} className={location.pathname === '/checkout' ? 'active' : ''}>Checkout</Link>
                </div>
            </div>
            <div className='hero-content'>
                <div className='left'>
                    <h2>SIMPLE RECIPES MADE FOR</h2>
                    <h4>real, actual, everyday life</h4>
                </div>
                <div className='right'>

                </div>
            </div>
        </div>
    )


}

export default Hero 