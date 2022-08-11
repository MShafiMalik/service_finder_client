import Navbar from "./Partials/Navbar";
import Footer from "./Partials/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
