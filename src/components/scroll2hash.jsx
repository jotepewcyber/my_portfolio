import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
	const { hash } = useLocation();

	useEffect(() => {
		if (hash) {
			const el = document.querySelector(hash);
            //el finds the thing with id hash
			if (el) {
				// small timeout to allow control to go back to / from /contact  
				setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
			}
		}
	}, [hash]);

	return null;
}
