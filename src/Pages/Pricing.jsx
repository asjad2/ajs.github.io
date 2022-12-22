import Pricingcard from "../Components/Pricingcard";
import OffersData from "../Data/OffersData";
const Pricing = (props) => {
  return (
    <div className={`bg-${props.bgcolor} text-${props.txtcolor}  container`}>
    <div className="container px-5 py-4 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 ">
          Pricing
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">
          Prices can be altered with further negotiation or amount of work.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-flow-row md:grid-cols-2 md:grid-flow-row grid-flow-row  gap-4">
        {OffersData.map((item) => (
          <Pricingcard
            id={item.id}
            category={item.category}
            title={item.title}
            item={item}
            description1={item.description1}
            description2={item.description2}
            description3={item.description3}
            description4={item.description4}
            description5={item.description5}
            description6={item.description6}
            description7={item.description7}
            message={item.message}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Pricing;
