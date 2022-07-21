import React ,{ Component } from 'react';
class AddItems extends Component{
    state={
        name: '',
        age : ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmite = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState ({
            name:'',
            age:''
        
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmite}>
                    <input type= "text" placeholder='Enter name ...' id='name' onChange={this.handleChange} value={this.state.name}/>
                    <input type= "number" placeholder='Enter age ...' id='age' onChange={this.handleChange} value={this.state.age}/>
                    <input type= "submit" value='Add'/>
                </form>
              
            </div>
        )
    }
}

export default AddItems