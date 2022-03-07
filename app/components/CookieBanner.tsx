import { useEffect, useState } from "react"
import { useLocalStorage } from "usehooks-ts"

const useTimeout = (time = 500) => {
    const [timeoutReached, setTimoutReached] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTimoutReached(true)
        }, time)

        return () => {
            clearTimeout(timeoutId)
        }
    })

    return timeoutReached 
}

export const CookieBanner = () => {
    const hasReachedTimeout = useTimeout()
    const [hasAcceptedCookies, acceptCookies] = useLocalStorage('acceptCookies', false)
    const onAccept = () => {
        acceptCookies(true)
    }
    const onLeave = () => {
        window.history.back()
    }

    if (!hasReachedTimeout || hasAcceptedCookies) {
        return null
    }

    return (
        <div style={{ position: 'fixed', bottom: '0', right: '0', left: '0', background: 'white', color: 'black', padding: '32px' }}>
            <h4>Diese Website verwendet Cookies 🍪</h4>
            <p>Wie benützen Cookies um die Performance der Seite zu verbesseren. Wir tracken keine User daten.</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="btn btn-small" onClick={onLeave}>Seite verlassen</button>
                <button className="btn btn-small" onClick={onAccept}>Cookies Akzeptieren</button>
            </div>
        </div>
    )
}