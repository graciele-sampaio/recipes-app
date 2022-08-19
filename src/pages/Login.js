import React from 'react';

function Login() {
  return (
    <div>
      <input
        type="email"
        placehold="Email"
        data-testid="email-input"
      />
      <input
        type="password"
        placeholder="Password"
        data-testid="password-input"
      />
      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Enter
      </button>
    </div>

  );
}

export default Login;
