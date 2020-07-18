import React from 'react';
import Input from './components/input'
import Person from './patterns/signup'
import Button from './components/button'

function App() {
  return (
    <div>
      <center>
        
      <p>signup</p>
      <Person type='text'/>
      <p>Reset password</p>
      <Input type='number' />
       <Button type='button'/>
      </center>
    </div>
  
  );
}

export default App;
