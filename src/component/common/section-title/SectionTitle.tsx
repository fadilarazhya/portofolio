import type { ReactNode } from "react"
import "./SectionTitle.css"

type SectionTitleProps = {
    children: ReactNode
    className?: string
}

const SectionTitle = ({ children, className = "" }: SectionTitleProps) => {
    return <h2 className={`section-title ${className}`}>{children}</h2>
}

export default SectionTitle