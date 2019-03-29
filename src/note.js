import React, {Component} from 'react'
// import FaPencil from 'react-icons/lib/fa/pencil'
// import FaTrash from 'react-icons/lib/fa/trash'
class note extends Component {
    constructor(props){
        super(props)
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
    }
    edit(){
        alert('editing note')
    }
    remove(){
        alert('removing note')
    }
    render() {
        return (
            <div className="note">
                <p>Learn react</p>
                <span>
                    <button id = "edit" onClick = {this.edit}>Edit</button>
                    <button id = "remove" onClick = {this.remove}>Remove</button>
                </span>
            </div>
        )
    }
}

export default note