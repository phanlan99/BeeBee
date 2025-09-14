import { APP_NAME } from "@/lib/constants/name";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t flex items-center justify-center'>
      <div className='p-5 flex-center'>
        {currentYear} {APP_NAME}. All Rights reserved.
      </div>
    </footer>
  );
};

export default Footer;