"use client";

import { Champion } from "@/types/Champion";
import { getChampionList, getLatestVersion } from "@/utils/severApi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const RotationPage: React.FC = () => {
  const [champions, setChampions] = useState<Champion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const version = getLatestVersion();

  useEffect(() => {
    const fetchRotationChampions = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/rotation");

        if (!response.ok) {
          throw new Error("Failed to fetch rotation data");
        }

        const { freeChampionIds } = await response.json();

        const champions = await getChampionList();
        const filteredChampion = champions.filter((champion) =>
          freeChampionIds.includes(Number(champion.key))
        );
        setChampions(filteredChampion);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("알 수 없는 오류 발생");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRotationChampions();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>무료 로테이션 챔피언 목록</h1>
      <ul>
        {champions.map((champion) => (
          <li key={champion.id}>
            <Link href={`/champions/${champion.id}`}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                alt={champion.name}
                width={100}
                height={100}
                unoptimized
              />
              <div>{champion.name}</div>
              <div>{champion.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RotationPage;
