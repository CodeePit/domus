import Backdrop4 from '../../assets/imgs/backdrop-4.png';
import Image from 'next/image';
import { WhatsIcon } from 'assets/svgs/whats';
import { MailIcon } from 'assets/svgs/mail';
import { PinIcon } from 'assets/svgs/pin';
import { InstagramIcon } from 'assets/svgs/instagram';
import { FacebookIcon } from 'assets/svgs/facebook';
import { LinkedinIcon } from 'assets/svgs/linkedin';
import Link from 'next/link';
import { HomesIcon } from 'assets/svgs/homes';
import { CoreLogo } from 'components/Logo/core';

const SOCIALS = [
  {
    id: 1,
    link: 'https://instagram.com/domusconstrucao?igshid=MmIzYWVlNDQ5Yg==',
    Icon: InstagramIcon,
    name: 'Instagram',
  },
];
const CONTACTS = [
  {
    id: 1,
    text: '(15) 99650.6060',
    Icon: WhatsIcon,
  },
  {
    id: 2,
    text: 'financeiro@domusmateriaisconstrucao.com.br',
    Icon: MailIcon,
  },
];

export const Footer = () => (
  <footer>
    <div className="relative">
      <Image
        src={Backdrop4}
        alt=""
        className="absolute top-0 left-0 w-full object-cover h-full"
      />
      <div className="relative z-10 w-full h-full pb-16">
        <div className="max-w flex max-lg:flex-col max-[814px]:flex-col p-4 pt-8 h-full gap-12 xl:gap-24">
          <div className="lg:w-[70%]">
            <span className="font-bold text-xl block mb-6 max-lg:text-center">
              Fale com a gente
            </span>

            <div className="flex items-center w-full justify-between gap-x-8 max-lg:justify-center max-lg:gap-8 max-lg:flex-wrap">
              <ul className="flex flex-col gap-3 lg:w-1/2">
                {CONTACTS.map((contact) => (
                  <li key={contact.id} className="w-fit">
                    <span className="flex items-center gap-2 w-fit">
                      <contact.Icon className="fill-black max-h-4 h-full w-auto" />
                      <span className="max-md:break-all leading-5">{contact.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <ul className="lg:w-1/2">
                <li>
                  <span className="flex items-center gap-2">
                    <PinIcon className="fill-black h-8 w-auto" />
                    <span className="leading-5 lg:whitespace-nowrap">
                      Rua Benedito Antunes Ribeiro, 721
                      <br />
                      Araçoiaba da Serra - Jd. Maria da Glória
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2">
            <span className="font-bold text-xl block mb-6 max-lg:text-center">
              Siga DOMUS
            </span>

            <ul className="flex items-center gap-3 max-lg:justify-center">
              {SOCIALS.map((social) => (
                <li key={social.id}>
                  <Link target="_blank" href={social.link} aria-label={social.name}>
                    <social.Icon className="w-10 h-10" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 max-xl:opacity-40">
        <HomesIcon />
      </div>
    </div>
    <div className="flex w-full h-fit py-7 justify-center">
      <CoreLogo />
    </div>
  </footer>
);
