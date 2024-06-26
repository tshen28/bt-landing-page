import React from 'react';

const Home = () => {

  return (
    <div className="bg-white">
      <div className="relative overflow-hidden isolate py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-6xl p-24 px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl pt-8 font-bold tracking-tight text-gray-900 sm:text-7xl">
              ByTeams
            </h1>
            <p className="mt-6 text-md leading-8 text-gray-600">
              Introducing the data-driven, collaborative approach to tech team hiring.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/start"
                className="rounded-md bg-zinc-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;