import React from 'react'
import './all.css'

function SquareComponnent(props)
{
    console.log(props.position)
    return(
        <button className="square" onClick={() => props.handleClick(props.position)}>{props.value}</button>
    )
}

export default SquareComponnent