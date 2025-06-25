import React, { useEffect, useState } from "react";

// styled components
import * as S from "./styled";

import { useNavigate } from "react-router"; // Chú ý đúng import

export default function Header() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <S.HeaderContainer>
      <img src="https://placehold.co/40x40" alt="" />
      <h2>{currentUser ? currentUser.fullName : "Guest"}</h2>

      {currentUser ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={() => navigate("/login")}>Login</button>
      )}
    </S.HeaderContainer>
  );
}
