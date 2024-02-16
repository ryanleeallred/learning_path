"use client";
import { useRef, useEffect, useState, createRef } from "react";
import { CldImage } from "next-cloudinary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faBook } from "@fortawesome/free-solid-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
// import { LineTree } from "./components/LineTree";
import { LineTreeRight } from "./components/LineTreeRight";
import { LineTreeLeft } from "./components/LineTreeLeft";

export default function Home() {
  const [lessons, setLessons] = useState([
    {
      title: "Why Learn Python?",
      description:
        "Python proficiency is a hard requirement if you want to become a professional data scientist. Learn why Python is the most important language for both beginner data enthusiasts and professionals.",
      slug: "why-learn-python-for-data-science",
      video_length: 10,
      num_exercises: 8,
    },
    {
      title: "What is the Best Software for Learning Python?",
      description:
        "Don't make the mistake of trying to install complex tools if you're a beginner. Use cloud-based notebook editors like Google Colab to immediately start learning and writing Pyton for Data Science –with no setup required!",
      slug: "best-software-for-learning-python",
      video_length: 14,
      num_exercises: 6,
    },
    // {
    //   title: "Intro to Google Colaboratory",
    //   description:
    //     'Get acquainted with Google Colaboratory as a tool for writing Python for Data Science. This lesson features an overview of "notebooks" in general in addition to some Google Colab specifics.',
    //   slug: "intro-to-google-colab-colaboratory",
    //   video_length: 28,
    //   num_exercises: 0,
    // },
  ]);

  const itemEls = useRef(new Array());

  console.log(itemEls.current);

  // const itemsRef = useRef([]);

  // useEffect(() => {
  //   itemsRef.current = itemsRef.current.slice(0, lessons.length);
  // }, [lessons]);

  // console.log("ITEMS REF", itemsRef);

  // const elementsRef = useRef(data.map(() => createRef()));

  console.log("LESSONS", lessons);

  return (
    <main className="w-11/12 m-auto">
      <div className="my-10">
        <h1 className="">Python for Beginner Data Scientists</h1>
        <div className="flex gap-5 mt-2">
          <div className="flex items-center gap-2 bg-Tcyan rounded-md px-3 py-1 text-slate-50 text-[16px] font-bold">
            <FontAwesomeIcon icon={faBook} />
            <p>{lessons.length} Lessons</p>
          </div>
          <div className="flex items-center gap-2 bg-Tblue rounded-md px-3 py-1 text-slate-50 text-[16px] font-bold">
            <FontAwesomeIcon icon={faVideo} />
            <p>
              {lessons.reduce(function (acc, obj) {
                return acc + obj.video_length;
              }, 0)}{" "}
              Minutes of Video
            </p>
          </div>
          <div className="flex items-center gap-2 bg-Tpurple rounded-md px-3 py-1 text-slate-50 text-[16px] font-bold">
            <FontAwesomeIcon icon={faPython} />
            <p>
              {lessons.reduce(function (acc, obj) {
                return acc + obj.num_exercises;
              }, 0)}{" "}
              Exercises
            </p>
          </div>
        </div>
        {/* <form className="w-[300px] h-[300px] bg-blue-100">
          <input type="text" onChange={handleChange} value={name} />
        </form> */}
      </div>

      {lessons.map((lesson, index) => {
        if (index % 2 == 0) {
          return (
            <div className="flex  px-5 py-10 gap-10" key={lesson.slug}>
              {/* <LineTreeRight
                start={}
                end={}
              /> */}
              <div className="w-1/2 my-auto">
                <div className="flex gap-3">
                  <div className="flex">
                    <div className="h-[40px] w-[40px] bg-Tpurple rounded-full m-auto">
                      <p className="text-slate-50 text-2xl text-center pt-[2px] pr-[1px]">
                        {index + 1}
                      </p>
                    </div>
                  </div>
                  <h2>{lesson.title}</h2>
                </div>
                <p className="mt-3">{lesson.description}</p>
                <div className="flex gap-3 mt-5">
                  <div className="flex items-center gap-2 bg-Tcyan rounded-md px-3 py-1 text-slate-50 text-[16px] font-bold">
                    <FontAwesomeIcon icon={faVideo} />
                    <p>{lesson.video_length} Minutes</p>
                  </div>
                  <div className="flex items-center gap-2 bg-Tblue rounded-md px-3 py-1 text-slate-50 text-[16px] font-bold">
                    <FontAwesomeIcon icon={faBook} /> <p>Reading Time</p>
                  </div>
                  <div className="flex items-center gap-2 bg-Tpurple rounded-md px-3 py-1 text-slate-50 text-[16px] font-bold">
                    <FontAwesomeIcon icon={faPython} />
                    <p>{lesson.num_exercises} Exercises</p>
                  </div>
                </div>
              </div>
              <div className="">
                <CldImage
                  className="border-gray-200 border-8"
                  src={`lesson_thumbnails/${lesson.slug}`}
                  width={600}
                  height={400}
                  style={{ objectFit: "cover" }}
                  alt={lesson.title}
                  // ref={(el) => (lessons[index].current = el)}
                  ref={(element) => itemEls.current.push(element)}
                />
              </div>
            </div>
          );
        } else {
          return (
            <div className="flex  px-5 py-10 gap-10" key={lesson.slug}>
              {/* <LineTreeLeft start={lesson.bottom} end={lesson.top} /> */}
              <div className="w-1/2 my-auto">
                <div className="">
                  <CldImage
                    className="border-gray-200 border-8"
                    src={`lesson_thumbnails/${lesson.slug}`}
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                    alt={lesson.title}
                    ref={(element) => itemEls.current.push(element)}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex gap-3">
                  <div className="flex">
                    <div className="h-[40px] w-[40px] bg-Tpurple rounded-full m-auto">
                      <p className="text-slate-50 text-2xl text-center text-center pt-[2px] pr-[1px]">
                        {index + 1}
                      </p>
                    </div>
                  </div>
                  <h2>{lesson.title}</h2>
                </div>
                <p className="mt-3">{lesson.description}</p>
                <div className="flex gap-3 mt-5">
                  <div className="flex items-center gap-2 bg-Tcyan rounded-md px-3 py-1 text-slate-50 text-[16px] font-bold">
                    <FontAwesomeIcon icon={faVideo} />
                    <p>{lesson.video_length} Minutes</p>
                  </div>
                  <div className="flex items-center gap-2 bg-Tblue rounded-md px-3 py-1 text-slate-50 text-[16px] font-bold">
                    <FontAwesomeIcon icon={faBook} /> <p>Reading Time</p>
                  </div>
                  <div className="flex items-center gap-2 bg-Tpurple rounded-md px-3 py-1 text-slate-50 text-[16px] font-bold">
                    <FontAwesomeIcon icon={faPython} />
                    <p>{lesson.num_exercises} Exercises</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </main>
  );
}
