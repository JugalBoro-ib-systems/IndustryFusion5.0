import React, {useEffect, useState, ChangeEvent } from 'react';
import { InputText } from 'primereact/inputtext';

function Login() {
  const [value, setValue]= useState<string>();
  return (
    <div>
      <InputText
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </div>
  );
}
export default Login;