import Footer from "@/app/components/footer/footer";
import Header from "../../components/header/header";
import NavBar from "../../components/navbar/nav";
import SigninForm from "@/app/components/signinForm/signinForm";

export default function signin() {
  return (
    <div>
      <NavBar />
      {/* <Header /> */}
      <SigninForm/>
      <Footer/>
    </div>
  );
}
