import { useState } from "react";

import gifContato from "../../assets/gifs/contato.gif";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import Map from "./../../components/map/index";

export default function ContactSection() {
  const [botao, setBotao] = useState("Enviar");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [descricao, setDescricao] = useState("");

  function enviaForm(e: React.FormEvent) {
    e.preventDefault(); // impede o recarregamento da página
    setBotao("Enviando...");

    setTimeout(() => {
      setNome("");
      setEmail("");
      setTelefone("");
      setDescricao("");
      setBotao("ENVIAR");
    }, 3000);
  }

  return (
    <>
      <div className="my-20 space-y-2 bg-wattle-400 shadow-[0px_0px_50px_rgba(208,210,93,11)] text-white rounded-b-3xl">
        <div className="flex flex-col justify-center items-center gap-10 py-20">
          <h2 className=" text-xl font-bold">
            Preencha seus dados abaixo para falar com nossa equipe.
          </h2>
          <div className="flex flex-row items-center gap-56">
            <form onSubmit={enviaForm} className="space-y-2 flex flex-col">
              <label htmlFor="name" className="ml-2  z-10 font-bold">
                Seu nome completo:
              </label>
              <input
                id="name"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="ex: Eduardo"
                className="py-1 text-wattle-950 focus:text-wattle-600 transition duration-300 pl-5 w-96 rounded-full
              shadow-[0px_0px_10px_rgba(0,0,0,1)] focus:shadow-[0px_0px_25px_rgba(0,0,0,1)]"
              />
              <label htmlFor="telefone" className="ml-2  z-10 font-bold">
                Telefone:
              </label>
              <input
                id="telefone"
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="ex: (99) 9 9999-9999"
                className="py-1 text-wattle-950 focus:text-wattle-600 transition duration-300 pl-5 w-96 rounded-full
              shadow-[0px_0px_10px_rgba(0,0,0,1)] focus:shadow-[0px_0px_25px_rgba(0,0,0,1)]"
              />
              <label htmlFor="email" className="ml-2  z-10 font-bold">
                e-mail:
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ex: eduardo02545@e-mail.com"
                className="py-1 text-wattle-950 focus:text-wattle-600 transition duration-300 pl-5 w-96 rounded-full
              shadow-[0px_0px_10px_rgba(0,0,0,1)] focus:shadow-[0px_0px_25px_rgba(0,0,0,1)]"
              />
              <label htmlFor="descricao" className="ml-2  z-10 font-bold">
                Mensagem:
              </label>
              <textarea
                id="descricao"
                placeholder="..."
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="text-wattle-950 focus:text-wattle-600 transition duration-300 w-full h-40 px-5 py-2 border border-gray-300 rounded resize-none text-left align-top break-words whitespace-pre-wrap shadow-[0px_0px_10px_rgba(0,0,0,1)] focus:shadow-[0px_0px_25px_rgba(0,0,0,1)]"
              />
              <button
                type="submit"
                className="text-wattle-950 bg-wattle-50 py-2 rounded shadow-[0px_0px_10px_rgba(0,0,0,1)] transition duration-300 hover:shadow-[0px_0px_25px_rgba(0,0,0,1)]"
              >
                {botao}
              </button>
            </form>
            <div className="bg-wattle-200 p-14 rounded-full">
              <img src={gifContato} alt="gif..." className="w-56" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center bg-wattle-950 w-full px-20 py-10 gap-52 rounded-b-3xl">
          <div className="flex flex-col gap-2">
            <p className="flex flex-row items-center gap-1">
              <IoLocationOutline />
              <strong>Endereço: </strong>Av. Paulista, 1000 – São Paulo – SP
            </p>
            <p className="flex flex-row items-center gap-1">
              <MdOutlineLocalPhone />
              <strong>Telefone: </strong>(11) 4002-8922
            </p>
            <p className="flex flex-row items-center gap-1">
              <MdOutlineEmail />
              <strong>E-mail: </strong>contato@novaforma.com.br
            </p>
            <p className="flex flex-row items-center gap-1">
              <FaRegClock />
              <strong>Horário de Atendimento: </strong>Segunda a Sexta – 8h às
              18h
            </p>
          </div>
          <div className="shadow-[10px_5px_20px_rgba(255,255,255,0.5)]">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}
