// import { FaUserAlt, FaLock } from "react-icons/fa";

// import { Button } from "@chakra-ui/button";
// import { FormControl, FormLabel } from "@chakra-ui/form-control";
// import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
// import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import { InputGroup, InputRightElement, useToast } from "@chakra-ui/react";

import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import SocialLogin from "../../pages/Shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    setLoading(true);
    console.log(data.email, data.password);
    // try {
    //   signIn(data.email, data.password)
    //     .then((result) => {
    //       const user = result.user;
    //       console.log(user);
    //       // localStorage.setItem("user", JSON.stringify(user));
    //       toast({
    //         title: `Welcome ${user.displayName}`,
    //         status: "success",
    //         duration: 3000,
    //         isClosable: true,
    //         position: "top center",
    //       });
    //       setError("");
    //       reset();
    //       navigate("/");
    //     })
    //     .catch((error) => setError(error.message));
    // } catch (error) {
    //   toast({
    //     title: "Error Occured!",
    //     description: error.response.data.message,
    //     status: "error",
    //     duration: 5000,
    //     isClosable: true,
    //     position: "bottom",
    //   });
    //   setLoading(false);
    // }
  };
  return (
    // <VStack spacing="10px" className="h-screen">
    //   <form
    //     className="h-fit my-auto w-[70%] md:w-[35%] space-y-8 border border-gray-200 p-10 rounded-lg shadow-lg"
    //     onSubmit={handleSubmit(handleLogin)}
    //   >
    //     <FormControl id="email" isRequired>
    //       <FormLabel>Email Address</FormLabel>
    //       <Input
    //         {...register("email", { required: true })}
    //         type="email"
    //         placeholder="Enter Your Email Address"
    //       />
    //       {errors.email && (
    //         <span className="text-orange-800">This Field is Required</span>
    //       )}
    //     </FormControl>
    //     <FormControl id="password" isRequired>
    //       <FormLabel>Password</FormLabel>
    //       <InputGroup size="md">
    //         <Input
    //           {...register("password", { required: true })}
    //           type={show ? "text" : "password"}
    //           placeholder="Enter Password"
    //         />
    //         <InputRightElement width="4.5rem">
    //           <Button h="1.75rem" size="sm" onClick={handleClick}>
    //             {show ? "Hide" : "Show"}
    //           </Button>
    //         </InputRightElement>
    //         {errors.password?.type === "required" && (
    //           <span className="text-orange-800">Password is Required</span>
    //         )}
    //         {error && <span className="text-orange-800">{error}</span>}
    //         <br />
    //       </InputGroup>
    //     </FormControl>
    //     <Button
    //       type="submit"
    //       colorScheme="blue"
    //       width="100%"
    //       style={{ marginTop: 15 }}
    //       isLoading={loading}
    //     >
    //       Login
    //     </Button>
    //     {"Don't Have An Account ? "}
    //     <Link className="text-sky-500" to="/register">
    //       Register Here
    //     </Link>
    //     <SocialLogin />
    //   </form>
    //   <Button
    //     marginBottom={10}
    //     variant="solid"
    //     colorScheme="red"
    //     width="100%"
    //     onClick={() => {
    //       setEmail("guest@example.com");
    //       setPassword("123456");
    //     }}
    //   >
    //     Get Guest User Credentials
    //   </Button>
    // </VStack>
    <Flex h="fit-content" w="full">
      <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
        <Flex
          className="bg-opacity-20 bg-white"
          alignItems="center"
          mx="auto"
          flexDirection="column"
          p={12}
          borderRadius={8}
          boxShadow="lg"
        >
          <Input
            {...register("email", { required: true })}
            placeholder="johndoe@gmail.com"
            type="email"
            variant="filled"
          />
          {errors.email && (
            <span className="text-orange-800 mb-3">This Field is Required</span>
          )}
          <InputGroup size="md" mt={6}>
            <Input
              {...register("password", { required: true })}
              placeholder="**********"
              type={show ? "text" : "password"}
              variant="filled"
            />
            <InputRightElement my="auto" width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {errors.password?.type === "required" && (
            <span className="text-orange-800 mb-6">Password is Required</span>
          )}
          <Button type="submit" colorScheme="blackAlpha" mt={6} mb={8}>
            Log In
          </Button>

          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="dark_mode" mb="0">
              Enable Dark Mode?
            </FormLabel>
            <Switch
              id="dark_mode"
              colorScheme="teal"
              size="lg"
              onChange={toggleColorMode}
            />
          </FormControl>
        </Flex>
      </form>
    </Flex>
  );
};

export default Login;
