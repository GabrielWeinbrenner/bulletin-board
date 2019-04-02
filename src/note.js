import React, {Component} from 'react'
// import FaPencil from 'react-icons/lib/fa/pencil'
// import FaTrash from 'react-icons/lib/fa/trash'
class note extends Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false
        }
        this.save = this.save.bind(this)
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }
    edit(){
        this.setState({
            editing: true
        })
    }
    remove(){
        alert('removing note')
    }
    save(){
        e.preventDefault()
        this.props.onChange(this._newText.value, this.props.index)
        this.setState({
            editing: false
        })
    }
    renderForm(){
        return(
            <div className="note">
                <form onSubmit={this.save}>
                    <textarea ref = {input => this._newText = input}/>
                    <button onClick = {this.save}>Save</button>
                </form>
            </div>
        )
    }
    renderDisplay() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button id = "edit" onClick = {this.edit}>Edit</button>
                    <button id = "remove" onClick = {this.remove}>Remove</button>
                </span>
            </div>
        )
    }
    render(){
        return this.state.editing ? this.renderForm() : this.renderDisplay()
    }
}

export default note