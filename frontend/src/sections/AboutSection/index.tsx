import { PiStarFill } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import { GiHillConquest } from "react-icons/gi";

export default function AboutSection() {
  return (
    <div className="my-20">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold ml-96">Sobre Nós</h1>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center w-96">
            Desde 2008, a Nova Forma atua na criação de espaços funcionais,
            esteticamente sofisticados e tecnicamente eficientes. Nossa equipe é
            composta por arquitetos, engenheiros civis e designers comprometidos
            com excelência e inovação.
          </p>
          <div className="flex flex-row justify-between gap-5 mt-10">
            <section className="flex flex-col justify-center gap-20 items-center px-20 py-16 rounded-[40px] w-96 bg-cyan-500">
              <p className="text-2xl">
                <strong>Missão:</strong> Construir com qualidade, respeitando prazos e o meio
                ambiente.
              </p>
              <GiHillConquest className="text-9xl"/>
            </section>
            <section className="flex flex-col justify-center gap-20 items-center px-20 py-16 rounded-[40px] w-96 bg-yellow-500">
              <p className="text-2xl">
                <strong>Visão:</strong> Ser referência nacional em engenharia e arquitetura
                predial.
              </p>
              <FaEye className="text-9xl"/>
            </section>
            <section className="flex flex-col justify-center gap-20 items-center px-20 py-16 rounded-[40px] w-96 bg-red-500">
              <p className="text-2xl">
                <strong>Valores:</strong> Ética, Inovação, Sustentabilidade e Comprometimento.
              </p>
              <PiStarFill className="text-yellow-300 text-9xl" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
