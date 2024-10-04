import { getChampionList, getLatestVersion } from "@/utils/severApi";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400;

const page = async () => {
  const [version, champions] = await Promise.all([
    getLatestVersion(),
    getChampionList(),
  ]);
  return (
    <div>
      <p>챔피언 목록</p>
      {champions.map((champion) => (
        <div key={champion.key}>
          <Link href={`/champions/${champion.id}`}>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champion.image.full}`}
              alt={champion.name}
              width={100}
              height={100}
            />
            <h2>{champion.name}</h2>
            <p>{champion.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default page;
