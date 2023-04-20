import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import LetsTalkArea from "../../common/LetsTalkArea";
import HowWeWorkArea from "./HowWeWorkArea";
import ServicePrice from "./ServicePrice";
import WhatWeDoArea from "./WhatWeDoArea";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import ServiceDetailsWrapper from "../ServiceDetails/ServiceDetailsWrapper";

function ServicesPage() {
  return (
    <>
      <Breadcrumb pageName="Service" />
      <WhatWeDoArea />
      <HowWeWorkArea />
      <ServiceDetailsWrapper/>
      {/* <ServicePrice /> */}
      <LetsTalkArea />
    </>
  );
}

export default ServicesPage;
