import ".././index.css";

function Projects() {
  return (
    <div>
      <div className="bg-Projects h-full mt-16">
        <h2 className="text-center text-white text-9xl pt-20 font-bills">
          PROJECTS
        </h2>
        <ul className="flex pt-10 justify-around mx-60">
          <li className="bg-blue-400 text-white w-32 text-center mx-2 my-auto">
            Front end
          </li>
          <li className="bg-red-600 text-white w-32 text-center mx-2 my-auto">
            Back end
          </li>
          <li className="bg-pink-500 text-white w-32 text-center mx-2 my-auto">
            Animacion
          </li>
          <li className="bg-blue-800 text-white w-32 text-center mx-2 my-auto">
            Games
          </li>
          <li className="bg-green-500 text-white w-32 text-center mx-2 my-auto">
            Art
          </li>
        </ul>
        <div className="flex justify-center mt-10">
          <ul className="grid gap-10 grid-cols-2">
            <li>
              <a href="http://">
                <img
                  className="w-96 h-80"
                  src="https://github.com/ZeroRyper/Ableton_Bocchi/blob/main/assets/Screenshot_AB.png?raw=true"
                  alt=""
                />
              </a>
            </li>
            <li>
                <a href=""><img
                className="w-96 h-80"
                src="https://media.licdn.com/dms/image/D562DAQFkZZXPUwEpIQ/profile-treasury-image-shrink_800_800/0/1697338418273?e=1707260400&v=beta&t=87fsIwMrbGZmmV3ZVTbDmq6Xu_Eu0uqucRhtY0mnsjI"
                alt=""
              /></a>
              
            </li>
            <li>
                <a href="">
                <img
                className="w-96 h-80"
                src="https://media.licdn.com/dms/image/D562DAQHXCLxYn4o-5A/profile-treasury-image-shrink_800_800/0/1692570624678?e=1707260400&v=beta&t=IDMCYdrVuimPFI1YBRniXQOSVl0ZgZZRLVIP_qkzkhc"
                alt=""
              />
                </a>

            </li>
            <li>
                <a href="">
                <img
                className="w-96 h-80"
                src="https://media.licdn.com/dms/image/D562DAQGoiE8XkpXp0Q/profile-treasury-image-shrink_800_800/0/1696634882652?e=1707260400&v=beta&t=qcEvwPDRCiruJfR7VzPEnhOZJ-VA2lr_sE7bO0Soqeg"
                alt=""
              />
                </a>

            </li>
            <li>
                <a href="">
                <img
                className="w-96 h-80"
                src="https://media.licdn.com/dms/image/D562DAQGrOPX7r-Pdvg/profile-treasury-image-shrink_800_800/0/1697575576948?e=1707260400&v=beta&t=hI9j11n4uRpr6G5MqfJQV-GjjiWEjhlt94QKL6kcspc"
                alt=""
              />
                </a>

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
