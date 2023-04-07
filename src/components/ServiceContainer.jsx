import { servicesData } from "@/moks/servicesData";
import Service from "./ServiceItem";

const ServiceContainer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-col lg:flex-row">
        {servicesData.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </div>
  );
};

export default ServiceContainer;
