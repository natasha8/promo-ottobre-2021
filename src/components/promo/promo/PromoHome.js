import React, { useEffect, useState } from "react";
import { firestore } from "../../util/firebase";
import PromoList from "./PromoList";
import { Loader, Message } from "semantic-ui-react";
import "./Promo.css";

const PromoHome = () => {
	const [promo, setPromo] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const getPromo = () => {
		setLoading(true);
		firestore
			.collection("Promo")
			.orderBy("id", "desc")
			.onSnapshot((snapshot) => {
				try {
					const newPromo = snapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					}));
					setPromo(newPromo);
					console.log("newPromo:", newPromo);
					setError(false);
				} catch {
					setError(true);
				}
			});
	};
	useEffect(() => {
		getPromo();
	}, []);
	return (
		<div className="promo_home">
			{error && <Message loading header="Failed to fetch" />}
			{!promo && loading && <Loader />}
			{promo && <PromoList card={promo} />}
		</div>
	);
};

export default PromoHome;
