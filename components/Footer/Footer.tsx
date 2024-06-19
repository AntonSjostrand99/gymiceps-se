import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex flex-col md:w-1/2">
            <img src="/logo.png" alt="Företagets logotyp" className="w-24 mb-4" />
            <p className="text-sm">
              Vi är ett företag som erbjuder ... (beskriv din verksamhet).
            </p>
          </div>
          <div className="flex flex-col md:w-1/2">
            <h4 className="text-md font-semibold mb-4">Kontakt</h4>
            <ul className="text-sm">
              <li>
                <a href="mailto:info@exempel.se" className="hover:underline">
                  info@exempel.se
                </a>
              </li>
              <li>
                <a href="tel:+46700123456" className="hover:underline">
                  +46 700 123 456
                </a>
              </li>
              <li>
                <a href="https://www.exempel.se" className="hover:underline">
                  www.exempel.se
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;