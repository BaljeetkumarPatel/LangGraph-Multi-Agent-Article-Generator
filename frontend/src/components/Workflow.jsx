import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AgentCard from "./AgentCard";
import AnimatedArrow from "./AnimatedArrow";
const steps = [
  {
    title: "User Request",
    type: "User",
  },
  {
    title: "Writer Agent",
    type: "Writer",
  },
  {
    title: "Reviewer Agent",
    type: "Reviewer",
  },
  {
    title: "Internet Search",
    type: "Search",
  },
  {
    title: "Writer Update",
    type: "Writer",
  },
  {
    title: "Final Review",
    type: "Final",
  },
  {
    title: "Generated Article",
    type: "Article",
  },
];

const Workflow = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-5xl px-4">

        <h2 className="mb-12 text-center text-3xl font-bold text-slate-800">
          Multi-Agent Workflow
        </h2>

        <div className="flex flex-col items-center">

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              <AgentCard
                    title={step.title}
                    type={step.type}
                    active={active === index}
                />

              {index !== steps.length - 1 && (
                    <AnimatedArrow active={active > index} />
                )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Workflow;