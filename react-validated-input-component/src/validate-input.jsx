import React, { useState } from 'react';

export default function ValidateInput() {
  const [password, setPassword] = useState(
    {
      currentPass: '',
      valid: false
    }
  );

  const handleChange = e => {
    const key = e.target.name;
    const newObj = { ...password };
    newObj[key] = e.target.value;
    if (newObj[key].length >= 8) newObj.valid = true; else newObj.valid = false;
    setPassword(newObj);
  };

  const invalidPassword = () => {
    if (password.currentPass.length > 0) return 'Your password is too short.';
    else return 'A password is required.';
  };

  return (
    <form>
      <label>
        <div className="row">
          <h1 className="margin-bottom-0">Password</h1>
        </div>
        <div className="row align-center">
          <input type="text" name='currentPass' value={password.currentPass} onChange={handleChange}/>
          <i className={password.valid ? 'fas fa-check' : 'fas fa-times'}></i>
        </div>
        <div className="row">
          {
            !password.valid &&
            <p className="red">{invalidPassword()}</p>
          }
        </div>
      </label>
    </form>
  );
}
