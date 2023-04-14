import Image from "next/image";

const Service = ({ title, icon, content, bg }) => {
  return (
    <div
      className={`${bg} lg:w-[420px] w-full flex flex-col items-center justify-center px-20 py-8`}
    >
      <Image alt="" src={icon} className="mb-[30px]" />
      <h2 className="text-white text-center font-semibold mb-[33px]">
        {title}
      </h2>
      <p className="text-gray-300 text-center">{content}</p>
    </div>
  );
};

export default Service;
