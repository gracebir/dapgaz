import Image from "next/image";

const Service = ({ styles, title, icon, content, bg }) => {
  return (
    <div
      className={`${bg} w-[420px] flex flex-col items-center justify-center px-20 py-8`}
    >
      <Image src={icon} className="mb-[30px]" />
      <h2 className="text-white text-center font-semibold mb-[33px]">
        {title}
      </h2>
      <p className="text-gray-300 text-center">{content}</p>
    </div>
  );
};

export default Service;
