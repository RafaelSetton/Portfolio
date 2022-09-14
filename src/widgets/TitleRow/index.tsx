import React from "react";
import Container from "../Container";
import './styles.css';

interface TitleProps {
    children?: React.ReactNode,
    title: string,
}

function TitleRow(props: TitleProps) {
    return (<Container className="row title-row">
        <h1>{props.title}</h1>
        {props.children}
    </Container>)
}

export default TitleRow;