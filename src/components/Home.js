import React from 'react'

export class Home extends React.Component {

  render() {

    const style = {
      'color': 'green',
      'fontSize': '20px',
      width: '200px'
    }
    const listStyle = {
      cursor: 'pointer'
    }

    const list = [1, 2, 3]

    return (
      <ul className="home" style={style}>
        {
          list.map(item => (<li style={listStyle}>{'文章' + item}</li>))
        }
      </ul>
    )
  }
}