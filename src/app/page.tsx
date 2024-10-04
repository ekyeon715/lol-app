import Image from "next/image";
import Link from "next/link";
import React from "react";
import img_01 from "./public/champ.png";
import img_02 from "./public/lol.png";
import img_03 from "./public/mejai.png";

const page = () => {
  return (
    <div>
      <p>리그오브레전드 정보 앱</p>
      <p>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
      <Link href="/champions">
        <Image src={img_01} alt="챔피언 목록" width={400} height={400} />
        <p>챔피언 목록 보기</p>
      </Link>
      <Link href="/lotation">
        <Image src={img_02} alt="금주 로테이션" width={400} height={300} />
        <p>금주 로테이션 확인</p>
      </Link>
      <Link href="/items">
        <Image src={img_03} alt="아이템 목록" width={400} height={300} />
        <p>아이템 목록 보기</p>
      </Link>
    </div>
  );
};

export default page;
