import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import CartFilter from "../../common/CartFilter";
import ProjectProcess from "../projectDetails/ProjectProcess";

function ProjectWrapper() {
  return (
    <>
      <section className="project-area sec-mar">
        <div className="container">
          <SRLWrapper>
           
            <ProjectProcess/>
            <CartFilter />
          </SRLWrapper>
        </div>
      </section>
    </>
  );
}

export default ProjectWrapper;
