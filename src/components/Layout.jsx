import Player from "./Player";
import Sidebar from "./Sidebar";
import Logo from "./Logo";
const Layout = ({ children }) => {
  return (
    <>
      <Logo />
      <aside>
        <Sidebar />
      </aside>
      <main>{children}</main>
      <footer>
        <Player />
      </footer>
    </>
  );
};

export default Layout;
