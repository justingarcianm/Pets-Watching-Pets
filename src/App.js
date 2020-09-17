import React from 'react';
import Axios from 'axios'

import './assets/tailwind.output.css';

function App() {

  Axios.get(`${process.env.REACT_APP_API_URL}/videos`)
  .then(res => console.log(res.data))

  return (
<div>
  <h1 className="text-red-300">Hello World</h1>
</div>
  );
}

export default App;
