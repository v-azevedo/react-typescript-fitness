import Logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Cupidatat Lorem excepteur eu officia esse anim culpa consectetur id
            Lorem. Fugiat qui ad ipsum id nulla. Ea aliqua cillum duis occaecat
            tempor consectetur exercitation Lorem mollit ullamco sint.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Laborum nisi excepteur culpa</p>
          <p className="my-5">Aliqua quis cupidatat adipisicing</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Excepteur proident est esse enim cupidatat aute.
          </p>
          <p>(99)9999-9999</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
