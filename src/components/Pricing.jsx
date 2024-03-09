import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import Section from "./Section";
import { PricingList } from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

export const Pricing = () => {
  return (
    <Section className="overflow-hidden id='pricing'">
      <div className="container relative z-2 ">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1 "
            widht={255}
            height={255}
            alt="Sphere"
          ></img>
          <div id="pricing" className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            ></img>
          </div>
        </div>
        <Heading 
          tag="GET STARTED WITH BRAINWAVE"
          title="Pay once, use forever"
        ></Heading>

        <div  className="relative">
          <PricingList></PricingList>
          <LeftLine></LeftLine>
          <RightLine></RightLine>
        </div>
      </div>
    </Section>
  );
};
