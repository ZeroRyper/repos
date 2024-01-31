function Descrip() {
  return (
    <div className="flex -mt-10 py-20">
      <div className=" flex-col border-4 border-neutral-500 bg-white w-full mx-10 py-5 ">
        <img
          className="rounded-full h-40 mx-auto"
          src="../ZeroRyper.png"
          alt=""
        />
        <p className="text-center text-xl xl:text-3xl px-10 py-5">
          Software developer with 2 years of experience in developing
          high-performance and scalable web applications. With a strong focus on
          innovation, I am passionate about creating solutions that meet the
          needs of businesses in an efficient and effective way.
        </p>
      </div>
      <div className="flex-col border-4 border-white bg-[#222439] mx-10  w-full">
        <div className="flex bg-black w-auto ">
          <h4 className="text-red-600 bg-white my-2 mx-auto px-10 text-2xl font-black font-bills">
            REFERENCES
          </h4>
        </div>
        <div className="flex mt-1 py-2 bg-black ">
          <img
            className="flex text-white h-14 m-2 rounded-full"
            src="../ZR_1.png"
            alt=""
          />
          <div className="my-auto">
            <p className="flex text-xl xl:text-3xl text-white rounded-full m-2 h-6">MSC Andres Salas</p>
            <p className="flex text-xl xl:text-2xl text-slate-400 rounded-full m-2 mt-3 h-6">
              Salas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Descrip;
