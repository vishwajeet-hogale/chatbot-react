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
        console.log("in it")
        if(this.state.msg != ''){
            console.log("in it")
            axios.post('http://127.0.0.1:5000/user',{'msg':this.state.msg})
            .then(res=>{
                console.log(res);
                let ch = this.state.chat;
                ch.push({from:"user","msg":this.state.msg})
                ch.push({from:"cbot","msg":res.data})
                this.setState({
                    chat:ch,
                    msg:''
                });
                console.log(this.state);
            })
            .catch(err=>console.log(err));
        }
    }
    render(){
    return (
      
        <div className=" message container">
            <div className = "message div1">
                {
                    this.state.chat.map((msg)=>{
                        if(msg.from === 'cbot'){
                            return <div className="bot">
                                {msg.msg}
                            </div>
                        }
                        else{
                            return <div className="user">
                                {msg.msg}
                            </div>
                        }
                    })
                }
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
