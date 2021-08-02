import { Code } from "@chakra-ui/react";
import Image from 'next/image';

const extraComponents = {
    Image
}

const MDXComponents = {
    inlineCode: (props) => <Code colorScheme="red" fontSize="0.84em" {...props} />,
    ...extraComponents
}

export default MDXComponents;