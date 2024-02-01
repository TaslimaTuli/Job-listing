import NavBar from "../../components/navbar/nav";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Edit from "../../components/edit/edit";


const getData = async (id:any) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/show/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) {
       throw new Error();
    }

    return response.json();
  } catch (error) {
   console.log(error);
  }
  
};


export default async function edit({params}: any) {
  const {id} =  params;
  
  console.log("ID:", id);
  //console.log(typeof _id)

  
  const data   = await getData(id);
  if (!data || !data.title ) {
    throw new Error();
  }

  const title = data.title;
  const company = data.company;
  const email = data.email;
  const experience = data.experience;
  const location = data.location;
  const skills = data.skills;
  const job_link = data.job_link;
  const description = data.description;

  //console.log(job_edit);
  return (
    <div>
      <NavBar />
      {/* <Header /> */}
      <Edit
        id={id}
        title={title.toString()}
        company={company.toString()}
        email={email.toString()}
        experience={experience.toString()}
        location={location.toString()}
        skills={skills.toString()}
        job_link={job_link.toString()}
        description={description.toString()}
      />
      <Footer />
    </div>
  );
}
