import React, { Component } from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            nameAlert:'',
            emailAlert:'',
            submitStatus:'disabled'
        }
    }

    handleSubmit = (e) =>{
        //form submit
        e.preventDefault();
        this.setState({
            submitStatus: 'submit'
        })
    };

    handleChange = (e) =>{
        let { value, name } = e.target;
        this.setState({
                [name]: value
            });


        if(this.validateEmail() && this.validateName()){
            this.setState({
                submitStatus: 'valid'
            })
        } else{
            this.setState({
                submitStatus: 'disabled'
            })
        }
    };

    validateName(){
        let message = '';
        let valid=true;
        if(this.state.name.length < 8){
            message="Name must be at least 8 characters"
            valid=false;
        }
        this.setState({
            nameAlert: message
        });
        return valid;
    }

    validateEmail() {
        let message = '';
        let valid=true;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            message = 'Invalid email address';
            valid=false
        }

        this.setState({
            emailAlert: message
        });
        return valid;
    }

    render(){
        let buttonStyle=(this.state.submitStatus==='disabled')?'disabled':'';
        let displayContent;
        if (this.state.submitStatus === 'submit'){
            displayContent = (
                <div className="row">
                    <h3>Thank you!</h3>
                </div>
            )
        }else{
            displayContent = (
                <form id="form" onSubmit={this.handleSubmit}>
                    <div className="row ">
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" placeholder="Name" className="small-14 col" />
                        <p className="small-10 col">{this.state.nameAlert}</p>
                    </div>
                    <div className="row">
                        <input type="email" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Email" className="small-14 col" />
                        <p className="small-10 col">{this.state.emailAlert}</p>
                    </div>
                    <button className={"info button " + buttonStyle}>Submit</button>
                </form>
            )
        }
        console.log(displayContent);

        return(
            <div>
                {displayContent}
            </div>
        )
    }
}

export default Form;