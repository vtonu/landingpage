const Footer = () => {
  return (
    <footer className="py-10 mt-20 text-center border-t border-blue-700">
      <h3 className="mb-4 text-xs font-light text-neutral-700">
        Copyright © 2024 Meter Electric LLC.
      </h3>

      <h4 className="text-xs font-normal text-neutral-700">
        Web Design by{' '}
        <a
          href="https://github.com/vtonu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 ">
          Victor Tonu
        </a>
        .
      </h4>
    </footer>
  );
};

export default Footer;
