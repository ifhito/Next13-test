import { Suspense } from "react"
import { Test1 } from "./test1.server"
export async function Test({ children }) {
    
    return (
        <div>
            <Test1 />
            {children}
        </div>
    )
}