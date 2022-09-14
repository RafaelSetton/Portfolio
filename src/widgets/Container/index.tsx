import React from "react";
import './styles.css';

interface ContainerProps {
    children?: React.ReactNode,
    id?: string,
    className?: string,
}

function Container(props: ContainerProps) {
    return (
        <div className={`Container ${props.className}`} id={props.id}>
            {props.children}
        </div>
    )
}

export default Container;