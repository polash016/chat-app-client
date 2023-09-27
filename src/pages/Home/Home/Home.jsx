// import Chat from "../Chat/Chat";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Login from "../../../Login/Login/Login";
import Registration from "../../../Login/Registration/Registration";
import bg1 from "../../../../public/abstract-luxury.avif";
import bg2 from "../../../../public/pexels-julie-aagaard-1426718.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxW="xl" centerContent>
        <Box
          className="bg-opacity-20  bg-white"
          d="flex"
          justifyContent="center"
          p={3}
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
        >
          <Text fontSize="4xl" textAlign="center" fontFamily="Work sans">
            Whisper Waves
          </Text>
        </Box>
        <Box
          className="bg-opacity-20 bg-white"
          w="100%"
          p={4}
          borderRadius="lg"
        >
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Registration />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
