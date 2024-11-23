const NavBar = () => {
  return (
    <nav className="NavBar">
      <img
        src="src\assets\logo 2.png"
        alt="Barista Brews Logo"
        className="Logo"
      />
      <div className="NavLinks">
        <a href="src/Pages/About.tsx" className="Link">
          About Us
        </a>
        <a href="src/Pages/Feedback.tsx" className="Link">
          Suggest a Drink
        </a>
        <a href="src/Pages/Feedback.tsx" className="Link">
          Feedback
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
