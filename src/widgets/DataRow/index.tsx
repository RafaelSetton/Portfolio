import React from "react";
import './styles.css';

import { IconType } from 'react-icons';

interface DataRowProps {
    icon: IconType,
    text?: string,
    href?: string,
}

function DataRow(props: DataRowProps) {
    return (
        <div>
            <a href={props.href}>
                <div className="data-row">
                    <props.icon></props.icon>
                    <p>{props.text}</p>
                </div>
            </a>
        </div>
    );
}

export default DataRow;