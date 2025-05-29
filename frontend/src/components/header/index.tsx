import { IoHome } from "react-icons/io5";
import { RiUserCommunityFill } from "react-icons/ri";
export default function Header() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-wattle-500 py-5 px-10 fixed w-screen z-[9999999]">
      <div className="flex flex-row justify-center items-center gap-32">
        <button onClick={() => handleScroll('Header')} className="hover:bg-wattle-50 rounded-full p-3 transition-all duration-1000">
          <IoHome className="text-3xl"  />
        </button>
        <div className="flex flex-col items-center text-white font-bold">
          <p className="text-xl">Construtora & Arquitetura</p>
          <p className="text-xl">Nova Forma</p>
        </div>
        <button onClick={() => handleScroll('ContactSection')} className="hover:bg-wattle-50 rounded-full p-3 transition-all duration-1000">
          <RiUserCommunityFill className="text-3xl" />
        </button>
      </div>
    </div>
  );
}
