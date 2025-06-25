import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import * as S from "./styled";

import { Link } from "react-router";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(5, "Họ và tên phải chứa ít nhất 5 ký tự ")
      .required("Vui lòng nhập tên"),
    email: yup
      .string()
      .email("Email không hợp lệ")
      .required("Vui lòng nhập email"),
    password: yup
      .string()
      .min(6, "Mật khẩu phải chứa ít nhất 6 ký tự ")
      .required("Vui lòng nhập mật khẩu"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Mật khẩu không khớp")
      .required("Vui lòng nhập lại mật khẩu"),
    isAdmin: yup.boolean(),
  })
  .required();

function Register({ setUsers, users }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    const newUser = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      isAdmin: data.isAdmin || false,
    };

    setUsers([...users, newUser]);

    alert("Đăng ký thành công!");
    reset();
  };

  return (
    <S.RegisterContainer>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h1>Đăng ký</h1>

        <label htmlFor="">Full Name</label>
        <input {...register("fullName")} placeholder="Full Name" />
        <p style={{ color: "red" }}>{errors.fullName?.message}</p>

        <label htmlFor="">Email</label>
        <input {...register("email")} placeholder="Email" />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        <label htmlFor="">Password</label>
        <input
          {...register("password")}
          type="password"
          placeholder="Mật khẩu"
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>

        <label htmlFor="">Confirm Password</label>
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Nhập lại mật khẩu"
        />
        <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>

        <label>
          <input type="checkbox" {...register("isAdmin")} /> Admin
        </label>

        <button type="submit">Đăng ký</button>
        <S.Text>
          Bạn đã có tài khoản ? <Link to="/login">Đăng nhập</Link>
        </S.Text>
      </S.FormContainer>
    </S.RegisterContainer>
  );
}

export default Register;
