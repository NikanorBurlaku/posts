import { useMemo } from "react"

export const usePagination = (totalPages) => {
    const pagesArray = useMemo(() => {
        let result = [];

        for (let i = 1; i <= totalPages; i++) {
            result.push(i);
        }

        return result;
    }, [totalPages])

    return pagesArray;
}