import React from 'react'

export class Login extends React.Component {
  onRegister() {

  }

  render() {
    const items = [{
      label: '用户名',
      value: ''
    }, {
      label: '密码',
      value: ''
    }]

    return (
      <div className="login">
        {
          items.map(item => (
            <div>
              <label>{item.label}</label>
              <input value={item.value}/>
            </div>
          ))
        }
        <button onClick={onRegister}>注册</button>
      </div>
    )
  }
}