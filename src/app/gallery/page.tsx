"use client"; // Add this line to make the component a Client Component

import React, { useState } from "react";

const CommunityGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const options = [
    { value: "all", label: "ALL" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (
    value: string,
    label: React.SetStateAction<string>
  ) => {
    setSelectedOption(label);
    setIsOpen(false);
    console.log("Selected value:", value);
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 font-mono mb-4 md:mb-0">
            Community Gallery
          </h1>
          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a href="#" className="hover:text-gray-600 font-mono">
              Home
            </a>
            <a href="#" className="hover:text-gray-600 font-mono">
              About
            </a>
            <a href="#" className="hover:text-gray-600 font-mono">
              Contact
            </a>
            <form className="relative mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Search in site"
                className="rounded-full border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500 font-mono w-full md:w-auto"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-2 mr-2 bg-blue-500 text-white rounded-full px-3 py-1 font-mono"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0 1 14 0z"
                  ></path>
                </svg>
              </button>
            </form>
          </nav>
        </div>
      </header>

      <main className="container min-w-full py-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="col-span-1 md:col-span-12 p-4 rounded-lg text-center font-mono bg-gray-200 py-10 px-4 md:px-20">
            <div
              className="bg-white p-4 rounded-lg text-center py-10"
              style={{ lineHeight: "30px" }}
            >
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 leading-10">
                Hello, Tech Enthusiasts! Welcome to our MLSA Gallery{" "}
                <br className="hidden md:inline" /> with innovative and unique
                style.
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-10 mt-4 py-10">
              <div className="relative">
                <div
                  className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 font-mono cursor-pointer"
                  onClick={toggleDropdown}
                >
                  {selectedOption}
                </div>
                {isOpen && (
                  <div className="absolute w-full md:w-72 top-full left-0 md:left-60 bg-white shadow-lg mt-2 rounded z-10 transition-transform duration-300 ease-in-out transform scale-95">
                    {options.map((option) => (
                      <div
                        key={option.value}
                        className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700 font-mono"
                        onClick={() =>
                          handleOptionClick(option.value, option.label)
                        }
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button className="bg-white text-black rounded px-2 py-0.5 hover:bg-blue-600 font-mono font-medium">
                EVENTS
              </button>
              <button className="bg-white text-black rounded px-2 py-0.5 hover:bg-blue-600 font-mono font-medium">
                TEAM MEMBERS
              </button>
              <button className="bg-white text-black rounded px-2 py-0.5 hover:bg-blue-600 font-mono font-medium">
                MORE
              </button>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-3xl text-center px-4 md:px-10 m-4 md:m-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4 md:gap-6 mt-4 py-2 px-2">
            {/* Row 1: Full width on mobile */}
            <div className="bg-red-500 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/tUNCZRrwjMeCF9sLqappQtubMmsdRYY0FOYTQhun8K4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/cG93ZXJmdWwtYnVz/aW5lc3Mtd29tZW4t/aW4tbWVldGluZy5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-2 md:col-span-2 lg:col-span-2"></div>

            {/* Row 2: Two images on mobile */}
            <div className="bg-cyan-300 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/qN4W2HsRueMrpZzPBxb4DZ2fYVipsVCfrZThXwqNM4A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjA5/NDMzNzY3Ni9waG90/by9kaXZlcnNlLXRl/YW0td29ya2luZy10/b2dldGhlci1pbi1t/b2Rlcm4tY28td29y/a2luZy1zcGFjZS53/ZWJwP2E9MSZiPTEm/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9RmJI/N2kxSTNvQ1hvUmZa/S0Z2R2ozak1YbnNs/akQ4bVBtRG12WTRJ/eFF1QT0')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-1"></div>
            <div className="bg-yellow-300 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/9KXqg4qhMmY94jI-6Nu4rL8ouyBw9yV-v5XLoDCwYPU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjA5/OTQwMzE4MC9waG90/by9sYXVnaGluZy15/b3Vnbi1idXNpbmVz/c3dvbWFuLXN0YW5k/aW5nLXdpdGgtaGVy/LWFybXMtY3Jvc3Nl/ZC1hZ2FpbnN0LWFu/LW9mZmljZS13YWxs/LndlYnA_YT0xJmI9/MSZzPTYxMng2MTIm/dz0wJms9MjAmYz1m/ZDl5YVZyZ1dlWklI/VGZsbGJVbXhUalBS/VkQyYjc5WXp0NEhR/bFFmTlNBPQ')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-3"></div>

            {/* Row 3: Full width on mobile */}
            <div className="bg-pink-300 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/KDr7u0NLpJof_7o2ksdzQuV3bMNB6tvVNeXo9TISDi0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvNzEz/OTAxODI4L3N0b2Nr/LXBob3RvLWRpdmVy/c2UtZ3JvdXAtYnVz/aW5lc3N3b21lbi1m/b2N1c2VkLWNlbGwt/cGhvbmUtdGFibGU')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-3"></div>

            {/* Row 4: Two images on mobile */}
            <div className="bg-yellow-300 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/hyz6UWFC5VHY_eyz34_yn5meKIZeIqzTc_djSk7EdDY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wdWxz/ZXByb2QuYXp1cmVl/ZGdlLm5ldC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNy9E/V19IZXJvLmpwZw')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-2"></div>
            <div className="bg-cyan-300 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/L0lNFkHNpRunkgf0NN8-6ZbKCwwPmOA5sx13DF2wYFw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wdWxz/ZXByb2QuYXp1cmVl/ZGdlLm5ldC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8xMi9N/aWNyb3NvZnRUZWFt/cy1pbWFnZS5qcGc')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-3"></div>

            {/* Row 5: Full width on mobile */}
            <div className="bg-pink-300 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/BEXmyJvO5nPg6mo-Pd-9AgsSVWPLXNAZ_CHV7Yk0IO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/Mjg0YjY3MThkYjZl/NmEyMjFiM2Y1NWEv/NjJlYTMzYzVjNjlm/NDQ1ODg1ZmY5ZTY4/X3doYXQtaXMtYS13/b3Jrc2hvcC5qcGc')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-2 md:col-span-1 lg:col-span-1"></div>

            {/* Row 6: Two images on mobile */}
            <div className="bg-red-500 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/pIRfPIWj7THatNHpkqkeZyEPNEZq3hsvyZTOhaFnCNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Vzc2lvbmxhYi5j/b20vd3AtY29udGVu/dC91cGxvYWRzL2Jy/YW5kcy1wZW9wbGUt/QXg4SUE4R0FqVmct/dW5zcGxhc2gtMTAy/NHg2OTMuanBn')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-3"></div>
            <div className="bg-pink-300 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/usjRoXkP5KBKzAeaIjb8QsXvjZZoHyfOcvro5x7kKiY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oZXJp/dGFnZWNlbnRlci5t/bi93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wNS9BZG9iZVN0/b2NrXzEzNjE0NTk3/OC5qcGc')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-2"></div>

            {/* Row 7: Full width on mobile */}
            <div className="bg-yellow-300 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/oQOHVJSKiFQcx7XmM8UIcTtPZSZkqwOGfJZzvhPGVRg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Vzc2lvbmxhYi5j/b20vd3AtY29udGVu/dC91cGxvYWRzL2ph/aW1lLWxvcGVzLTBS/REJPQWRuYldNLXVu/c3BsYXNoLTEwMjR4/NjgzLmpwZw')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-3"></div>

            {/* Row 8: Two images on mobile */}
            <div className="bg-cyan-300 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/7Gullimpz_QuRbc8DjC47yV3aZJhecOLcI5Nsyip0ys/rs:fit:860:0:0:0/g:ce/aHR0cDovL2VuLmJl/c2lrdGFzLmJlbC50/ci9tZWRpYS9nYWxs/ZXJ5L2lkZWEtd29y/a3Nob3AvaWRlYTEu/anBn')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-1 md:col-span-1 lg:col-span-1"></div>
            <div className="bg-red-500 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/La4ZP4g8XOQKdKDzqjK28q3zw2zGdkUDzVfc_2IdRlc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZWIzZWZiZDZhNmU4/NGIxMmVmMDc3ODYv/NjI0MWUzZjcwN2Iw/YTE2NmMyNzQ2NjY5/X3dvcmtzaG9wLWlj/ZWJyZWFrZXItMS5q/cGc')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-3"></div>

            {/* Additional images to fill the grid */}
            <div className="bg-red-500 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/tW1hlrf8vchEH7tvFtq8QWcW0XXHGKIJGbuPDXvNa9Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS81/ZWIzZWZiZDZhNmU4/NGIxMmVmMDc3ODYv/NjI0MWU0YjFkMWYy/OWY2NjAyY2FmMmY4/X29ubGluZS1tZWV0/aW5nLWljZWJyZWFr/ZXIuanBn')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-3"></div>
            <div className="bg-pink-300 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/_g2MCMTv_UBSS8vVLBZbSnTyECYgrq9Tn4m3kC4mGLE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQx/MTAyMTYwMi9waG90/by9oYXBweS1wZW9w/bGUtZGlzY3Vzc2lu/Zy1hLW5ldy1ib29r/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1RM1VsRTRSWlNI/YVItZEFLMUQ3eHAx/OFB3eUJ0T3E1UUU2/aUIxNC1rRFRRPQ')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-2"></div>
            <div className="bg-yellow-300 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/Vt2vLgrWe8O3ZOg39F1yITDbH23ErgL46ijiOWaUlwg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kaXZlcnNlLWdy/b3VwLXBlb3BsZS1t/ZWV0aW5nXzEzMTkw/MzYtNTM3MC5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-3"></div>
            <div className="bg-cyan-500 p-4 rounded text-center bg-[url('https://imgs.search.brave.com/joDkBS9N4p97JEepW_sjgx3Ue_IRYOcfepjIdt7LNZQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/OTU3MTEzOS9waG90/by9jb2xsZWFndWVz/LWRpc2N1c3Npbmct/YnVzaW5lc3MuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTUz/TTFJVVIybXQwM1Ft/S0F6ZFV5ODhSX2l3/cWducVFvRDVYZ1d5/UGtWVVE9')] bg-no-repeat bg-cover bg-center font-mono h-44 flex items-center justify-center col-span-2 md:col-span-1 lg:col-span-1"></div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 py-4 px-6 mt-8">
        <div className="container mx-auto text-center font-mono">
          &copy; 2024 Community Gallery
        </div>
      </footer>
    </div>
  );
};

export default CommunityGallery;
