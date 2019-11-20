import React from 'react';

export default function Main(props) {
    return (
        <h1>{props.match.params.id}</h1>
    );
}