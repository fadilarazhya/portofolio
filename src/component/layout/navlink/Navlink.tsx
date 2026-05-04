import "./Navlink.css"

type NavlinkProps = {
    href: string
    children: string
    className?: string
}

const Navlink = ({ href, children, className = "" }: NavlinkProps) => {
    return (
        <li>
            <a href={href} className={`nav-link ${className}`}>
                {children}
            </a>
        </li>
    )
}

export default Navlink