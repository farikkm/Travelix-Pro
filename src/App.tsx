import MenuButton from "./components/ui/MenuButton";

const App = () => {
  return (
    <div className="wrapper">
      <header className="header-container ">
        <a href="/" className="header-logo">
          <span className="text-sun-700">Travelix</span>
          <span className="text-gray-900">Pro</span>
        </a>
        <nav className="flex gap-8 md:gap-[52px] items-center">
          <ul className="flex gap-10 max-lg:hidden">
            <li className="menu-item">
              <a href="/">Tour's</a>
            </li>
            <li className="menu-item">
              <a href="/">Services</a>
            </li>
            <li className="menu-item">
              <a href="/">Packege</a>
            </li>
            <li className="menu-item">
              <a href="/">About Us</a>
            </li>
            <li className="menu-item">
              <a href="/">Sign In</a>
            </li>
          </ul>
          <button className="header-button">Sign Up</button>
          <div className="hidden max-lg:block">
            <MenuButton />
          </div>
        </nav>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default App;
