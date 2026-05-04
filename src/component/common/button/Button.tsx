import type { ReactNode, MouseEventHandler } from "react"
import "./Button.css"

type ButtonVariant = "outline" | "solid"

type ButtonProps = {
    children: ReactNode
    variant?: ButtonVariant
    href?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string
}

const Button = ({
    children,
    variant = "outline",
    href,
    onClick,
    className = "",
}: ButtonProps) => {
    const variantClass = variant === "outline" ? "btn-outline-teal" : "btn-solid-teal"

    //NOTE: If href exists, render as anchor link
    if (href) {
        return (
            <a href={href} className={`btn-base ${variantClass} ${className}`}>
                <span className="btn-inner">{children}</span>
            </a>
        )
    }

    return (
        <button onClick={onClick} className={`btn-base ${variantClass} ${className}`}>
            <span className="btn-inner">{children}</span>
        </button>
    )
}

export default Button