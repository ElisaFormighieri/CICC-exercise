import { Box, Flex, Image, Heading, Wrap, Text } from '@chakra-ui/react';
import Select, { SingleValue } from 'react-select';
import React, { useState, useEffect } from 'react';

type Option = {
  value: string;
  label: string;
};

function App() {
  const [dogBreeds, setDogBreeds] = useState<Option[]>([]);
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((dogBreeds: { message: { [key: string]: [] } }) => {
        const options = Object.keys(dogBreeds.message).map((key) => {
          return {
            value: key,
            label: key.charAt(0).toUpperCase() + key.slice(1),
          };
        });
        setDogBreeds(options);
      })
      .catch((error) => console.log(error));
  }, []);

  const fetchImagesByBreed = (breed: string) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((response) => response.json())
      .then((dogBreeds: { message: [] }) => {
        setDogImages(dogBreeds.message);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box>
      <Box display={{ base: 'none', md: 'inline-block' }}>
        <Image src="paws.png" w="250px" h="200px" />
      </Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        w="100%"
        px={10}>
        <Box mt={{ base: 10, md: -40 }}>
          <Image
            w="100%"
            h="150px"
            objectFit="cover"
            src="https://rlv.zcache.com/dogecoin_doge_day_4_20_stock_market_crypto_funny_classic_round_sticker-r420f607844dd44b99378c519dbef8d26_0ugmp_8byvr_307.jpg"
            alt="dog header image"
            ml={{ base: 0, md: 4 }}
          />
        </Box>

        <Heading
          fontFamily="times"
          color="blackAlpha.700"
          textAlign="center"
          fontSize={40}
          lineHeight={1}
          mb={2}>
          Welcome to Dog Images
        </Heading>

        <Text pb={5} color="blackAlpha.700" fontFamily="times" fontSize={30}>
          Choose a breed here:
        </Text>

        <Box color="black" w="100%" maxW="180px">
          <Select
            options={dogBreeds}
            onChange={(selectedOption: SingleValue<Option>) =>
              fetchImagesByBreed(selectedOption?.value || '')
            }
          />
        </Box>
      </Flex>

      <Wrap spacing={1} ml={{ base: 14, md: 5 }} mt={14}>
        {dogImages.map((imageUrl: string) => (
          <Image
            key={imageUrl}
            w="240px"
            h="240px"
            objectFit="cover"
            src={imageUrl}
            alt=""
          />
        ))}
      </Wrap>
    </Box>
  );
}

export default App;
