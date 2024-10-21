import React from "react";
import { useState } from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = useState(0);

  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          {/* Bagian Teks */}
          <div className="text-white">
            <p>Paket Kami</p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Cari Destinasi Anda
            </p>
          </div>

          {/* Bagian Form */}
          <div className="space-y-4 bg-white rounded-md p-4 relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              {/* Input Destinasi */}
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Cari Destinasi Anda
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Labuan Bajo"
                  className="w-full bg-gray-100 my-2 range accent-primary 
                  focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>

              {/* Input Tanggal */}
              <div>
                <label htmlFor="date" className="opacity-70">
                  Tanggal
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full bg-gray-100 my-2 
                  focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>

              {/* Input Harga Maksimal */}
              <div className="flex flex-col justify-between">
                <label htmlFor="maxPrice" className="opacity-70">
                  <div className="flex justify-between items-center">
                    <p>Harga Maksimal</p>
                    <p className="font-bold text-xl">Rp {priceValue}</p>
                  </div>
                </label>
                <div className="bg-gray-100 rounded-full p-2 mb-2 flex items-center justify-center">
                  <input
                    type="range"
                    name="maxPrice"
                    id="maxPrice"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 
                    rounded-full my-2"
                    min="150000"
                    max="10000000"
                    value={priceValue}
                    step="10000"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
