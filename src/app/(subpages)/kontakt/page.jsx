import Image from "next/image";
import { contact } from "@/data/contact";

export default function Kontakt() {
  const { address, phone, phoneLabel } = contact;

  return (
    <>
      <div className="container">
        <section>
          <h1>Skontaktuj się z nami</h1>
          <p>
            Masz pytania lub chcesz zarezerwować nocleg w naszej Chacie? Zadzwoń
            do nas!
          </p>
          <p>{address}</p>
          <a href={`tel:${phone}`}>
            <Image
              src="icons/icon-phone.svg"
              alt="telefon kontaktowy"
              width={20}
              height={20}
            />
            &nbsp;&nbsp;{phoneLabel}
          </a>
        </section>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.327783732301!2d19.04499037672001!3d49.42161676090563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47144973cc1f42dd%3A0xf3fe578e45d4d04e!2sChata%20na%20Przegibku!5e0!3m2!1spl!2spl!4v1708603505284!5m2!1spl!2spl&z=20"
            width="1920"
            height="1080"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="google map"
            className="googleMap"
          ></iframe>
        </section>
      </div>
    </>
  );
}
