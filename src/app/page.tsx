import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <p>리그오브레전드 정보 앱</p>
      <p>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
      <Link href="/champions">
        <Image src="champ.png" alt="" />
        <p>챔피언 목록 보기</p>
      </Link>
      <Link href="/lotation">
        <Image src="lol.png" alt="" />
        <p>금주 로테이션 확인</p>
      </Link>
      <Link href="/items">
        <Image src="mejai.png" alt="" />
        <p>아이템 목록 보기</p>
      </Link>
    </div>
  );
};

export default page;
