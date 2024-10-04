import { getChampionDetail } from "@/utils/severApi";

export const dynamic = "force-dynamic";

const DetailPage = async ({ params }: { params: { id: string } }) => {
  const championDetail = await getChampionDetail(params.id);
  return <div></div>;
};

export default DetailPage;
