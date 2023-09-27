import SocialLogin from "../../pages/Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";

// import axios from "axios";
// import { useHistory } from "react-router";

const Registration = () => {
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const toast = useToast();
  //   const history = useHistory();
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data.email, data.password, data.name, data.photoURL);
    // createUser(data.email, data.password)
    //   .then((result) => {
    //     const user = result.user;
    //     console.log(user);
    //     updateUserProfile(data.name, data.photoURL).then(() => {
    //       const savedUser = { name: data.name, email: data.email };
    //       axios.post("http://localhost:5000/users", savedUser).then((data) => {
    //         console.log(data.data);
    //         reset();
    //         if (data.data.insertedId) {
    //           navigate("/");
    //           toast("Registration successful", {
    //             position: "top-center",
    //             autoClose: 3000,
    //           });
    //           setError("");
    //           reset();
    //         }
    //       });
    //     });
    //   })
    //   .catch((error) => setError(error.message));
  };

  const password = watch("password");
  return (
    <VStack h="full" w="full">
      <form className="w-full" onSubmit={handleSubmit(handleRegister)}>
        <Flex
          className="space-y-6"
          alignItems="center"
          mx="auto"
          flexDirection="column"
          bg={formBackground}
          p={12}
          borderRadius={8}
          boxShadow="lg"
        >
          <InputGroup d="flex" gap={2}>
            <Input
              {...register("name", { required: true })}
              placeholder="Name"
              type="text"
              variant="outline"
            />
            {errors.name && (
              <span className="text-orange-800 mb-3">
                This Field is Required
              </span>
            )}
            <Input
              {...register("email", { required: true })}
              placeholder="Email"
              type="email"
              variant="outline"
            />
            {errors.email && (
              <span className="text-orange-800 mb-3">
                This Field is Required
              </span>
            )}
          </InputGroup>
          <InputGroup size="md">
            <Input
              {...register("password", {
                required: true,
                minLength: 8,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              type={show ? "text" : "password"}
              placeholder="Password"
              variant="outline"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
            {errors.password?.type === "required" && (
              <span className="text-orange-800">Password is Required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-orange-800">
                Password should be more than 8 characters
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-orange-800">
                Password should have one Uppercase letter, one LowerCase letter,
                one Number & one Special Character
              </span>
            )}
          </InputGroup>
          <InputGroup size="md">
            <Input
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords does not match",
              })}
              type={show ? "text" : "password"}
              placeholder="Confirm password"
              variant="outline"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
            {errors.confirmPassword && (
              <span className="text-orange-800">
                {errors.confirmPassword.message}
              </span>
            )}
          </InputGroup>
          <Input
            type="text"
            p={1.5}
            {...register("photoURL", { required: true })}
            variant="outline"
            placeholder="Photo URL"
          />
          {errors.photoURL && (
            <span className="text-orange-800 m-2">This Field is Required</span>
          )}
          {error && <span className="text-orange-800 m-2">{error}</span>}
          <Button type="submit" colorScheme="teal" mt={6}>
            Register
          </Button>

          <SocialLogin />
        </Flex>
      </form>
    </VStack>
  );
};

export default Registration;
