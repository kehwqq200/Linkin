import { useState } from "react";
import "./SignUp.css";

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <div className="su-page">
        <div className="su-card">
          <h1>You’re in, {form.name.split(" ")[0]}</h1>
          <p>Your account is ready.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="su-page">
      <form className="su-card" onSubmit={submit}>
        <h1>Sign up</h1>
        <p>Create your account in a minute.</p>

        <input name="name" placeholder="Full name" value={form.name} onChange={change} required />
        <input name="email" type="email" placeholder="Email address" value={form.email} onChange={change} required />

        <div className="su-pw">
          <input
            name="password"
            type={show ? "text" : "password"}
            placeholder="Password"
            minLength={8}
            value={form.password}
            onChange={change}
            required
          />
          <button type="button" onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
          </button>
        </div>

        <button className="su-submit" type="submit">Create account</button>
        <small>Already have an account? <a href="#">Log in</a></small>
      </form>
    </div>
  );
                                                       }
