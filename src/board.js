import React, { Component } from 'react'
import Note from './note'

class Board extends Component {
    constructor(props) {
        super(props)

        /* dynamic and interactive data */
        this.state = {
            notes: [{
                    id: 33,
                    note: 'Call Lisa'
                },
                {
                    id: 34,
                    note: 'Email John'
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this)
    }
    update(newText, i) {
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i) ? note /* If note updating note then return as is */  
                : {...note, note: newtext }
            )
        }))
    }
    eachNote(note, i) {
        /* returns the content of the note itself */
        return ( <
            Note key = { i }
            index = { i } > { note.note } 
            </Note>
        )
    }
    render() {
        return ( 
            <div className = "board" >
            /* Sends an array of notes onto board */
            { this.state.notes.map(this.eachNote) } 
            </div>
        )
    }
}


export default Board