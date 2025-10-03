import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition-all z-50 ${
        show ? "bg-black bg-opacity-80" : "bg-transparent"
      }`}
    >
      <div className="text-white text-lg font-semibold">Flystudio</div>
    </nav>
  );
};

export default Navbar;
