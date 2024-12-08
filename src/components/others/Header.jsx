import React from "react";

const Header = ({ employeeName, onLogout }) => {
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-semibold">
        Hello, {employeeName}! <span role="img" aria-label="wave">👋</span>
      </h1>
      <button
        onClick={onLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
