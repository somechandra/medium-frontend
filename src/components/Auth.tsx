import { Link, useNavigate } from "react-router-dom";
import { LabelledInput } from "./LabelledInput";
import { useState } from "react";
import axios from "axios";
import { SignUpInput } from "../zod";
import { BACKEND_URL } from "../config";

// trpc library for type check in FE and BE both
export const Auth = ({ type }: { type: "signIn" | "signUp" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignUpInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const resp = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signUp" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = resp.data?.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      // alert the user here that request failed.
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="text-4xl font-bold px-10">Create an account</div>
        <div className="text-slate-500 pb-5">
          {type === "signUp"
            ? "Already have an account?"
            : "Don't have an account?"}
          <Link
            className="pl-2 underline"
            to={type === "signUp" ? "/signin" : "/signup"}
          >
            {type === "signUp" ? "Sign In" : "Sign Up"}
          </Link>
        </div>
        <div className="w-full">
          {type === "signUp" ? (
            <LabelledInput
              label="Name"
              placeholder="Enter your name"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  name: e.target.value,
                }));
              }}
            />
          ) : null}
          <LabelledInput
            label="Username"
            placeholder="s@example.com"
            onChange={(e) => {
              setPostInputs((c) => ({
                ...c,
                email: e.target.value,
              }));
            }}
          />
          <LabelledInput
            label="Password"
            type="password"
            placeholder=""
            onChange={(e) => {
              setPostInputs((c) => ({
                ...c,
                password: e.target.value,
              }));
            }}
          />
          <button
            type="button"
            onClick={sendRequest}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
            focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm 
            px-5 py-2.5 me-2 mb-2 w-full mt-5"
          >
            {type === "signUp" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};
