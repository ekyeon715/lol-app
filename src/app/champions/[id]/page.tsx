import { getChampionDetail } from "@/utils/severApi";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const champion = await getChampionDetail(params.id);

  return {
    title: `${champion.name} - ${champion.title}`,
    description: champion.lore.substring(0, 150),
  };
}

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const championDetail = await getChampionDetail(params.id);
  return <div></div>;
};

export default DetailPage;
