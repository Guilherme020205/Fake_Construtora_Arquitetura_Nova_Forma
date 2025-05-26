import { FaCheck } from "react-icons/fa";
import gifCasa from '../../assets/gifs/casa-terra-rmk-aquitetura_1.gif'

export default function ServicesSection() {
  return (
    <>
      <h1 className="text-2xl">Serviços</h1>
      <div className="flex flex-row gap-20">
        <div className="flex flex-col gap-5 ml-5 mt-5 w-[500px]">
          <div className="flex flex-col">
            <p className="flex flex-row items-center gap-1 text-xl">
              <FaCheck className="text-emerald-400" />
              <strong>Projetos Arquitetônicos </strong>
            </p>
            <p className="ml-6">
              Desenvolvemos projetos arquitetônicos exclusivos, focados em
              funcionalidade, estética e viabilidade técnica.
            </p>
          </div>

          <div className="flex flex-col">
            <p className="flex flex-row items-center gap-1 text-xl">
              <FaCheck className="text-emerald-400" />
              <strong>Construção Predial </strong>
            </p>
            <p className="ml-6">
              Execução de obras residenciais, comerciais e industriais, com
              equipe especializada e uso de tecnologias modernas.
            </p>
          </div>

          <div className="flex flex-col">
            <p className="flex flex-row items-center gap-1 text-xl">
              <FaCheck className="text-emerald-400" />
              <strong>Consultoria Técnica </strong>
            </p>
            <p className="ml-6">
              Orientação especializada para viabilidade de obras, regularização
              e aprovação de projetos junto aos órgãos competentes.
            </p>
          </div>

          <div className="flex flex-col">
            <p className="flex flex-row items-center gap-1 text-xl">
              <FaCheck className="text-emerald-400" />
              <strong>Reformas e Retrofit </strong>
            </p>
            <p className="ml-6">
              Modernização de prédios antigos, garantindo segurança e
              valorização do patrimônio.
            </p>
          </div>
        </div>
        <img src={gifCasa} alt="gif..." className="w-[500px]" />
      </div>
    </>
  );
}
