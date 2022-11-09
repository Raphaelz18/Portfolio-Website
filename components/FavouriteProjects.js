import React from "react";
import userData from "@constants/data";

export default function FavouriteProjects() {
  return (
    <div className="bg-[#F1F1F1] md:mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto mt-20 md:-mt-60">
        <header className="flex flex-col md:flex-row justify-between items-center md:my-20 lg:mt-20">
          <h1 className="mt-10 -mb-20 relative text-5xl md:text-20xl font-bold text-gray-700 dark:text-gray-200 text-center md:mt-20">
          Projekte
          </h1>
        </header>

        {/* Grid starts here */}
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
          <div class="flex flex-col space-y-10">
            <div></div>
            <div></div>
          </div>

          <div class="snap-y">
            <div class="snap-center grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
              {/* Projekt card */}
              {userData.favprojects.map((proj, idx) => (
                <>
                  <ProjektCard
                    year={proj.year}
                    title={proj.title}
                    link={proj.link}
                    imgUrl={proj.imgUrl}
                  />
                  {idx === userData.favprojects.length - 1 ? null : (
                    <div className="divider-container flex flex-col items-center -mt-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full relative z-10">
                      </div>
                      <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                    </div>
                  )}
                </>
              ))}
              <div className="divider-container flex flex-col items-center -mt-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full relative z-10">
                      </div>
                      <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
              </div>

              <a href="/projects" class="snap-center relative experience-card p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 mx-4 z-10 md:mx-40 transition ease-in-out text-yellow-50 font-medium text-xl bg-yellow-500 rounded-md md:px-2 hover:bg-yellow-600">
                <h1 className="text-yellow-50 font-medium text-xl text-center">
                    weitere Projekte
                </h1>
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProjektCard = ({ title, link, year, imgUrl}) => {
  return (
    <a href={link} className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4 hover:border-2 hover:border-yellow-500 transition ease-in-out">
      <img src={imgUrl} className="rounded-md" />
      <div className="mb-30 top-10 md:-left-10 md:-top-10 text-4xl">
        
        <h1 className="text-yellow-50 font-medium text-xl bg-gray-700 rounded-md px-2 my-3">
          {title}
        </h1>
        <h1 className="text-gray-700 font-bold dark:text-gray-200 my-3">
          {year}
        </h1>
        <div></div>
      </div>
    </a>
  );
};

