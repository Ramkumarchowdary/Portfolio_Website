import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        This is Ramkumar, a B.Tech CSE Undergrad and aspiring frontend web
        developer. I love exploring various designs and building websites out of
        them. I enjoy making websites responsive, accessible, and pixel-perfect.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/file/d/11jMCILHMXihpsJro3S8LroZlBSeMOc8a/view?usp=sharing")
        }
      >
        My Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
