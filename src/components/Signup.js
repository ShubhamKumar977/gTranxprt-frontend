import React from 'react';
import Layout from './Layout';
import { useState } from 'react';
import '../styles/signup.css';

export default function Signup() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
    console.log('user: ', user);
  };

  return (
    <div>
      <Layout>
        <div className="form-container">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
}
