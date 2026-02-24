import React from "react";
import { useLoaderData, Link } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();

  const { name, chef, supplier, category, details, photo, price } = coffee;

  return (
    <div className="min-h-screen bg-[#f4f3f0]">
      {/* Hero Section */}
      <div className="bg-[#2c1810] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 font-serif">Coffee Details</h1>
        <p className="text-[#d2b48c] text-lg">
          Discover the flavor and story behind this special cup
        </p>
      </div>

      {/* Details Section */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden grid md:grid-cols-2 gap-10 p-8">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src={photo}
              alt={name}
              className="w-72 h-96 object-contain rounded-lg"
            />
          </div>

          {/* Info */}
          <div className="space-y-4 text-[#3c2a21]">
            <h2 className="text-3xl font-bold font-serif">{name}</h2>

            <p>
              <span className="font-semibold">Chef:</span> {chef}
            </p>

            <p>
              <span className="font-semibold">Supplier:</span> {supplier}
            </p>

            <p>
              <span className="font-semibold">Category:</span> {category}
            </p>

            <p>
              <span className="font-semibold">Price:</span> {price} Taka
            </p>

            <p className="pt-4 text-gray-600">{details}</p>

            <div className="pt-6">
              <Link to="/">
                <button className="bg-[#c49a6c] hover:bg-[#a67c52] text-white px-6 py-2 rounded-lg transition duration-300 shadow-md">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
