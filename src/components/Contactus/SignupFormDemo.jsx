"use client";
import React, { useState, useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { CardSpotlight } from "../ui/card-spotlight";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { sendEmail } from "@/Actions/sendEmail";
import { motion, useInView } from "framer-motion";
import { TextRevealCardPreview } from "./TextRevealCardDemo";
export function SignupFormDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const send = async () => {
    console.log("send");
    try {
      setLoading(true);
      await sendEmail({ message, name, email });
      setEmail("");
      setMessage("");
      setName("");
      setTimeout(() => {
        setIsDone(true);
      }, 1200);
    } catch (err) {
      console.log(err);
    }
    // }finally{
    //   setLoading(false)
    // }
  };

  return (
    // <CardSpotlight>
    <>
      <motion.div
       id="contactus" 
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        // initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <CardContainer className="w-[90vw] md:w-[60%]">
          <CardBody className="relative group/card bg-gray-900 dark:hover:shadow-2xl hover:shadow-emerald-500/[0.1]  border-white/[0.2] w-full   gap-2 h-auto rounded-xl  border  ">
            <TextRevealCardPreview />
            <div className="flex w-full p-5">
              <CardItem translateZ="60" className="w-[40%] md:block hidden">
                <Image
                  alt="contactus"
                  unoptimized
                  src="/contact.jpg"
                  width="100"
                  height="100"
                  className="w-[100vh] h-[25rem] object-cover rounded-l-xl"
                />
              </CardItem>

              <CardItem className="w-full md:w-[60%] m-6 mt-3" translateZ="50">
                <h2 className="font-bold z-50 text-xl text-neutral-200">
                  Connect with us
                </h2>

                <form className="my-8 w-full" action={send}>
                  <div className="flex w-full flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                      <Label htmlFor="firstname">Name</Label>
                      <Input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-900  text-white"
                        id="firstname"
                        placeholder="Tyler"
                        type="text"
                      />
                    </LabelInputContainer>
                  </div>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      className="bg-gray-900  text-white"
                      placeholder="projectmayhem@fc.com"
                      type="email"
                    />
                  </LabelInputContainer>
                  <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Message</Label>
                    <Input
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-gray-900  text-white"
                      id="password"
                      type="text"
                    />
                  </LabelInputContainer>

                  <button
                    onClick={() => console.log("ldfjls")}
                    type="submit"
                    className="bg-white/5 cursor-pointer relative group/btn  from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  >
                    Send
                    <BottomGradient />
                  </button>
                </form>
              </CardItem>
            </div>
            {/* </CardItem> */}
          </CardBody>
        </CardContainer>
      </motion.div>
      {loading && <Loader isDone={isDone} loading={false} duration={2000} />}
      {isDone && (
        <button
          className="fixed top-4 right-4 text-white z-[120]"
          onClick={() => {
            setLoading(false);
            setIsDone(false);
          }}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </>
    // </CardSpotlight>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
