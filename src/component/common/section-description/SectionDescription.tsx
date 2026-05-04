import type { ReactNode } from "react"
import "./SectionDescription.css"

type SectionDescriptionProps = {
    children: ReactNode
    className?: string
}

const SectionDescription = ({ children, className = "" }: SectionDescriptionProps) => {
    return <p className={`section-description ${className}`}>{children}</p>
}

export default SectionDescription