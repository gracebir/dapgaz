import Image from "next/image";

const Value = ({ image, description }) => {
  return (
    <div className="flex gap-[10px] text-white items-center">
      <Image src={image} />
      <p className="text-center w-[281px]">{description}</p>
    </div>
  );
};

export default Value;
