import React, { Component } from 'react'

const Search = props => {
    return (
<form className="search" onSubmit={props.searchPokemon}>
            <input
                value={props.search.name}
                onChange={event => props.handleSearchChange('name', event.target.value)}
                type="text"
                placeholder="name"
            />
            <input type="submit" value="Search" />
        </form>
    )
}

export default Search