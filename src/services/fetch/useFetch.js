import { useState, useEffect } from "react";

import { API } from "../../constants";
import { toast } from "react-toastify";

export function useFetch(url) {
    const [ data, setData ] = useState(null)

    useEffect(() => {
    
        API.get(url)
        .then(response => {
            setData(response.data)
        })
        .catch(err => {
            toast.error('A conexão foi perdida.')
        })

    }, [])

    return { data }
}