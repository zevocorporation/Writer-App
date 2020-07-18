import React from 'react';
<<<<<<< HEAD
import Input from './components/input';
// import Navlink from './components/navlink';
// import Login from './components/login';
=======
import Input from './components/input'
import Person from './patterns/signup'
import Button from './components/button'
>>>>>>> 5e8d2d69166cc6609009be63dbb2dfdeedaff758

function App() {
  return (
    <div>
<<<<<<< HEAD
      <p>App</p>
      <Input type='h' />
      {/* <Navlink /> 
      <Login />  */}
=======
      <center>
        
      <p>signup</p>
      <Person type='text'/>
      <p>Reset password</p>
      <Input type='number' />
       <Button type='button'/>
      </center>
>>>>>>> 5e8d2d69166cc6609009be63dbb2dfdeedaff758
    </div>
  
  );
}

export default App;
