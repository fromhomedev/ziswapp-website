import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const MainFeature = () => {
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.800")}
      pt="24"
      pb="12"
      overflow="hidden"
    >
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Flex
          align="flex-start"
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          mb="20"
        >
          <Box flex="1" maxW={{ lg: "xl" }} pt="6">
            <Heading as="h1" size="3xl" mt="8" fontWeight="extrabold">
              All-in-one online form & survey builder
            </Heading>
            <Text
              color={useColorModeValue("gray.600", "gray.400")}
              mt="5"
              fontSize="xl"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              adipiscing elit.
            </Text>
            <Button
              mt="8"
              minW="14rem"
              colorScheme="purple"
              size="lg"
              height="14"
              px="8"
              fontSize="md"
              fontWeight="bold"
              target="_blank"
              as="a"
              href="https://demo.ziswapp.com"
            >
              Coba demo sekarang
            </Button>
          </Box>
          <Box boxSize={{ base: "20", lg: "8" }} />
          <Img
            pos="relative"
            marginEnd="-16rem"
            w="50rem"
            src="https://res.cloudinary.com/chakra-ui-pro/image/upload/v1621082943/pro-website/screenshot-dark_w6jpks.png"
            alt="Screenshot for Form builder"
          />
        </Flex>
      </Box>
    </Box>
  );
};
