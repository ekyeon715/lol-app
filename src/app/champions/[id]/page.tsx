import { Champion } from "@/types/Champion";
import { getChampionDetail } from "@/utils/severApi";
import Image from "next/image";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const champion = await getChampionDetail(params.id);

  return {
    title: `${champion.name} - ${champion.title}`,
    description: champion.lore,
  };
}

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const champion: Champion = await getChampionDetail(params.id);
  return (
    <div>
      <h1>{champion.name}</h1>
      <h2>{champion.title}</h2>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
        alt={`${champion.name} 이미지`}
        width={400}
        height={400}
      />
      <p>{champion.lore}</p>
      <h3>스탯</h3>
      <ul>
        <li>공격력: {champion.info.attack}</li>
        <li>방어력: {champion.info.defense}</li>
        <li>마법력: {champion.info.magic}</li>
        <li>난이도: {champion.info.difficulty}</li>
      </ul>
    </div>
  );
};

export default DetailPage;
