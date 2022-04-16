//import styles from "./serviceCard.module.scss";

interface ServiceCardTypes {
  description: string;
  icon: JSX.Element;
  title: string;
}

const ServiceCard = ({ description, title, icon }: ServiceCardTypes) => {
  return (
    <div>
      <div>{icon}</div>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
