"use client"

import { useEffect } from "react"

export default function Error({error, reset}: {error: Error, reset: () => void}) {
    useEffect(() => {
        console.error(error);
    }, [error]);;
    return (
        <>
        <div className="text-center h-screen align-middle m-4">
            <div className="align-middle">
            <h2 className="m-5 ">Something whent wrong!</h2>
            <button className="p-3 bg-red-500 rounded-xl text-white" onClick={() => (reset())}>Try Again</button>
            </div>
        </div>
        </>
    )}
