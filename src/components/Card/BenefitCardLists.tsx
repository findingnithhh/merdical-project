import React from "react";
import BenefitCard from "./BenefitCard";

const benefits = [
  {
    icon: "/icon/free-shipping.svg",
    title: "Free Shipping",
    description: "Free shipping with discount",
  },
  {
    icon: "/icon/support.svg",
    title: "Great Support 24/7",
    description: "Instant access to Contact",
  },
  {
    icon: "/icon/secure-payment.svg",
    title: "100% Secure Payment",
    description: "We ensure your money is safe",
  },
  {
    icon: "/icon/money-back.svg",
    title: "Money-Back Guarantee",
    description: "30 days money-back",
  },
];

const BenefitCardLists = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 xl:grid-cols-4 gap-1 md:gap-4">
      {benefits.map((benefit, index) => (
        <BenefitCard
          key={index}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </div>
  );
};

export default BenefitCardLists;
