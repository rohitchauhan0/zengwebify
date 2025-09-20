import { motion } from "framer-motion";
import SpecialityComp from "./speciality_comp";
 // adjust path

export default function SpecialitySection() {
  const items = [
    {
      img: "/icons/brand.svg",
      title: "Analysis and Positioning",
      p1: "Brand Identity",
      p2: "Logos and Visual Identities",
      p3: "Names and Slogans",
    },
    {
      img: "/icons/website.svg",
      title: "Website Design",
      p1: "Custom & Open-Source",
      p2: "UX/UI Design + Interactive Development",
      p3: "Eco-Design and Digital Sobriety",
    },
    {
      img: "/icons/design-print.svg",
      title: "Print Design",
      p1: "Brochures, Posters",
      p2: "POS Displays, Signs, and Signage",
      p3: "Cultural Communication and Specialized Magazines",
    },
    {
      img: "/icons/mobile-app.svg",
      title: "Mobile Applications",
      p1: "Interface Design",
      p2: "Multi-Platform Development",
      p3: "Custom Business Solutions",
    },
    {
      img: "/icons/motion.svg",
      title: "Motion Designs",
      p1: "Storyboarding",
      p2: "Graphic Creation",
      p3: "Compositing and Animations",
    },
    {
      img: "/icons/typographie.svg",
      title: "Typography",
      p1: "Creation",
      p2: "Customization",
      p3: "Lettering",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 space-y-20 pt-64 z-10">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SpecialityComp {...item} />
        </motion.div>
      ))}
    </div>
  );
}
