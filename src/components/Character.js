import React from "react";

export default function Character(props) {
    const {name, birth_year, height, mass, homeworld, species} = props;
    return (
        <tr>
            <td>{name}</td>
            <td>{birth_year}</td>
            <td>{height}</td>
            <td>{mass}</td>
            <td>{homeworld}</td>
            <td>{species}</td>
        </tr>
    )
} 