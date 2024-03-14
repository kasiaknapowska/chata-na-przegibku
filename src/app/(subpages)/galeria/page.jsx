import Gallery from "@/components/gallery/Gallery";

export default function Galeria() {
  
  return (
    <>
      <div className="container">
        <section>
          <h1>Poczuj klimat gór!</h1>
          <p>
            Obejrzyj zdjęcia z naszej Chaty i okolicznych szlaków!
          </p>
        </section>
        <section>
          <Gallery/>
        </section>
      </div>
    </>
  );
}
