import mulher from "../../assets/imgs/arquiteta.jpg";
import homem from "../../assets/imgs/homem.jpg";

export default function Card() {
  return (
    <div className="flex flex-row justify-between gap-20">
      <div className="flex flex-col gap-2 w-[500px]">
        <div className="bg-wattle-400 w-[500px] h-28 rounded-full flex flex-row items-center ">
          <img src={mulher} alt="foto mulher" className="w-32 h-28 rounded-full" />
          <p className="ml-5 text-xl">— Mariana Silva, Arquiteta e cliente.</p>
        </div>
        <div className="px-20">
          <p>
            "O projeto arquitetônico ficou simplesmente incrível. Recomendo de
            olhos fechados."
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-[500px]">
        <div className="bg-wattle-400 w-[500px] h-28 rounded-full flex flex-row items-center ">
          <img src={homem} alt="foto homem" className="w-32 h-28 rounded-full" />
          <p className="ml-5 text-xl">— Mariana Silva, Arquiteta e cliente.</p>
        </div>
        <div className="px-20">
          <p>
            "O projeto arquitetônico ficou simplesmente incrível. Recomendo de
            olhos fechados."
          </p>
        </div>
      </div>
    </div>
  );
}
