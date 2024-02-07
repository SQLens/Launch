import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Is SQLens free to use?",
    answer: "Yes, this template is completely free to use. We're committed to the principles of open source, believing in the power of community collaboration to drive innovation and improve software accessibility.",
  },
  {
    question: "Can I use it in a commercial project?",
    answer: "Yes! This project is operating under the MIT license",
  },
  {
    question: "What is your refund policy? ",
    answer:
      "SQLens is designed to handle large datasets with efficiency, leveraging the power of GraphQL to optimize data retrieval. The integration of Apollo Server enhances this capability by implementing caching mechanisms further optimizing performance by reducing load on your database during query operations",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "No, we don't offer technical support for free downloads. Feel free to enter an issue on github or even contribute a pull request! Contribution instructions can be found in the README",
  },
];

export default Faq;