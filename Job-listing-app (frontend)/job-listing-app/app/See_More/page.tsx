import NavBar from "../components/navbar/nav";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import CreateJobForm from "../components/createJobForm/createJobForm";
import Show from "../components/show/show";

type props = {
  searchParams: any;
};

// export default function show()
interface pageProps {
  params: { show: any };
}

const getData = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/show", {
    cache: "no-store",
  });
  return response.json();
};

const single = async (_id: number) => {
  const i = await getData();
  const single_job = await i.find((p: any) => p.id === _id);
  console.log(single_job);
  return single_job;
};

const See_More = async ({ searchParams }: props) => {
  const d = await getData();
  console.log(searchParams._id);

  const _id = Number(searchParams._id);
  //console.log(typeof _id);

  const j = await single(_id);
  //console.log(j.title);
  return (
    <div>
      <NavBar />
      <div className="mx-40 mb-auto mt-20">
        {/* <form action="">
        <div className="relative border-2 border-gray-100 m-4 rounded-lg">
          <div className="absolute top-4 left-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
          </div>
          <input
            type="text"
            name="search"
            className="h-14 w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
            placeholder="Search Laravel Gigs..."
          />
          <div className="absolute top-2 right-2">
            <button
              type="submit"
              className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600"
            >
              Search
            </button>
          </div>
        </div>
      </form> */}
        <a href="/" className="inline-block text-white ml-4 mb-4">
          <i className="fa-solid fa-arrow-left"></i> Back
        </a>
        <div className="mx-4">
          <div className="bg-gray-50 border border-gray-200 p-10 rounded">
            <div className="flex flex-col items-center justify-center text-center">
              {/* <img className="w-48 mr-6 mb-6" src="images/acme.png" alt="" /> */}

              <h3 className="text-3xl mb-2">{j?.title}</h3>
              <div className="text-xl font-bold mb-4">{j?.company}</div>
              <ul className="flex">
                {/* <li className="bg-black text-white rounded-xl px-3 py-1 mr-2">
                   {j.skills}
                 </li> */}
                {j?.skills.split(",").map((skill: any, index: any) => (
                  <p
                    key={skill}
                    className="bg-black text-white rounded-xl px-3 py-1 mr-2"
                  >
                    {skill}
                  </p>
                ))}
              </ul>
              <div className="text-lg my-4">
                <i className="fa-solid fa-location-dot"></i> {j?.location}
              </div>
              <div className="border border-gray-200 w-full mb-6"></div>
              <div>
                <h3 className="text-3xl font-bold mb-4 text-left">
                  Job Description
                </h3>
                <div className="text-lg space-y-6 ">
                  <p className="whitespace-pre-line text-left">
                    {j?.description}
                  </p>

                  <a
                    //href={j?.email}
                    className="block bg-laravel mt-6 py-2 rounded-xl hover:opacity-80"
                  >
                    <i className="fa-solid fa-envelope"></i>
                    Contact Employer: {j?.email}
                  </a>

                  <a
                    href={j?.job_link}
                    target="_blank"
                    className="block
                  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 
                   text-white font-bold py-3 rounded-md hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    <i className="fa-solid fa-globe"></i> Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>Loading job data...</div> */}
      </div>

      <Footer />
    </div>
  );
};
export default See_More;
