import { SignInUser, SignUpUser } from "@/types/userObjects";
import axios from "axios";

export async function registerUser(signUpUser: SignUpUser) {
  const url = `api/users/register`;
  console.log(url);
  console.log("SAME");
  console.log(signUpUser);
  await axios
    .post(url, signUpUser)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function signin(signINUser: SignInUser) {
  const url = `api/users/signin`;
  await axios
    .post(url, signINUser)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
