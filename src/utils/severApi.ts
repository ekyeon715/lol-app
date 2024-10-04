import { Champion } from "@/types/Champion";

export async function getLatestVersion(): Promise<string> {
  try {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const versions = await response.json();
    return versions[0];
  } catch (error) {
    throw new Error("버전 정보를 가져오는 데 실패했습니다.");
  }
}

export async function getChampionList(): Promise<Champion[]> {
  try {
    const version = await getLatestVersion();
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
    );
    const data = await response.json();
    return Object.values(data.data);
  } catch (error) {
    throw new Error("챔피언 목록을 가져오는 데 실패했습니다.");
  }
}

export async function getChampionDetail(id: string): Promise<Champion> {
  const version = await getLatestVersion();
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`
  );
  const data = await response.json();
  return data.data[id];
}

export async function getItemList(): Promise<Items[]> {
  const version = await getLatestVersion();
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
  );
  const data = await response.json();
  return data.data;
}
