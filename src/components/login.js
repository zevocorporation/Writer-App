import React from 'react';
import Input from './input';
import Button from './button';

function login() {
    return (
      <div>
        
        <Input type='number' />
        <Input type='password' />
        <Button value='logout' />
        
      </div>
    );
  }
  
  export default login;
  