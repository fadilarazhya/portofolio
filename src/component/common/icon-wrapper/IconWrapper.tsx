import type { ReactNode } from "react"
import { useState } from "react"
import "./IconWrapper.css"

type IconWrapperProps = {
    children: ReactNode
    name: string
    href?: string
    size?: "sm" | "md" | "lg"
}

const IconWrapper = ({ children, name, href, size = "md" }: IconWrapperProps) => {
    const [isHovered, setIsHovered] = useState(false)

    //NOTE: Determine size class
    let sizeClass = "icon-wrapper--md"
    if (size === "sm") {
        sizeClass = "icon-wrapper--sm"
    }
    if (size === "lg") {
        sizeClass = "icon-wrapper--lg"
    }

    //NOTE: Determine tooltip visibility
    let tooltipClass = "icon-wrapper-tooltip"
    if (isHovered) {
        tooltipClass = "icon-wrapper-tooltip icon-wrapper-tooltip--visible"
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    //NOTE: Render with anchor if href is provided
    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`icon-wrapper group ${sizeClass}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
                <div className={tooltipClass}>
                    {name}
                    <div className="icon-wrapper-tooltip-arrow" />
                </div>
            </a>
        )
    }

    return (
        <div
            className={`icon-wrapper group ${sizeClass}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            <div className={tooltipClass}>
                {name}
                <div className="icon-wrapper-tooltip-arrow" />
            </div>
        </div>
    )
}

export default IconWrapper