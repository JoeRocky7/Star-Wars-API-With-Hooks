import React, { Component } from 'react'
import Character from "./Character";

class Table extends Component {
    render() {
        const allCharacters = this.props.characters.map((character => {
            return (
                <Character {...character}/>
            )
        }))

        return (
            <div>
                <table className="table">
                    <thead className="thead">
                        <td>Name</td>
                        <td>Birth Year</td>
                        <td>Height</td>
                        <td>Mass</td>
                        <td>Homeworld</td>
                        <td>Species</td>
                    </thead>
                    <tbody>
                        {this.props.isLoading ? <h1>Loading...</h1>
                            : allCharacters}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table