import Footer from "@/app/components/footer/footer";
import Header from "../components/header/header";
import NavBar from "../components/navbar/nav";
import SigninForm from "@/app/components/signinForm/signinForm";
import Manage from "../components/manage/manage";

export default function dashboard() {
  return (
    <div>
      <NavBar />
      {/* <Header /> */}
        <Manage />
      <Footer />
    </div>
  );
}
