'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect, useState, Suspense } from "react";
import dayjs from "dayjs";
import { log } from "console";
import Link from "next/link";

function JobCard() {
  //const date1 = dayjs(Date.now());
  //const diffInDays = date1.diff(props.postedOn, "day");

  const [job, setJob] = useState<any>(null);

  useEffect(()=>{
    async function fetchData() {
    let response = await fetch("http://127.0.0.1:8000/api/show", {cache: 'no-store'});
    response = await response.json();
    console.log(response);
    setJob(response);

  }
  
  fetchData();

  }, []);
  return (
    <div className="mx-40 mb-4">
      {/* <Suspense
        fallback={
          <p className="text-center text-xl font-semibold text-gray-500 mt-4 mb-4">
            Loading jobs...
          </p>
        }
      > */}
        {job ? (
          job.map((j: any) => (
            <Card
              key={j.id}
              className="mt-10 pb-4 flex px-6 py-4 bg-zinc-200 rounded-md border-black shadow-lg items-center justify-between hover:border-blue-500 hover:translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <CardHeader className="flex flex-col items-start gap-3">
                <CardTitle>
                  {j.title} - {j.company}
                </CardTitle>
                <CardDescription className="text-lg font-semibold">
                  {j.type} &#x2022; {j.experience} &#x2022; {j.location}
                </CardDescription>
                {/* skills */}
                <div className="flex items-center gap-2">
                  {j.skills.split(",").map((skill: any, index: any) => (
                    <p
                      key={skill}
                      className="text-gray-500 py-1 px-2 rounded-md border border-black"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
              </CardHeader>
              <div className="flex flex-col items-center gap-4">
                <div>
                  <p className="text-gray-500">
                    Posted{" "}
                    {/* {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`}{" "}
                  ago */}
                    {dayjs(Date.now()).diff(dayjs(j.created_at), "day") > 1
                      ? `${dayjs(Date.now()).diff(
                          dayjs(j.created_at),
                          "day"
                        )} days`
                      : `${dayjs(Date.now()).diff(
                          dayjs(j.created_at),
                          "day"
                        )} day`}{" "}
                    ago
                  </p>
                </div>
                <div>
                  <Link
                    // href={`show/${j.id}`}
                    href={{ pathname: "/See_More", query: { _id: j?.id } }}
                    // target="_blank"
                    // rel="noopener noreferrer"
                    key={j.id}
                  >
                    <button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md hover:scale-105 transition-all duration-300 ease-in-out">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <Card className="mt-10 pb-4 flex px-6 py-4 bg-zinc-200 rounded-md border-black shadow-lg justify-center text-center">
            <p className="text-center text-xl font-semibold text-gray-500 mt-4 mb-4">
              Loading jobs...
            </p>
          </Card>
        )}
      {/* </Suspense> */}
    </div>
  );
}

export default JobCard;
