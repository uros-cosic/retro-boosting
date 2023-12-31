import Image from "next/image";
import Link from "next/link";

const links = [
  {
    label: "ranked",
    link: "/boosting",
  },
  {
    label: "duo",
    link: "/boosting/duo",
  },
  {
    label: "casual",
    link: "/boosting/normals",
  },
  {
    label: "win",
    link: "/boosting/win",
  },
  {
    label: "arena",
    link: "/boosting/arena",
  },
];

function GameList() {
  return (
    <section className="py-10 max-w-5xl mx-auto space-y-5 px-1 lg:px-0">
      <h1 className="text-3xl font-black text-center text-light  ">
        game list
      </h1>
      <h2 className="text-sm lg:text-xl text-grayed text-center">
        You can view all the games where you can find friends.
      </h2>
      <div className="h-[60vh] w-full rounded-xl border-primary border-b-4 border-r-4 overflow-hidden relative shadow-base">
        <Image
          src="/img/game-list.png"
          alt="Game List Section"
          height={600}
          width={1200}
          className="h-full w-full object-cover"
        />
        <div className="z-10 bg-gradient-to-b from-transparent via-transparent to-dark w-full h-full absolute top-0">
          <div className="h-full w-full flex items-end">
            <div className="w-full md:w-1/2 h-1/3   flex flex-col items-center justify-center space-y-5">
              <h1 className="text-center text-2xl font-normal text-light">
                league of legends
              </h1>
              <div className="flex space-x-2">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.link}
                    className="text-primary px-2 py-1 rounded-full border-primary border font-medium text-xs hover:text-primary/80 hover:border-primary/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameList;
