import React from 'react'
import SquareComponent from './squares'
import './all.css'

class BoardComponent extends React.Component
{
    
    renderSquare(i)
    {
        return(
            <SquareComponent value={this.props.sqValue[i]} position={i} handleClick={this.props.handleClick} /> 
        )
    }

    render()
    {
        console.log(this.props.sqValue)
            return(
        <div>
            <div className='board-row'>
               {this.renderSquare(0)}
               {this.renderSquare(1)}
               {this.renderSquare(2)}
            </div>

            <div className='board-row'>
               {this.renderSquare(3)}
               {this.renderSquare(4)}
               {this.renderSquare(5)}
            </div>

            <div className='board-row'>
               {this.renderSquare(6)}
               {this.renderSquare(7)}
               {this.renderSquare(8)}
            </div>

       
       </div>
    )

    }


}

export default BoardComponent