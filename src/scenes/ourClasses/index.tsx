import { motion } from 'framer-motion';
import { IClasses, SelectedPage } from '@/shared/types';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import HText from '@/shared/HText';
import Class from './Class';

type Props = {
  setSelectedPage: (values: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  const classes: Array<IClasses> = [
    {
      name: 'Weight Training Classes',
      description:
        'Occaecat est pariatur do irure reprehenderit velit proident sit laborum do ex commodo irure. Ex Lorem culpa occaecat esse labore sint proident anim. Ad excepteur reprehenderit laborum nisi officia commodo et aute laboris eiusmod esse.',
      image: image1,
    },
    {
      name: 'Yoga Classes',
      description:
        'Eiusmod laboris qui sunt fugiat ex. Aliqua labore consequat ipsum exercitation fugiat occaecat exercitation elit magna deserunt quis. Ex incididunt id dolor ipsum eiusmod culpa qui reprehenderit adipisicing sint aliqua officia et.',
      image: image2,
    },
    {
      name: 'Ab Core Classes',
      description:
        'Laborum mollit eu Lorem culpa nostrud voluptate. Amet laboris voluptate aliquip non quis aliquip adipisicing adipisicing incididunt incididunt. Eiusmod dolor culpa commodo magna reprehenderit sunt exercitation labore exercitation nisi. Sint amet nulla deserunt pariatur.',
      image: image3,
    },
    {
      name: 'Adventure Classes',
      description:
        'Aute quis id laborum velit dolore elit sit id nisi eiusmod in. Culpa anim est esse et ipsum ex id nostrud culpa. Irure sint nostrud ut ullamco sit veniam minim occaecat sunt voluptate do ut culpa. Ullamco eiusmod adipisicing Lorem cillum tempor aute dolore cillum velit do cillum do ex nulla.',
      image: image4,
    },
    {
      name: 'Fitness Classes',
      description:
        'Consequat fugiat ad do elit ea deserunt ipsum quis ea magna. Pariatur occaecat sit nisi proident reprehenderit ullamco reprehenderit Lorem enim qui dolor. Id irure reprehenderit eiusmod cillum sunt excepteur magna deserunt dolore aute occaecat sint excepteur consectetur.',
      image: image5,
    },
    {
      name: 'Training Classes',
      description:
        'Aliquip ad esse ullamco eu tempor eiusmod anim magna exercitation. Enim adipisicing ut labore magna. Elit ut cillum sit ullamco eu eu ex irure. Exercitation est deserunt irure veniam incididunt aliquip enim in do ea cillum. Et id officia dolore duis.',
      image: image6,
    },
  ];

  return (
    <section id={SelectedPage.OurClasses} className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Quis excepteur aute consectetur magna culpa pariatur eu Lorem id irure deserunt. Ea laborum veniam officia
              ea eu ex commodo labore proident adipisicing anim ea culpa consectetur.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: IClasses, index) => (
              <Class key={`${item.name}-${index}`} name={item.name} description={item.description} image={item.image} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
