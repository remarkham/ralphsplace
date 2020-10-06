import axios from "axios";
import React, { useState, useEffect } from "react";
import Items from "./Items";

function Shop() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        await axios.get("https://fortnite-api.theapinetwork.com/upcoming/get")
            .then((response) => {
                setItems(response.data.data);
            });
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="header col align-self-center">Fortnite Up &amp; Coming</div>
            </div>
            <Items items={items} />
        </div>
    );
}

export default Shop;