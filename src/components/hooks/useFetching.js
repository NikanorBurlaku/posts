import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const fetching = async (...args) => {
        try {
            await callback(...args);
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false);
        }
    }
    return [fetching, isLoading, error];
}