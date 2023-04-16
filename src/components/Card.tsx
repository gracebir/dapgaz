import Image from "next/image";
import icon from "/public/images/price-icon.png";
import gaz from "/public/images/adapGaz-transformed 1.png";
import start from "/public/images/start.png";
import Button from "./Button";
import Link from "next/link";

type cardProps = {
  price: number
  title: string
  subtitle: string
  id: number
}

const Card = ({ price, title, subtitle, id }:cardProps ) => {
  return (
    <Link href={`/produit/${id}`} className="flex flex-col w-[284px] shadow-card-shadw">
      <Image src={gaz} alt="" className="rounded-t-lg" />

      <div className="flex  box-card p-[19px] flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="font-bold">{title}</h2>
            <span className="text-[#4A4A4A] text-xs">{subtitle}</span>
            <div className="flex">
              <Image src={start} alt="" />
              <Image src={start} alt="" />
              <Image src={start} alt="" />
            </div>
          </div>
          <div className="flex gap-[4px]">
            <Image src={icon} alt="" className="w-[21px] h-[21px]" />
            <span>{price} $</span>
          </div>
        </div>
        <Button className="self-end">Ajouter</Button>
      </div>
    </Link>
  );
};

export default Card;
