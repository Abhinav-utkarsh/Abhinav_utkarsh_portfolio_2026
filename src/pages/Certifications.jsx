import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import PageTransition from '../components/PageTransition';

/* ===================================================
   🔥 CUSTOM TITLE MAP FOR EXTERNAL CERTIFICATES
=================================================== */

const externalTitleMap = {
  "Guniss World record": "Guinness World Record – Innovation Award",
  "India awar forum": "India Award Forum – Excellence Recognition",
};

/* ===================================================
   LOAD EXTERNAL CERTIFICATES
=================================================== */

const externalImages = import.meta.glob(
  "../assets/certificate/external/*.{png,jpg,jpeg,PNG,JPG,JPEG}",
  { eager: true }
);

const externalAll = Object.entries(externalImages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, module], index) => {
    const fileName = path.split("/").pop().replace(/\.(png|jpg|jpeg)/i, "");

    return {
      id: `external-${index}`,
      title: externalTitleMap[fileName] || fileName,
      issuer: "External",
      image: module.default,
      category: "External",
    };
  });

// 🔥 Featured = Last 2 External
const featuredCerts = externalAll.slice(-2);
const externalCerts = externalAll.slice(0, -2);

/* ===================================================
   LOAD COGNIZANT CERTIFICATES
=================================================== */

const cognizantImages = import.meta.glob(
  "../assets/certificate/cognizant/*.{png,jpg,jpeg,PNG,JPG,JPEG}",
  { eager: true }
);

const cognizantCerts = Object.entries(cognizantImages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, module], index) => {
    const fileName = path.split("/").pop().replace(/\.(png|jpg|jpeg)/i, "");

    return {
      id: `cognizant-${index}`,
      title: fileName.replace(/-/g, " "),
      issuer: "Cognizant",
      image: module.default,
      category: "Cognizant",
    };
  });

/* ===================================================
   LOAD UDEMY CERTIFICATES
=================================================== */

const udemyImages = import.meta.glob(
  "../assets/certificate/udemy/*.{png,jpg,jpeg,PNG,JPG,JPEG}",
  { eager: true }
);

const udemyCerts = Object.entries(udemyImages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, module], index) => {
    const fileName = path.split("/").pop().replace(/\.(png|jpg|jpeg)/i, "");

    return {
      id: `udemy-${index}`,
      title: fileName.replace(/-/g, " "),
      issuer: "Udemy",
      image: module.default,
      category: "Udemy",
    };
  });

/* ===================================================
   CARD COMPONENT
=================================================== */

const CertificateCard = ({ cert, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    viewport={{ once: true }}
    className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-sky-400 transition-all duration-300 cursor-pointer"
    onClick={() => onClick(cert.image)}
  >
    <div className="h-56 overflow-hidden bg-slate-700/50">
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>

    <div className="p-6">
      <span className="text-xs font-bold px-2 py-1 rounded bg-slate-900 text-sky-400 border border-slate-700">
        {cert.category}
      </span>

      <h3 className="text-lg font-bold text-white mt-3">
        {cert.title}
      </h3>

      <p className="text-sm text-sky-400 mt-2">
        {cert.issuer}
      </p>
    </div>
  </motion.div>
);

/* ===================================================
   SECTION WRAPPER
=================================================== */

const Section = ({ title, children }) => (
  <>
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 mt-16">
      {title}
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {children}
    </div>
  </>
);

/* ===================================================
   MAIN PAGE
=================================================== */

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <PageTransition>
    <div className="min-h-screen bg-transparent pt-24 pb-20 px-6 md:px-12">
      <div className="container mx-auto">

        {/* FEATURED */}
        <Section title={<>Featured <span className="text-sky-400">Certifications</span></>}>
          {featuredCerts.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={index}
              onClick={setSelectedImage}
            />
          ))}
        </Section>

        {/* EXTERNAL */}
        <Section title={<>External <span className="text-sky-400">Certifications</span></>}>
          {externalCerts.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={index}
              onClick={setSelectedImage}
            />
          ))}
        </Section>

        {/* COGNIZANT */}
        <Section title={<>Cognizant <span className="text-sky-400">Certifications</span></>}>
          {cognizantCerts.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={index}
              onClick={setSelectedImage}
            />
          ))}
        </Section>

        {/* UDEMY */}
        <Section title={<>Udemy <span className="text-sky-400">Certifications</span></>}>
          {udemyCerts.map((cert, index) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              index={index}
              onClick={setSelectedImage}
            />
          ))}
        </Section>

      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Certificate"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </PageTransition>
  );
};

export default Certifications;