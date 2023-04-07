import { servicesData } from "@/moks/servicesData";
import Service from "./Service";
import Wrapper from "./Wrapper";

const ServiceContainer = () => {
  return (
    <Wrapper>
      <div className="flex justify-center mt-10">
        {servicesData.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </Wrapper>
  );
};

export default ServiceContainer;
