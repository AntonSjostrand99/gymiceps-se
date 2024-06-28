import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
  return (
    <footer className=" bg-custom-blue text-white mt-10">
      {/* Nyhetsbrevssektion */}
      <div className=" bg-blue-300 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-0 text-black">Prenumerera på vårt nyhetsbrev</h2>
          <form className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Din e-postadress"
              className="w-full md:w-auto bg-white text-white border border-gray-600 rounded-md py-2 px-3"
            />
            <button
              type="submit"
              className="text-black px-4 py-2 rounded-md shadow-md focus:outline-none border border-black hover:bg-white"
            >
              Prenumerera
            </button>
          </form>
        </div>
      </div>

      {/* Huvud footer */}
      <div className="container mx-auto px-4 md:px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-4 bg-custom-blue">
        <div>
          <h3 className="text-lg font-semibold mb-4">Om oss</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
          <p className="text-sm">Telefon: 123-456789</p>
          <p className="text-sm">E-post: info@example.com</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Följ oss</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white transform transition-transform duration-200 hover:scale-110">
              <FacebookIcon/>
            </a>
            <a href="#" className="text-white transform transition-transform duration-200 hover:scale-110">
             <InstagramIcon/>
            </a>
            <a href="#" className="text-white transform transition-transform duration-200 hover:scale-110">
              <GitHubIcon/>
            </a>
          </div>
        </div>
      </div>
      <hr className='bg-gray-700' />

      {/* Copyright */}
      <div className=" bg-custom-blue py-4">
        <div className="container mx-auto text-sm text-center">
          &copy; 2024 Gymiceps. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
};

export default Footer;