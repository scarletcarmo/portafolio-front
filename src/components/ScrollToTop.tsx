import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToBottom = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    }, [pathname])

    return null;

}

export default scrollToBottom 
