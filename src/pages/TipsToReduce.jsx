import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";

import LandingNavBar from "../components/landing/LandingNavBar";

const TipsToReduce = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <div className="h-screen md:-ml-64">
        <LandingNavBar />
        <div className="px-12">
          <h1 className="mb-4 text-3xl font-extrabold text-center text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Reducing your <span> </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              footprint
            </span>
          </h1>
          <h2 className="justify-center text-center">
            Here are some concrete actions you can take (starting today) to
            reduce single-use plastics.
          </h2>
          <div className="flex-col px-10 border rounded mt-11">
            <Accordion open={open === 1}>
              <AccordionHeader
                className="justify-center text-center"
                onClick={() => handleOpen(1)}
              >
                1. Spread the word
              </AccordionHeader>
              <AccordionBody className="mt-4 text-center ">
                Raising awareness is an important first step. We’ve made it easy
                to share your plastic footprint, and other plastic facts on
                social media.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader
                className="justify-center "
                onClick={() => handleOpen(2)}
              >
                2. Bring your own
              </AccordionHeader>
              <AccordionBody className="mt-4 text-center">
                Pack a reusable grocery bag, water bottle or mug, reusable straw
                and utensils in your everyday bag, so you always have them with
                you. When you decline plastic straws or cutlery make sure to do
                it at the time you place your order (not when you receive it).
                This blog post has some more specific suggestions:
                <p
                  className="font-light text-center text-blue-600 underline hover:text-blue-800 "
                  href="https://www.wwf.org.au/news/blogs/10-worst-single-use-plastics-and-eco-friendly-alternatives
            "
                >
                  https://www.wwf.org.au/news/blogs/10-worst-single-use-plastics-and-eco-friendly-alternatives
                </p>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader
                className="justify-center text-center"
                onClick={() => handleOpen(3)}
              >
                3. Download the myMizu app
              </AccordionHeader>
              <AccordionBody className="mt-4 text-center">
                This app includes a map of free hot/cold water refill points
                nearby.
                <p
                  className="font-light text-center text-blue-600 underline hover:text-blue-800 "
                  href="https://www.mymizu.co/"
                >
                  https://www.mymizu.co/
                </p>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4}>
              <AccordionHeader
                className="justify-center text-center"
                onClick={() => handleOpen(4)}
              >
                4. Conscious shopping
              </AccordionHeader>
              <AccordionBody className="mt-4 text-center">
                Purchasing in bulk, avoiding individually-wrapped single
                servings and other excess plastic packaging, asking for a glass
                or mug instead of a disposable cup at a cafe, these are all ways
                to reduce your plastic footprint. Apps such as GoodBye Waste
                (from GreenPeace)
                <span
                  className="font-light text-center text-blue-600 underline hover:text-blue-800 "
                  href="https://goodbyewaste.jp/"
                >
                  https://goodbyewaste.jp/
                </span>{" "}
                can help find shops and grocery stores that sell in bulk and/or
                allow you to bring your own containers.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5}>
              <AccordionHeader
                className="justify-center text-center"
                onClick={() => handleOpen(5)}
              >
                5. At home
              </AccordionHeader>
              <AccordionBody className="justify-center text-center">
                Instead of plastic cling wrap, or plastic zipper bags, use
                microwave-safe silicone lids and reusable food storage
                containers.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TipsToReduce;
