import React from "react";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactUS = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsNameValid(e.target.value !== "");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setIsMessageValid(e.target.value !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNameValid && isEmailValid && isMessageValid) {
      // alert is just for testing purpose
      alert("Thank you for your message!");
    }
  };

  const { ref, inView } = useInView({ threshold: 0.2 });
  const controls = useAnimation();
  useEffect(() => {
    // if the component is in view, start the animation
    if (inView) {
      controls.start({ y: 0, opacity: 1, transition: { duration: 0.5 } });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      className="relative"
    >
      <div className="w-full h-full min-h-screen flex flex-col items-center justify-center bg-gray-200">
        {/* <motion.div
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        className="relative"
      > */}
        <div className="max-w-2xl lg:text-center mx-2 mb-12">
          <h2 className="text-base font-semibold leading-7 text-orange-500">
            Contact Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our friendly team would love to hear from you.
          </p>
        </div>
        <form
          className="w-full md:w-1/2 bg-white p-8 rounded-lg m-2"
          onSubmit={handleSubmit}
        >
          <div className="space">
            <div className="w-full mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    className={`block flex-1 border-0 bg-transparent py-3 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${
                      !isNameValid ? "border-red-500" : ""
                    }`}
                    type="text"
                    placeholder="Aloysius Gilang"
                  />
                </div>
                {!isNameValid && (
                  <p className="text-red-500 text-sm mt-1">
                    Name field is required.
                  </p>
                )}
              </div>
            </div>
            <div className="w-full mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="block flex-1 border-0 bg-transparent py-3 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="gilagn@gmail.com"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                {!isEmailValid && (
                  <p className="text-red-500 text-sm mt-1">
                    Email field has invalid format.
                  </p>
                )}
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  value={message}
                  onChange={handleMessageChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              {!isMessageValid && (
                <p className="text-red-500 text-sm mt-1">
                  Message field is required.
                </p>
              )}
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write your message.
              </p>
            </div>

            <button
              type="submit"
              className="w-full mt-3 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
        {/* </motion.div> */}
      </div>
    </motion.div>
  );
};

export default ContactUS;
