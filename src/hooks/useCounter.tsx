import { useState } from "react";


export default function useCounter(initialCondition: number) {
    const [counter, setCounter] = useState<number>(initialCondition)
    const [liked, setLiked] = useState<boolean>(false)

    function increment() {
        if (!liked) {
            setCounter((currentState) => currentState+1)
            setLiked(true)
        }
    }

    return {counter, increment}
}