import {
  Container,
  Stack,
  ButtonGroup,
  IconButton,
  Text,
  Link,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { Logo } from "./logo";

export const Footer = () => (
  <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
    <Stack spacing={{ base: "4", md: "5" }}>
      <Stack justify="space-between" direction="row" align="center">
        <Logo />
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://github.com/atfromhome"
            aria-label="GitHub"
            icon={<FaGithub fontSize="2rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Stack justify="space-between" direction="row" align="center">
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"} color="subtle" fontSize="sm">
            Terms of Service
          </Link>
          <Link href={"#"} color="subtle" fontSize="sm">
            Privacy Policy
          </Link>
        </Stack>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Ziswapp, Inc. All rights reserved.
        </Text>
      </Stack>
    </Stack>
  </Container>
);
