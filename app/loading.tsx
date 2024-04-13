import { Flex, Spinner, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <Flex
      justify="center"
      align="center"
      className="min-h-screen"
      direction="column"
    >
      <Image
        src="/spinner.gif"
        alt="loading spinner"
        width={100}
        height={100}
      />
    </Flex>
  );
};

export default loading;
