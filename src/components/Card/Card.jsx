import React from 'react';
import { Box, Center, Image, Flex, Badge, Text } from "@chakra-ui/react";
function Card({cardTitle, cardPrice, cardImage}) {
    return (
        <Center>
        <Box p="5" maxW="320px" borderWidth="1px">
          <Image borderRadius="md" src={cardImage} />
          <Flex align="baseline" mt={2}>
            <Badge colorScheme="pink">Plus</Badge>
            <Text
              ml={2}
              textTransform="uppercase"
              fontSize="sm"
              fontWeight="bold"
              color="pink.800"
            >
              Verified &bull; Cape Town
            </Text>
          </Flex>
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            {cardTitle}
          </Text>
          <Text mt={2}>{`$${cardPrice}/night`}</Text>
        </Box>
      </Center>
    );
}

export default Card;