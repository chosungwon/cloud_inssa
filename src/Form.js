import React, {Component} from 'react';

class Form extends Component {
    state = {
        id: '',
        pw: '',
        rp: '',
        na: '',
        birth: '',
        e1: '',
        e2: '',
        ph: '',
        e_select: '',
        checkId: '',
        checkPw: '',
        checkRp: '',
        checkNa: '',
        checkBi: '',

        idColor: '',
        pwColor: '',
        rpColor: '',
        naColor: '',
        biColor: '',
    }
    handleChange = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        })

        const id = this.state.id;
        const idType = /^[a-z0-9]{5,20}$/;
        const pw = this.state.pw;
        const pwType = /^[a-z0-9]{8,16}/;
        const pwType2 = /[~!@#$%^&*()_+|<>?:{}]/;
        const rp = this.state.rp;
        const na = this.state.na;
        const naType = /^[a-zA-Z/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        const birth = this.state.birth;
        const biType = /[0-9]{6}/;

        if (idType.test(id)) {
            this.setState({
                checkId: '멋진 아이디입니다!',
                idColor: 'green'
            })
        }
        else if(!idType.test(id)) {
            this.setState({
                checkId: '아이디는 4~12영어 숫자포함입니다',
                idColor: 'red'
            })
        }

        if (pwType.test(pw) || pwType2.test(pw)) {
            this.setState({
                checkPw: '멋진 비밀번호입니다!',
                pwColor: 'green'
            })
        }
        else if(!pwType.test(pw)) {
            this.setState({
                checkPw: '비밀번호는 8~16 영어 숫자 특수문자 포함입니다.',
                pwColor: 'red'
            })
        }

        if (pw === rp) {
            this.setState({
                checkRp: '비밀번호가 일치합니다',
                rpColor: 'green'
            })
        }
        else{
            this.setState({
                checkRp: '비밀번호가 일치하지않습니다',
                rpColor: 'red'
            })
        }

        if(naType.test(na)){
            this.setState({
                checkNa: '까리한 이름이네요',
                naColor: 'green'
            })
        }
        else{
            this.setState({
                checkNa: '이름은 영어나 한글만들어갈수있습니다.',
                naColor: 'red'
            })
        }

        if(biType.test(birth)){
            this.setState({
                checkBi: '생일통과!',
                biColor: 'green'
            })
        }
        else{
            this.setState({
                checkBi: '주민등록번호 앞자리를 제대로 입력해주세요!',
                biColor: 'red'
            })
        }
    }

    selectChange = async (e) => { //이메일 셀렉트박스
        console.log(e.target.value)
        if (e.target.value === '') {
            await this.setState({
                e_select: e.target.value,
                e_Check: true
            })
        }
        else {
            await this.setState({
                e_select: e.target.value,
                e_Check: false
            })
        }
        await console.log(this.state.e_select)
    }
    email = (e) => { //이메일 직접입력
        const email = this.state.e_Check;
        if (email === true) {
            this.setState({
                e_select: e.target.value
            })
        }
    }
    render() {
        const underId ={
            color : this.state.idColor
        }
        const underPw = {
            color : this.state.pwColor
        }
        const underRp = {
            color : this.state.rpColor
        }
        const underNa = {
            color : this.state.naColor
        }
        const underBi = {
            color : this.state.biColor
        }
        let checkId = this.state.checkId;
        let checkPw = this.state.checkPw;
        let checkRp = this.state.checkRp;
        let checkNa = this.state.checkNa;
        let checkBi = this.state.checkBi;
        return (
            <form id={"sign"} name={"sign"}>
                <div className={"sign_up_id"}>
                    <input type={"text"} name={"id"} className={"id"} placeholder={"아이디"} value={this.state.id}
                           onChange={this.handleChange} maxLength={20}/>

                    <span style={underId}> {checkId}</span>
                </div>
                <div className={"sign_up_pw"}>
                    <input type={"password"} className={"pw"} placeholder={"비밀번호"} value={this.state.pw}
                           onChange={this.handleChange} name={"pw"} maxLength={"16"}/>
                    <span style={underPw}> {checkPw}</span>
                </div>

                <div className={"sign_up_rp"}>
                    <input type={"password"} className={"rp"} placeholder={"비밀번호 재확인"} value={this.state.rp}
                           onChange={this.handleChange} name={"rp"} maxLength={"16"}/>
                    <span style={underRp}> {checkRp}</span>
                </div>
                <div className={"sign_up_name"}>
                    <input type={"text"} className={"fn"} placeholder={"이름"} value={this.state.na}
                           onChange={this.handleChange} name={"na"} maxLength={"40"}/>
                    <span style={underNa}>{checkNa}</span>
                </div>
                <div className={"sign_up_birthday"}>
                    <input type={"text"} className={"birth"} placeholder={"주민등록번호 앞자리"} value={this.state.birth}
                           onChange={this.handleChange} name={"birth"} maxLength={"6"}/>
                    <span style={underBi}>{checkBi}</span>
                </div>
                <div className={"sign_up_mail"}>
                    <input type={"text"} className={"mail"} placeholder={"이메일"} width={"270px"} value={this.state.e1}
                           onChange={this.handleChange} name={"e1"}/>
                    <span className={"text"}>@</span>
                    <input className={"space"} type={"text"} width={"160px"} name={"e2"} value={this.state.e_select}
                           onChange={this.email}/>
                    <select id={"e_select"} name={"e_select"} onChange={this.selectChange}>
                        <option value={""}>직접입력</option>
                        <option name="naver.com" id={"naver.com"} value={"naver.com"}>naver.com</option>
                        <option name="gmail.com" id={"gmail.com"} value={"gmail.com"}>gmail.com</option>
                        <option name="nate.com" id={"nate.com"} value={"nate.com"}>nate.com</option>
                    </select>
                </div>
                <div className={"sign_up_phonenumber"}>
                    <input className={"pn"} type={"text"} placeholder={"전화번호"} value={this.state.ph}
                           onChange={this.handleChange} name={"ph"}/>
                </div>
                <div className={"sign_up_join"}>
                    <button className={"join"}>Sign Up</button>
                </div>
            </form>
        )
    }
}

export default Form;