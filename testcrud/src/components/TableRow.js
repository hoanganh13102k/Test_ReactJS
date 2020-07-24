import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
    }
    async delete(){
        const rs = await axios.get('http://localhost:4000/persons/delete/' + this.props.obj._id);
        // .then(console.log('Deleted')).catch(err => console.log(err));

        console.log('deleted',rs);
        
        
    }


    render(){
        console.log(this.state)
        return(
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.class}
                </td>
                <td>
                    {this.props.obj.age}
                </td>
                <td>
                    <Link to={"/edit/" + this.props.obj._id} className="btn btn-info">Edit</Link>
                    <button style={{ marginLeft:8 }} onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;