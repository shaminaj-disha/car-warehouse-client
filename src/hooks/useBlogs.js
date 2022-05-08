import { useEffect, useState } from "react";

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-tundra-60480.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);
    return [blogs, setBlogs]
};

export default useBlogs;