import React from "react";
import './styles.css';
import getLanguages from "../../helpers/getLanguages";

var languages = getLanguages("RafaelSetton");


function TechsGrid() {
    var used: string[] = [];
    return (<div className="grid">
        {
            languages.map(lang => {
                if (used.includes(lang) || !(lang?.length > 0)) return null;
                used.push(lang)
                return (<div className="TechTile" key={lang}>{lang}</div>);
            })
        }
    </div>)
}

export default TechsGrid;