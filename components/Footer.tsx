import React from "react";
import Link from "next/link";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-ink">
        <div className="max-w-6xl m-auto flex flex-wrap justify-left">
          {/* Col-1 */}
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            {/* Col Title */}
            <div className="text-xs uppercase text-sunrise font-medium mb-6">
              Sailsetters
            </div>
            {/* Links */}
            <Link
              href="/#statements"
              className="my-3 block text-sand hover:pl-[8px] text-sm font-medium duration-300"
            >
              Über uns
            </Link>
            <Link
              href="/#projects"
              className="my-3 block text-sand hover:pl-[8px] text-sm font-medium duration-300"
            >
              Projekte
            </Link>
            <Link
              href="/impressum"
              className="my-3 block text-sand hover:pl-[8px] text-sm font-medium duration-300"
            >
              Kontakt
            </Link>
          </div>
          {/* Col-2 */}
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            {/* Col Title */}
            <div className="text-xs uppercase text-sunrise font-medium mb-6">
              Rechtliches
            </div>
            {/* Links */}
            <Link
              href="/impressum"
              className="my-3 block text-sand hover:pl-[8px] text-sm font-medium duration-300"
            >
              Impressum
            </Link>
            <Link
              href="/satzung"
              className="my-3 block text-sand hover:pl-[8px] text-sm font-medium duration-300"
            >
              Satzung
            </Link>
            <Link
              href="/datenschutz"
              className="my-3 block text-sand hover:pl-[8px] text-sm font-medium duration-300"
            >
              Datenschutz
            </Link>
          </div>
          {/* Col-3 */}
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-sunrise font-medium mb-6">
              Social
            </div>
            <ul className="flex gap-5">
              <li>
                <Link
                  href="https://www.instagram.com/sailsetters/"
                  target="_blank"
                  className="my-3 block text-sand hover:text-[#cd486b] text-sm font-medium duration-300"
                >
                  <FontAwesomeIcon width={20} height={20} icon={faInstagram} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/sailsetters"
                  target="_blank"
                  className="my-3 block text-sand hover:text-[#4267B2] text-sm font-medium duration-300"
                >
                  <FontAwesomeIcon width={20} height={20} icon={faFacebook} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/sailsetters"
                  target="_blank"
                  className="my-3 block text-sand hover:text-[#0e76a8] text-sm font-medium duration-300"
                >
                  <FontAwesomeIcon width={20} height={20} icon={faLinkedin} />
                </Link>
              </li>
              {/* <li>
                <Link href="#" target="_blank" className="my-3 block text-driftwood hover:text-[#ff0000] text-sm font-medium duration-300">
                  <FontAwesomeIcon width={20} height={20} icon={faYoutube} />
                </Link>
              </li> */}
            </ul>
          </div>
          {/* Col-4
          <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            <div className="text-xs uppercase text-driftwood font-medium mb-6">
              Newsletter
            </div>
            <div className="relative w-full">
              <form action="">
                <input type="email" placeholder="Email" className="text-driftwood bg-ink shadow-lg rounded-lg border border-driftwood/40 focus:outline-none focus:border-driftwood/40 text-sm w-full px-2 py-2" />
                <button className="absolute right-0 top-0 mt-2 mr-2">
                  <EnvelopeOpenIcon className="h-5 w-5 text-driftwood hover:text-driftwood" />
                </ button>
              </form>
            </div>
          </div>*/}
        </div>
        {/* Add a samll copyright message */}
        <div className="items-center flex pb-5 px-3 m-auto pt-5 border-t border-port text-ink text-sm flex-col max-w-6xl">
          <p>
            Designed by{" "}
            <Link
              className="text-sand hover:text-paper"
              href="https://www.linkedin.com/in/maxvonstorch/"
            >
              Max von Storch
            </Link>{" "}
            and{" "}
            <Link
              className="text-sand hover:text-paper"
              href="https://www.linkedin.com/in/navid-rajaei-a405ab251/"
            >
              Navid Rajaei
            </Link>
          </p>
          <p className="mt-2">
            © {currentYear} Sailsetters e.V. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
