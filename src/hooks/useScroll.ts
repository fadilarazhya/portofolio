import { useState, useEffect, useRef } from "react"

const useScroll = () => {
    const [visible, setVisible] = useState(true)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const isScrollingUp = currentScrollY < lastScrollY.current
            const isNearTop = currentScrollY < 10

            //NOTE: Show navbar when scrolling up or near top
            if (isScrollingUp) {
                setVisible(true)
            }

            if (isNearTop) {
                setVisible(true)
            }

            //NOTE: Hide navbar when scrolling down
            if (!isScrollingUp && !isNearTop) {
                setVisible(false)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return { visible }
}

export default useScroll