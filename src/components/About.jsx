import profileImg from '../assets/rakshit.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
                I am a Frontend and Generative AI Developer focused on building modern, 
                interactive web applications enhanced with AI-driven features. I enjoy crafting responsive user interfaces and 
                integrating generative models to deliver intelligent, scalable, and user-centric experiences, with an emphasis on clean and maintainable code.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                {/* <h3 className="text-xl font-semibold text-white mb-2">Frontend Focus</h3> */}
                <p className="text-gray-400">
                  Creating responsive, interactive user interfaces with modern frameworks and libraries.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                {/* <h3 className="text-xl font-semibold text-white mb-2">Backend Expertise</h3> */}
                <p className="text-gray-400">
                  Building intelligent web interfaces and AI-powered systems to deliver end-to-end smart applications.
                </p>
              </div>
            </div>
          </div>

          {/* New Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
  <img
    src={profileImg} 
        alt="Profile"
    className="w-[400px] h-[400px] object-cover rounded-full shadow-lg border-4 border-purple-500"
  />
</div>

        </div>
      </div>
    </section>
  )
}

export default About;
