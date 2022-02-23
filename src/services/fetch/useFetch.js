import axios from "axios";
import { useState, useEffect } from "react";

import { API } from "../../constants";

export function useFetch(url, method = 'get') {
    const [ data, setData ] = useState(null)

    useEffect(() => {
    
        API.get(url)
        .then(response => {
            setData(response.data)
        })

    }, [])

    return { data }
}