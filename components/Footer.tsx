import React from "react";

export default function Footer() {
  return (
    
    <footer className=" text-gray-400 bg-gray-950 shadow p-4 ">
      Copyright &#169; {(new Date().getFullYear())} Shiva Community
      <br />
      <div className="hidden">
        MADE WITH ❤️ BY <a href="https://github.com/crysosancher">Crysosancher</a>
      </div>
    </footer>
  );
}