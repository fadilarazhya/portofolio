import type { ReactNode } from "react"
import "./Tooltip.css"

type TooltipPosition = "top" | "bottom" | "left" | "right"

type TooltipProps = {
    children: ReactNode
    content: string
    position?: TooltipPosition
    className?: string
}

const Tooltip = ({
    children,
    content,
    position = "top",
    className = "",
}: TooltipProps) => {
    //NOTE: Determine position class
    let positionClass = "tooltip-content--top"

    if (position === "bottom") {
        positionClass = "tooltip-content--bottom"
    }

    if (position === "left") {
        positionClass = "tooltip-content--left"
    }

    if (position === "right") {
        positionClass = "tooltip-content--right"
    }

    return (
        <div className={`tooltip-wrapper ${className}`}>
            {children}
            <div className={`tooltip-content ${positionClass}`}>
                {content}
                <div className="tooltip-arrow" />
            </div>
        </div>
    )
}

export default Tooltip