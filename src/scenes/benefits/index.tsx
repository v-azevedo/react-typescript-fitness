import HText from '@/shared/HText';
import { IBenefit, SelectedPage } from '@/shared/types';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Benefit from './Benefit';
import ActionButton from '@/shared/ActionButton';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  const benefits: Array<IBenefit> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: 'State of the Art Facilities',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat suscipit ab, illum eligendi in consequuntur officiis? Molestiae, vero tenetur aut iure, voluptate..',
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverse Classes",
      description:
        'Reprehenderit enim culpa duis et amet eu magna enim nisi et. Pariatur minim cupidatat ullamco officia enim commodo eu. Mollit consectetur consectetur sunt amet non esse duis.',
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: 'Expert and Pro Trainers',
      description:
        'Minim minim irure eu incididunt tempor id nulla incididunt et et. Tempor exercitation pariatur in qui occaecat ullamco occaecat ut in tempor nostrud. Duis elit ullamco ipsum.',
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id={SelectedPage.Benefits} className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to get you to tour ultimate fitness goal with
            ease. We provide true care into each and every member .
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits-page-graphic" />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBER GETTING <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
              {/* DESCRIPTION */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="my-5">
                  Id mollit cupidatat nisi ea commodo cupidatat est eiusmod duis occaecat id esse officia sit. Consequat
                  elit pariatur commodo esse nostrud nulla ullamco ex. Consequat sunt commodo incididunt sint anim
                  aliquip nulla officia deserunt elit eu excepteur. Nisi ullamco culpa qui ea cupidatat consectetur.
                  Eiusmod ut laboris sint enim sint exercitation et laborum adipisicing tempor ipsum commodo et. Dolor
                  velit in dolor ad ea cillum.
                </p>
                <p className="mb-5">
                  Exercitation mollit labore aliquip id cillum laboris duis aute laborum deserunt. Veniam id amet eu
                  fugiat laboris consequat amet dolore sint fugiat duis eiusmod. Exercitation culpa eu reprehenderit
                  officia. Est anim incididunt mollit sint id. Et non magna nostrud cillum laborum quis anim sunt dolor
                  aliqua anim esse fugiat incididunt. Ex dolore elit irure laborum labore veniam tempor nulla ut tempor
                  enim aliquip.
                </p>
              </motion.div>
              {/* BUTTON */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Benefits;
