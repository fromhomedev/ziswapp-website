import {
  Box,
  Heading,
  Stack,
  LightMode,
  Button,
  Img,
  Text,
} from "@chakra-ui/react";

export const Hero = () => (
  <Box as="section" bg="gray.800" color="white" py="7.5rem">
    <Box maxW={{ base: "xl", md: "5xl" }} mx="auto" px={{ base: "6", md: "8" }}>
      <Box textAlign="center">
        <Heading
          as="h1"
          size="3xl"
          fontWeight="extrabold"
          maxW="48rem"
          mx="auto"
          lineHeight="1.2"
          letterSpacing="tight"
        >
          Design collaboration without the chaos
        </Heading>
        <Text fontSize="xl" mt="4" maxW="xl" mx="auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </Text>
      </Box>
      <Stack
        justify="center"
        direction={{ base: "column", md: "row" }}
        mt="10"
        mb="20"
        spacing="4"
      >
        <LightMode>
          <Button
            target="_blank"
            as="a"
            href="https://demo.ziswapp.com"
            size="lg"
            colorScheme="purple"
            px="8"
            fontWeight="bold"
            fontSize="md"
            className="umami--click--hero-demo-button"
          >
            Klik untuk demo
          </Button>
        </LightMode>
      </Stack>
      <Box
        className="group"
        cursor="pointer"
        position="relative"
        rounded="lg"
        overflow="hidden"
      >
        <Img alt="Screenshot of Ziswapp" src="/images/dashboard.png" />
      </Box>
    </Box>
  </Box>
);
