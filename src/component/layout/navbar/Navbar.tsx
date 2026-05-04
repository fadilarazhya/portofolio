import { useState } from "react"
import NavLink from "../navlink/Navlink"
import Toggle from "../../ui/toggle/Toggle"
import useScroll from "../../../hooks/useScroll"
import "./Navbar.css"

const NAV_ITEMS = [
    { href: "#about", label: "About" },
    { href: "#project", label: "Project" },
    { href: "#design-process", label: "Design Process" },
    { href: "#tools", label: "Tools" },
    { href: "#contact", label: "Contact" },
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { visible } = useScroll()

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    //NOTE: Determine visibility class
    let visibilityClass = "navbar--hidden"
    if (visible) {
        visibilityClass = "navbar--visible"
    }

    //NOTE: Determine menu class
    let menuClass = "navbar-menu navbar-menu--closed"
    if (isMenuOpen) {
        menuClass = "navbar-menu navbar-menu--open"
    }

    return (
        <nav className={`navbar ${visibilityClass}`}>
            <div className="navbar-container">
                <a href="/" className="navbar-brand">
                    Fadila Razhya
                </a>

                {/* NOTE: Mobile wrapper - hamburger menu only, Toggle moved to menu list */}
                <div className="navbar-mobile-wrapper">
                    <button
                        onClick={handleToggleMenu}
                        type="button"
                        className="navbar-toggle"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                <div className={menuClass} id="navbar-sticky">
                    <ul className="navbar-list">
                        {NAV_ITEMS.map((item) => (
                            <NavLink key={item.href} href={item.href}>
                                {item.label}
                            </NavLink>
                        ))}
                        <li>
                            <Toggle />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar