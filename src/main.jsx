import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return React.createElement('div', { style: { color: 'white', padding: 40, fontSize: 32 } }, 'HELLO FROM REACT')
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App))
