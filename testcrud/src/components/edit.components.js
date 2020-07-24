import React, {Component} from 'react';
import axios from 'axios';

export default class Edit extends Component{
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            class: '',
            age: ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/persons/edit/' + this.props.match.params.id).then(
            response => {
                this.setState({
                    name: response.data.name,
                    class: response.data.class,
                    age: response.data.age
                });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeClass(e){
        this.setState({
            class: e.target.value
        });
    }

    onChangeAge(e){
        this.setState({
            age: e.target.value
        });
    }

    async onSubmit(e){
        e.preventDefault();
        const obj = {
            name: this.state.name,
            class: this.state.class,
            age: this.state.age
        };
        const rs = await axios.post('http://localhost:4000/persons/update/' + this.props.match.params.id, obj); 
        // .then(res => console.log('fgefuywgefk',res));
        console.log("Edit -> onSubmit -> rs", rs)
        this.setState({
            name: rs.name,
            class: rs.class,
            age: rs.age
        })

        this.props.history.push('/index');
    }

    render(){
        return(
            <div style={{marginTop: 10}}>
                <h2 align="center">Update Persons</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name : </label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Class : </label>
                        <input type="text" className="form-control" value={this.state.class} onChange={this.onChangeClass} />
                    </div>
                    <div className="form-group">
                        <label>Age : </label>
                        <input type="text" className="form-control" value={this.state.age} onChange={this.onChangeAge} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update" onChange={this.onSubmit} className="btn btn-success" />
                    </div>
                </form>
            </div>
        )
    }
}