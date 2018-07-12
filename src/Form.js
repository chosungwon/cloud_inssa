import React, { Component } from 'react';

class Form extends Component{

    render(){
        return(

            <form  id={"sign"} name={"sign"}>
                <div className={"sign_up_id"}>
                    <input type={"text"} className={"id"} placeholder={"Username"} onKeyUp={this.idChange} maxLength={15}/>
                </div>
                <div className={"sign_up_pw"}>
                    <input type={"password"} className={"pw"} placeholder={"Password"}/>
                </div>
                <div className={"sign_up_rp"}>
                    <input type={"password"} className={"rp"} placeholder={"Reconfirm Password"}/>
                </div>
                <div className={"sign_up_name"}>
                    <input type={"text"} className={"fn"} placeholder={"Firstname"}/>
                    <input type={"text"} className={"ln"} placeholder={"Lastname"}/>
                </div>
                <div className={"sign_up_birthday"}>
                    <input type={"text"} className={"birth"} placeholder={"주민등록번호 앞자리"}/>
                </div>
                <div className={"sign_up_mail"}>
                    <input type={"text"} className={"mail"} placeholder={"E-mail"} width={"270px"}/>
                    <span className={"text"}>@</span>
                    <input className={"space"} type={"text"} width={"160px"}/>
                    <select id={"e_select"} name={"e_select"}>
                        <option>naver.com</option>
                    </select>
                </div>
                <div className={"sign_up_phonenumber"}>
                    <input className={"pn"} type={"text"} placeholder={"Phone Number"}/>
                </div>
                <div className={"sign_up_join"}>
                    <button className={"join"}>Sign Up</button>
                </div>
            </form>
        )
    }
}

export default Form;