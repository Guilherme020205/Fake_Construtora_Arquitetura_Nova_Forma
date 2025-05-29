import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-wattle-200 flex flex-col items-center justify-center py-20">
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-black text-2xl hover:text-3xl transition-all duration-1000">
          <strong>Nova Forma Construção e Arquitetura.</strong>
        </h1>
        <p className="text-gray-600 text-xs">Todos os direitos reservados.</p>
        <h2 className="text-gray-900 text-xl">© 2025</h2>
      </div>
      <div className="flex flex-row gap-5">
        <a href="https://www.instagram.com/guilherme_seemann/">
          <FaInstagram className="text-5xl hover:text-6xl transition-all duration-1000" />
        </a>
        <a href="https://www.linkedin.com/in/guilherme-cardozo-seemann-705254273/">
          <FaLinkedin className="text-5xl hover:text-6xl transition-all duration-1000" />
        </a>
      </div>
    </div>
  );
}
