import { FaCheck } from "react-icons/fa";

export default function DifferentialsSection() {
  return (
    <div className="flex flex-col items-end text-end">
      <h1 className="text-2xl">Diferenciais</h1>
      <div className="flex flex-col gap-5 ml-5 mt-5 w-[500px]">
        <div className="flex flex-col items-end">
          <p className="flex flex-row items-center gap-1 text-xl">
            Comprometimento com prazos e orçamentos.
            <FaCheck className="text-emerald-400" />
          </p>
          <p className="flex flex-row items-center gap-1 text-xl">
            Equipe multidisciplinar altamente qualificada.
            <FaCheck className="text-emerald-400" />
          </p>
          <p className="flex flex-row items-center gap-1 text-xl">
            Utilização de materiais e técnicas sustentáveis.
            <FaCheck className="text-emerald-400" />
          </p>
          <p className="flex flex-row items-center gap-1 text-xl">
            Atendimento personalizado para cada cliente.
            <FaCheck className="text-emerald-400" />
          </p>
        </div>
      </div>
    </div>
  );
}
