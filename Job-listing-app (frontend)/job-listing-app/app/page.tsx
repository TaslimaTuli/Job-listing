'use client'
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import JobCard from "./components/jobCard/JobCard";
import NavBar from "./components/navbar/nav";
import SearchBar from "./components/searchBar/searchBar";
import dummyData from "@/app/JobDummyData";

export default function Home() {
  

   return (
     <div>
       <NavBar />
       <Header />
       <SearchBar />
       {/* {dummyData.map((data) => (
        <JobCard key={data.id} {...data}/>
      ))} */}
       <JobCard />
       <Footer />
     </div>
   );
}
