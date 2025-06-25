import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
`;

export const FormContainer = styled.form`
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 10px;
  }

  label {
    font-weight: 500;
    margin-bottom: 4px;
  }

  input {
    padding: 10px 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    transition: 0.3s;

    &:focus {
      border-color: #4caf50;
      outline: none;
      box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
    }
  }

  button {
    padding: 12px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      background-color: #388e3c;
      cursor: pointer;
    }
  }
`;

export const Text = styled.p`
  margin-top: 10px;
  text-align: center;

  a {
    color: #4caf50;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
