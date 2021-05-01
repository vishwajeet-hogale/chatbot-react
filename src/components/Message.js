import React from 'react'
import '../CSS/message.css'
import axios from 'axios'
class Message extends React.Component{
    state = {
        chat:[],
        msg:''
    }
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({msg:e.target.value});
    }
    handleSend = () =>{
        if(this.state.msg != ''){
            axios.post('http://127.0.0.1:5000/user',{'msg':this.state.msg}).then(res=>console.log(res)).catch(err=>console.log(err));
        }
    }
    render(){
    return (
      
        <div class=" message container">
            <div className = "message div1">

            </div>
            <div className="message div2">
                <input type="text" name = "msg" onChange={(e)=>this.handleChange(e)} className="form-control" value={this.state.msg} />
                <button className="btn btn-primary" onClick={()=>this.handleSend()}>Send</button>
            </div>
        </div>
        
    );
    }
}

export default Message;
