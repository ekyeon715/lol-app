import { getItemList, getLatestVersion } from "@/utils/severApi";
import Image from "next/image";

const ItemPage = async () => {
  const [items, version] = await Promise.all([
    getItemList(),
    getLatestVersion(),
  ]);
  return (
    <div>
      <p>아이템 목록</p>
      {items.map((item) => (
        <div key={item.name}>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
            alt={item.name}
            width={100}
            height={100}
          />
          <h2>{item.name}</h2>
          <p>{item.plaintext}</p>
          <p>구매 가격: {item.gold.total}</p>
          <p>판매 가격: {item.gold.sell}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemPage;
