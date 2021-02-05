import { LayoutContextProvider } from "./LayoutContext";
import LayoutForm from "./LayoutForm";

const Layout = () => {
  return (
    <LayoutContextProvider>
      <LayoutForm />
    </LayoutContextProvider>
  );
};

export default Layout;
