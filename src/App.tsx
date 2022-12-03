import { gql, useQuery } from "@apollo/client";
import { Box, Center, Image, Heading, Spinner, Text } from "@chakra-ui/react";
import AppButton from "./components/Button";

export default function App() {
  const QUERY = gql`
    {
      users {
        id
        name
        email
        image
      }
    }
  `;

  const { data, loading, error } = useQuery(QUERY);

  if (loading)
    return (
      <Center>
        <Spinner></Spinner>
      </Center>
    );

  if (error)
    return (
      <Center>
        <Heading>Something went wrong</Heading>
      </Center>
    );

    console.log(data)
  return (
    <>
       {data.users.map((user: any) => (
        <Box key={user.name} p={2} borderWidth={1}>
          <Image
            width={100}
            height={100}
            src={user.image}
            alt={user.name}
          />
          <Heading>{user.name}</Heading>
          <Text>{user.email}</Text>
        </Box>
      ))}
    </>
  );
}
