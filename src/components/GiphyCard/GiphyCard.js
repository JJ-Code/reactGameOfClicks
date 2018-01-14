import React from "react";
import "./Giphy.css";

const GiphyCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectGiphy(props.name)}
                className={props.currentScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.name} src={props.gif} />
            </a>
        </div>
    </div>
);

export default GiphyCard;
