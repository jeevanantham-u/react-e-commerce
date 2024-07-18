import '../../styles/header.css';
import { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../assets/images/AatralLogo_New.png';
import { NavLink } from "react-router-dom";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Batteries",
    path: "/batteries",  // Corrected path casing
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className='nav__logo'>
            <img src={logo} alt="Logo" />
          </div>
          <div className="navigation">
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, i) => (
                <NavLink
                  to={item.path}
                  key={i}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          <div className='nav__right'>
            <span className="cart__icon">
              <i className="ri-shopping-basket-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header;
