import React from "react";

const About = () => {
  return (
    <div  className=" dark:bg-slate-800">
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 dark:bg-slate-800">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
              Welcome to our DIY forum, a space where creativity meets community.
              We are a team of five enthusiastic students in our third year of a
              degree program, united by our passion for "Do It Yourself" projects
              and the desire to share our knowledge and experiences with others.
              <br />
              <br />
              Our journey began with a simple idea: to create a platform where
              individuals can explore, learn, and contribute to a wide range of
              DIY topics. From crafting and woodworking to electronics and home
              improvement, our forum is a melting pot of ideas and inspiration.
              <br />
              <br />
              Meet our team:
              <br />
              Ofek: A creative thinker and problem-solver, Ofek brings a wealth of
              innovative ideas and a keen eye for detail to our projects.
              <br />
              Guy: With a knack for technology and a love for hands-on work, Guy
              is our go-to expert for all things technical.
              <br />
              Rotem: A true artist at heart, Rotem adds a touch of beauty and
              finesse to our creations, inspiring others to unleash their
              creativity.
              <br />
              Maayan: Maayan's organizational skills and strategic planning keep
              our projects on track and our community engaged.
              <br />
              Mor: Passionate about sustainability and eco-friendly solutions, Mor
              ensures that our projects are not only creative but also
              environmentally conscious.
              <br />
              <br />
              Together, we strive to create a welcoming and supportive environment
              where anyone, from beginners to seasoned DIY enthusiasts, can share
              their projects, seek advice, and connect with like-minded
              individuals. Join us in our mission to empower, inspire, and
              transform the way we think about DIY.
            </p>
          </div>
          <div className="w-full lg:w-8/12">
            <img
              className="w-full h-full"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
              Our journey began in a small college classroom, where the five of us
              discovered a shared passion for creativity and innovation. Fueled by
              our curiosity and driven by the desire to make a difference, we
              embarked on a mission to create a space where individuals could come
              together to share their love for DIY projects. From late-night
              brainstorming sessions to early morning coding marathons, our
              dedication to bringing this vision to life has been unwavering.
              Today, our forum stands as a testament to the power of
              collaboration, creativity, and the unyielding spirit of the DIY
              community.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-5 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="./assets/GuyAvatar.jpeg"
                  alt="Guy Avatar"
                />
                <img
                  className="md:hidden block"
                  src="./assets/GuyAvatar.jpeg"
                  alt="Guy Avatar"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  Guy
                </p>
              </div>
              <div className="p-5 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="./assets/Mor.jpeg"
                  alt="Mor Avatar"
                />
                <img
                  className="md:hidden block"
                  src="./assets/Mor.jpeg"
                  alt="Mor Avatar"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  Mor
                </p>
              </div>
              <div className="p-5 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="./assets/OfekAvatar.jpeg"
                  alt="Ofek Avatar"
                />
                <img
                  className="md:hidden block"
                  src="./assets/OfekAvatar.jpeg"
                  alt="Ofek Avatar"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  Ofek
                </p>
              </div>
              <div className="p-5 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="./assets/Rotem.jpeg"
                  alt="Rotem Avatar"
                />
                <img
                  className="md:hidden block"
                  src="./assets/Rotem.jpeg"
                  alt="Rotem Avatar"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  Rotem
                </p>
              </div>
              <div className="p-5 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="./assets/Maayan.jpeg"
                  alt="Maayan Avatar"
                />
                <img
                  className="md:hidden block"
                  src="./assets/Maayan.jpeg"
                  alt="Maayan Avatar"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">
                  Maayan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
