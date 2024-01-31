import '../index.css'

function Navbar() {
  return (
    <div className="flex-col">
      <div className="flex justify-between py-7">
        <img className="flex ml-4" src="../ZR_1.png" alt="" />
        <h1 className="flex text-6xl text-white font-metal -mr-32">ZERO PAGES</h1>
        <div className="flex">
          <img className="m-auto mr-4" src="../icon _github.png" alt="" />
          <img className="m-auto mr-4" src="../icon _linkedin.png" alt="" />
          <img className="m-auto mr-4" src="../icon_mailout.png" alt="" />
        </div>
      </div>
      <div className="bg-white py-0.5">
      <ul className="navbar flex justify-around pt-0.5">
        <li className=" text-white font-nosifer">Sobre Mi</li>
        <li className=" text-white font-nosifer">Exp</li>
        <li className=" text-white font-nosifer">Projects</li>
      </ul>
      </div>

    </div>
  );
}

export default Navbar;
