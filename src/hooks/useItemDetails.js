import { useEffect, useState } from "react";

const useItemDetails = itemId => {
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/items/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemId]);
    return [item, setItem];
}

export default useItemDetails;