import { Img, ImgProps } from "@chakra-ui/react";

export const Logo = (props: ImgProps) => (
  <Img
    src="https://raw.githubusercontent.com/atfromhome/image-assets/main/ziswapp-dark-logo.svg"
    h="10"
    alt="Ziswapp"
    {...props}
  />
);
