import React, { useState } from "react";
import * as S from "./styled";
import { Link, useNavigate } from "react-router";

export default function Login({ users }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert("Đăng nhập thành công!");
      localStorage.setItem("currentUser", JSON.stringify(user));

      if (user.isAdmin) {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } else {
      alert("Email hoặc mật khẩu không đúng!");
    }
  };

  return (
    <S.LoginContainer>
      <S.FormContainer onSubmit={handleSubmit}>
        <h1>Đăng nhập</h1>

        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <button>Đăng nhập</button>
        <S.Text>
          Bạn chưa có tài khoản ? <Link to="/register">Đăng ký</Link>
        </S.Text>
      </S.FormContainer>
    </S.LoginContainer>
  );
}
