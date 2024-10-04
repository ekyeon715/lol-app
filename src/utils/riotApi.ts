import { NextResponse } from "next/server";

export async function getRotationChamp(request: Request) {
  const response = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      method: "GET",
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY as string,
      },
    }
  );
  const data = await response.json();
  return NextResponse.json(data);
}
