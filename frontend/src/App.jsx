import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { useSelector } from "react-redux";
import useGetUserDataOnHardRefresh from "./hooks/useGetUserDataOnHardRefresh";
import { Loader2 } from "lucide-react";

function App() {
  const { loading } = useSelector((state) => state.auth);

  useGetUserDataOnHardRefresh();

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader2 className="animate-spin h-8 w-8" />
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
