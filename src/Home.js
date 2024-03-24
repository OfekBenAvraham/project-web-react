import React from 'react';

const Home = () => {
  return (
    <div className="w-full h-[calc(100vh-5rem)]">
      <div
        className="bg-cover bg-[url('https://images.unsplash.com/photo-1601220959415-375d328bddc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-opacity-50 bg-center bg-no-repeat h-full w-full"
      >
        <div className="container mx-auto flex flex-col my-auto align-middle h-full">
          <div className="my-auto mx-auto lg:mx-0 w-10/12 lg:w-2/5 text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4 text-white mb-32">
              <span className="text-orange-500">Create, share and get inspired</span>
              <br />
              about your next project!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
