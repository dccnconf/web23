import React from "react";
import Link from "next/link";

export default function About({ topics }) {

  return (
    <>
      <div className="md:leading-7 md:text-xl">
        {/*<p>*/}
        {/*  DCCN-2021 will take place in Moscow, Russia, on 20-24 September, 2021.*/}
        {/*  The conference is a continuation of traditional international conferences of the DCCN series,*/}
        {/*  which took place in Bulgaria, Israel, and Russia in the last 25 years.*/}
        {/*</p>*/}

        {/*<ul className="list-disc ml-8 mt-8">*/}
        {/*  /!*<li>*!/*/}
        {/*  /!*  <Link href={"/#timeline"} as="">*!/*/}
        {/*  /!*    <a className="text-blue-500 hover:underline">Conference deadlines 📅</a>*!/*/}
        {/*  /!*  </Link>*!/*/}
        {/*  /!*</li>*!/*/}
        {/*  /!*<li>*!/*/}
        {/*  /!*  <Link href={"/authors"} as="">*!/*/}
        {/*  /!*    <a className="text-blue-500 hover:underline">Call for papers ✍️</a>*!/*/}
        {/*  /!*  </Link>*!/*/}
        {/*  /!*</li>*!/*/}
        {/*  /!*<li>*!/*/}
        {/*  /!*  <Link href={"/#committee"} as="">*!/*/}
        {/*  /!*    <a className="text-blue-500 hover:underline">Organizing committee 👷</a>*!/*/}
        {/*  /!*  </Link>*!/*/}
        {/*  /!*</li>*!/*/}
        {/*  /!*<li>*!/*/}
        {/*  /!*  <a*!/*/}
        {/*  /!*    href="https://uconfy.com/conf/1/"*!/*/}
        {/*  /!*    className="text-blue-500 hover:underline">Conference at <span className="font-medium">uConfy</span> (for authors) ⚙️</a>*!/*/}
        {/*  /!*</li>*!/*/}
        {/*</ul>*/}

        <p className="mt-8">
          The main idea of the conference is to provide a platform and forum for researchers and developers
          from academia and industry from various countries working in the area of theory and applications
          of distributed computer and communication networks, mathematical modeling, methods of control and
          optimization of distributed systems, by offering them a unique opportunity to share their views as well
          as discuss the prospective developments and pursue collaboration in this area.
        </p>

        <p>
          The working languages of the Conference are Russian and English.
        </p>

      </div>

      <div className="py-4">
        <div className="block">
          <div className="">
            <div className="h4 text-center sm:text-left mt-4 sm:mt-0">Proceedings</div>
            <p className="md:text-xl">
              Traditionally, the accepted and presented DCCN papers are published in the Conference Proceedings volume
              (included into the Russian Science Citation Index).&nbsp;
              <img src="/images/mathematics-logo.png" alt="Mathematics logo" className="w-4/5 mx-auto sm:w-3/12 sm:float-left sm:mr-4 pt-3 mb-2"/>
              The revised selected submissions in English, recommended by the Program Committee,
              also appear as a stand-alone volume of selected extended papers published by Springer
              (indexed in Scopus and Web of Science).
              <img src="/images/future-internet.png" alt="Future internet logo" className="w-4/5 mx-auto sm:w-1/4 sm:float-right pt-3 sm:mr-2"/>
            </p>
            <p className="md:text-xl">
              Authors of the best selected papers presented at DCCN, recommended by the Program Committee,
              will be invited to submit their extended papers to the Special Issues of the MDPI “Mathematics” journal (Q1, WoS, Scopus),
              MDPI "Sensors" journal (Q1, WoS, Scopus) and MDPI "Future Internet" journal (Q2, WoS, Scopus).
            </p>
            <p className="md:text-xl">
              <img src="/images/sensors-logo.png" alt="Sensors logo" className="w-4/5 mx-auto sm:w-1/4 sm:float-left sm:mr-2"/>
              All submitted manuscripts will be screened by the editorial office of the corresponding journals and peer reviewed according
              to the usual standards of these journals.
            </p>
          </div>
        </div>
      </div>

      <div className="md:leading-7 md:text-xl mt-8">
        <div>
          <img src="/images/undraw_create_f05x.svg" alt="Ideas image" className="w-4/5 sm:w-1/3 lg:w-1/4 sm:float-right mx-auto sm:ml-8 pt-3"/>
          <div>
            <h4 className="h4 mb-3 text-center sm:text-left mt-4 sm:mt-0">Topics</h4>
            <p>Conference topics include, but are not limited to the these.</p>
          </div>
        </div>
        <div className="mt-4">
          <Topics topics={Array.from(topics).sort()} />
        </div>
      </div>
    </>
  );
}

const Topics = ({topics}) => {
  return <div>
    {/*<h4 className="h4"><span className="text-indigo-500">Track {track.letter}:</span> {track.name}</h4>*/}
    <ul className="list-disc ml-8 text-">
      {topics.map((topic, index) =>
        <li key={index}>{topic}</li>)}
    </ul>
  </div>
}
