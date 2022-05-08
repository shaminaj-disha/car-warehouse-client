import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://afternoon-tundra-60480.herokuapp.com/items')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setLoading(false);
            });
    }, []);
    return [items, setItems, isLoading, setLoading];
}

export default useItems;
