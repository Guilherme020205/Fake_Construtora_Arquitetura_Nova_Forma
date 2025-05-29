import gif from "../../assets/gifs/city-engine-banner-decor.gif";
import Carousel from "../../components/carrossel/index";
import backgroundImf from "../../assets/imgs/backgroundImggif.gif";
export default function IntroSection() {
  return (
    <div className="flex flex-col gap-20 mx-4 ">
      <div
        className="h-[500px] rounded-[80px] shadow-[0px_0px_80px_rgba(1,1,1,0.5)]"
        style={{
          backgroundImage: `url(${backgroundImf})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-50 rounded-[80px] flex flex-col justify-center items-center gap-20 h-full ">
          <section className="group flex flex-col items-center">
            <h1 className="text-white font-black text-2xl group-hover:underline group-hover:text-3xl duration-1000 transition-all">
              Construtora & Arquitetura Nova Forma
            </h1>
            <h3 className="text-white text-xl">
              Fundada em:{" "}
              <strong className="group-hover:underline duration-300 transition">
                2008
              </strong>{" "}
              | Sede em:{" "}
              <strong className="group-hover:underline duration-300 transition">
                {" "}
                <a href="">São Paulo - SP</a>
              </strong>
            </h3>
          </section>
          <section className="flex flex-row gap-10">
            <p className="w-[550px] text-white  ">
              Transformamos sonhos em estruturas sólidas. A Nova Forma é uma
              empresa referência em construção predial e arquitetura
              contemporânea, com mais de 15 anos de mercado, unindo qualidade,
              inovação e sustentabilidade.
            </p>
            <img className="w-96" src={gif} alt="gif..." />
          </section>
        </div>
      </div>
      <div className="bg-wattle-50 w-full px-28 pb-10 rounded-full">
        <Carousel />
      </div>
    </div>
  );
}
