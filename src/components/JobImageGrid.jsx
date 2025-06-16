import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
];

export default function JobImageGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="bg-gray-900 p-4 rounded-lg mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 max-w-full">
        {images.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt={`Job related ${idx + 1}`}
            className="rounded-lg cursor-pointer object-cover w-full h-48"
            layoutId={`image-${idx}`}
            onClick={() => setSelectedImage(idx)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={images[selectedImage]}
              alt="Expanded job related"
              className="max-w-full max-h-full rounded-lg shadow-lg"
              layoutId={`image-${selectedImage}`}
              onClick={(e) => e.stopPropagation()} // prevent closing on image click
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
