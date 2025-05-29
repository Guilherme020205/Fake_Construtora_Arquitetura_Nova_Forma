import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { useState } from "react";
import img1 from "../../assets/imgs/1.png";
import img2 from "../../assets/imgs/2.png";
import img3 from "../../assets/imgs/3.png";
import img4 from "../../assets/imgs/4.png";
import img5 from "../../assets/imgs/5.png";
import img6 from "../../assets/imgs/6.png";

const list_imgs = [
  { id: "1", title: "imagem 1", url_imgs: img1 },
  { id: "2", title: "imagem 2", url_imgs: img2 },
  { id: "3", title: "imagem 3", url_imgs: img3 },
  { id: "4", title: "imagem 4", url_imgs: img4 },
  { id: "5", title: "imagem 5", url_imgs: img5 },
  { id: "6", title: "imagem 6", url_imgs: img6 },
];

export default function Carousel() {
  const [currentGroup, setCurrentGroup] = useState(0); // Estado qye controla qual grupo vai aparecer

  const groupSize = 4; // Define que vai mostra x imagens por vez
  const totalGroups = Math.ceil(list_imgs.length / groupSize); // Pega o tanto de fotos que tem na lista divide por groupSize e arredonda usando Math.ceil

  const startIndex = currentGroup * groupSize;
  const visibleBanners = list_imgs.slice(startIndex, startIndex + groupSize);

  const prevGroup = () => {
    //grupo anterior
    setCurrentGroup((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
  };
  const nextGroup = () => {
    //proximo grupo
    setCurrentGroup((prev) => (prev + 1) % totalGroups);
  };

  const goToGroup = (index: number) => {
    // navegação apenas pelas bolinhas em baixo
    setCurrentGroup(index);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-20 select-none">
      <div className="w-full flex flex-row justify-between items-center space-x-4">
        <button
          onClick={prevGroup}
          className="
            bg-wattle-400 rounded-full
            hover:bg-wattle-200 hover:shadow-[0px_0px_50px_rgba(208,210,93,11)]
            transition
            duration-1000
            "
        >
          <RiArrowLeftSFill className="text-4xl" />
        </button>

        <ul className="flex flex-row justify-center items-center space-x-6">
          {visibleBanners.map((list) => (
            <li key={list.id}>
              <div className="flex flex-col gap-2 group">
                <div
                  className="bg-palette-base  h-28 rounded-[20px] flex justify-center items-center
                  shadow-[-10px_50px_10px_rgba(208,210,93,0.5)]
                  group-hover:shadow-[-10px_50px_90px_rgba(208,210,93,10)] group-hover:duration-1000 group-hover:transition-all 
                  "
                >
                  <img
                    key={`${currentGroup}-${list.id}`} // Força recriação na troca
                    className="w-80 rounded-2xl opacity-10 transition-opacity duration-700 ease-in-out group-hover:w-96 group-hover:duration-1000 group-hover:transition-all group-hover:z-10"
                    src={list.url_imgs}
                    alt={`banner de ${list.title}`}
                    onLoad={(e) => {
                      e.currentTarget.classList.remove("opacity-10");
                      e.currentTarget.classList.add("opacity-100");
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button
          onClick={nextGroup}
          className="
            bg-wattle-400 rounded-full
            hover:bg-wattle-200 hover:shadow-[0px_0px_50px_rgba(208,210,93,11)]
            transition
            duration-1000
            "
        >
          <RiArrowRightSFill className="text-4xl" />
        </button>
      </div>

      <div className="flex space-x-2">
        {Array.from({ length: totalGroups }).map((_, index) => (
          <span
            key={index}
            onClick={() => goToGroup(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === currentGroup ? "bg-wattle-700" : "bg-wattle-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
