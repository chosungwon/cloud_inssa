import React, { Component } from 'react';

class Form extends Component{
    state = {
        id : '',
        pw : '',
        rp : '',
        fn : '',
        ln : '',
        birth : '',
        e1 : '',
        e2 : '',
        ph : '',
        e_select : ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    selectChange = (e) => {
        this.setState({
             [this.state.e_select] :[e.target.value]
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
    }

    render(){
        return(
            <form  id={"sign"} name={"sign"} onSubmit={this.handleSubmit}>
                <div className={"sign_up_id"}>
                    <input type={"text"} name={"id"} className={"id"} placeholder={"아이디"} value={this.state.id} onChange={this.handleChange} maxLength={15}/>
                </div>
                <div className={"sign_up_pw"}>
                    <input type={"password"} className={"pw"} placeholder={"비밀번호"} value={this.state.pw} onChange={this.handleChange} name={"pw"}/>
                </div>
                <div className={"sign_up_rp"}>
                    <input type={"password"} className={"rp"} placeholder={"비밀번호 재확인"} value={this.state.rp} onChange={this.handleChange} name={"rp"}/>
                </div>
                <div className={"sign_up_name"}>
                    <input type={"text"} className={"fn"} placeholder={"성"} value={this.state.fn} onChange={this.handleChange} name={"fn"}/>
                    <input type={"text"} className={"ln"} placeholder={"이름"} value={this.state.ln} onChange={this.handleChange} name={"ln"}/>
                </div>
                <div className={"sign_up_birthday"}>
                    <input type={"text"} className={"birth"} placeholder={"주민등록번호 앞자리"} value={this.state.birth} onChange={this.handleChange} name={"birth"}/>
                </div>
                <div className={"sign_up_mail"}>
                    <input type={"text"} className={"mail"} placeholder={"이메일"} width={"270px"} value={this.state.e1} onChange={this.handleChange} name={"e1"}/>
                    <span className={"text"}>@</span>
                    <input className={"space"} type={"text"} width={"160px"} name={"e2"}/>
                    <select id={"e_select"} name={"e_select"} onChange={this.selectChange}>
                        <option value={"1"}>직접입력</option>
                        <option name="naver.com" id={"naver.com"} value={"naver.com"}>naver.com</option>
                        <option name="gmail.com" id={"gmail.com"} value={"gmail.com"}>gmail.com</option>
                        <option name="nate.com" id={"nate.com"} value={"nate.com"}>nate.com</option>
                    </select>
                </div>
                <div className={"sign_up_phonenumber"}>
                    <input className={"pn"} type={"text"} placeholder={"전화번호"} value={this.state.ph} onChange={this.handleChange} name={"ph"}/>
                </div>
                <div className={"sign_up_join"}>
                    <button className={"join"}>Sign Up</button>
                </div>
            </form>
        )
    }
}

export default Form;