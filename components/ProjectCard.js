import React from "react";
import { Box, Link, Heading, Text, Stack} from "@chakra-ui/react";

const ProjectCard = ({ title, description, link, background }) => {
  return (
    <Box  borderRadius="lg" p={6} background={background} color="gray.50">
      <Link mb={4} href={link} isExternal _hover={{ textDecoration: "none", boxShadow: "xl" }}>
        <Stack spacing="8px">
          <Heading as="h3" size="md" fontWeight="bold" letterSpacing="tighter">
            {title}
          </Heading>
          <Text lineHeight="1.3">{description}</Text>
        </Stack>
      </Link>
    </Box>
  );
};

export default ProjectCard;
