import Footer from "@/app/components/footer/footer";
import Header from "../../components/header/header";
import JobCard from "../../components/jobCard/JobCard";
import NavBar from "../../components/navbar/nav";
import SearchBar from "../../components/searchBar/searchBar";

import dummyData from "@/app/JobDummyData";
import SignupForm from "@/app/components/signupForm/signupForm";

export default function signup() {
  return (
    <div>
      <NavBar />
      {/* <Header /> */}
      <SignupForm/>
      <Footer/>
    </div>
  );
}
