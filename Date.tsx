import type { ComponentType } from "react"
import { useEffect, useState } from "react"
import {
    withDate,
    withSpecificTimeZone,
    withTimeHM,
    withTimeHMS,
} from "./Date.tsx"

export function withDate(Component): ComponentType {
    return (props) => {
        const currentDate = new Date()
        const formattedDate = currentDate.toLocaleDateString("en-US", {
            year: "numeric",
        })

        return <Component {...props} text={formattedDate} />
    }
}

export function withTimeHM(Component): ComponentType {
    return (props) => {
        const [currentTime, setCurrentTime] = useState(null)

        useEffect(() => {
            setCurrentTime(new Date())

            const timer = setInterval(() => {
                setCurrentTime(new Date())
            }, 1000)

            return () => {
                clearInterval(timer)
            }
        }, [])

        const formattedTime = currentTime
            ? currentTime.toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
              })
            : "Loading..."

        return <Component {...props} text={formattedTime} />
    }
}

export function withTimeHMS(Component): ComponentType {
    return (props) => {
        const [currentTime, setCurrentTime] = useState(null)

        useEffect(() => {
            setCurrentTime(new Date())

            const timer = setInterval(() => {
                setCurrentTime(new Date())
            }, 1000)

            return () => {
                clearInterval(timer)
            }
        }, [])

        const formattedTime = currentTime
            ? currentTime.toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: true,
              })
            : "Loading..."

        return <Component {...props} text={formattedTime} />
    }
}

export function withSpecificTimeZone(Component): ComponentType {
    return (props) => {
        const [currentTime, setCurrentTime] = useState(null)

        useEffect(() => {
            setCurrentTime(new Date())

            const timer = setInterval(() => {
                setCurrentTime(new Date())
            }, 1000)

            return () => {
                clearInterval(timer)
            }
        }, [])

        const formattedTime = currentTime
            ? currentTime.toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                  second: "2-digit",
                  timeZone: "America/Toronto",
                  hour12: true,
              })
            : "Loading..."

        return <Component {...props} text={formattedTime} />
    }
}
