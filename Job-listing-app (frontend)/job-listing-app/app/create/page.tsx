import NavBar from "../components/navbar/nav";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import CreateJobForm from "../components/createJobForm/createJobForm";

export default function create() {
  return (
    <div>
      <NavBar />
      {/* <Header /> */}
      <CreateJobForm/>
      <Footer/>
    </div>
  );
}
