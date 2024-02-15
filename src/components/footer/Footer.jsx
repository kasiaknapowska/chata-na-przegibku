import Image from "next/image";
import { footer } from "./footer.module.scss";
import { contact } from "@/data/contact";

const Footer = () => {
  const { address, phone, phoneLabel } = contact;

  return (
    <footer className={footer}>
      <div className="container">
        <div>
          <h4>Chata na Przegibku</h4>
          <p>{address}</p>
          <a href={`tel:${phone}`}>
            <Image
              src="/icon-phone-white.svg"
              alt="telefon kontaktowy"
              width={20}
              height={20}
            />
            &nbsp;&nbsp;{phoneLabel}
          </a>
        </div>

        <a
          href="https://www.facebook.com/p/Chata-na-Przegibku-100088197709484/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icon-fb.svg"
            alt="facebook"
            width={20}
            height={24}
            priority
          />
        </a>
      </div>
      <div className="container">
        <small>
          © {new Date().getFullYear()} &middot; Built by KKnapowska with
          {` `}
          <a
            href="https://nextjs.org/"
            target="blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
