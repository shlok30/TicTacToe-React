import React from 'react'
import BoardComponent from './board'

class GameComponent extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            xIsNext:true,
            value:Array(9).fill(null),
            won:null
        }

        this.handleClick = this.handleClick.bind(this)

        
    }

    handleClick(_sqNumber)
    {
        let temp = this.state.value.slice()
        if(temp[_sqNumber] || this.state.won)
        {
            return
        }

        if(this.state.xIsNext)
        {
            temp[_sqNumber] = 'X'
            this.setState(
                {
                    value:temp,
                    xIsNext: !this.state.xIsNext
                }
            )
        }
        else
        {
            temp[_sqNumber] = 'O'
            this.setState(
                {
                    value:temp,
                    xIsNext: !this.state.xIsNext
                }
            )
        }

       if( this.winner(temp)>=0 )
       {
           const value = this.winner(temp) 
           console.log(temp[value],'is the winner from handleclick')
           this.setState(
               {
                   won:temp[value]
               }
           )
       }



    }

    winner(_sq)
    {
        const lines =[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for(let i = 0;i<lines.length;i++)
        {
            const [a,b,c] = lines[i]
            if(_sq[a] && _sq[a] === _sq[b] && _sq[a] === _sq[c])
            {
               console.log(i,'was the line number')
                return a
            }
        }
        

    }
    
    render()
    {
        
     return(
         <div>
            <BoardComponent sqValue={this.state.value} handleClick={this.handleClick} />
            <h3>Winner is {this.state.won}</h3>
        </div>

     )   
    }
}

export default GameComponent