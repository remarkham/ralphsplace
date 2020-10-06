import React from "react";

const Items = (props) => (
    <div className="row">
        {props.items.map((obj) => 
            <Item key={obj.itemId} item={obj.item} />)}
    </div>
);

const Item = (props) => (
    <div className="card align-self-center col-12 col-sm-8 col-md-6 col-lg-3 h-100">
        <img className="card-img-top" src={props.item.images.icon} />
        <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <p className="card-text">
            {props.item.description}
            </p>
        </div>
    </div>
);

export default Items;