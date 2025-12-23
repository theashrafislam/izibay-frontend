"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 hover:bg-gray-200 transition"
      >
        <span className="font-medium text-gray-800">{title}</span>
        <FiChevronDown
          className={`text-lg transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="px-4 py-4 text-sm text-gray-700 leading-relaxed bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

const ProductInfoAccordion = () => {
  return (
    <div className="space-y-4 max-w-7xl mx-auto">
      {/* Discount Box */}
      <div className="bg-[#EAF2ED] text-[#00A341] rounded-lg p-4">
        <p className="text-lg font-semibold flex items-center gap-2">
          🎉 10% Discount!
        </p>
        <p className="text-sm">
          Spend <span className="font-semibold">BDT 999</span> and enjoy a{" "}
          <span className="font-semibold">10% flat discount</span>.
        </p>
      </div>

      {/* Description */}
      <AccordionItem title="Description">
        <p className="mb-3">
          High Quality Women Basic Solid Color Cotton Full Length Leggings.
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Brand:</strong> Levin</li>
          <li><strong>Size Type:</strong> Regular Women’s</li>
          <li><strong>Special Style:</strong> Regular / Plus size premium cotton full length leggings</li>
          <li><strong>Pattern:</strong> Solid</li>
          <li><strong>Occasion:</strong> Casual, Business, Everyday, Workout</li>
          <li><strong>Available Size:</strong> S, M, L, XL, 2XL</li>
          <li><strong>Fabric:</strong> 95% Cotton, 5% Spandex</li>
        </ul>

        <p className="mt-3">
          <strong>SLIM & COMFORTABLE FIT:</strong> Breathable, soft, and flexible
          fabric designed for all-day comfort and full coverage.
        </p>

        <p className="mt-2">
          <strong>EASY CARE:</strong> Hand wash or machine wash cold. Do not
          tumble dry.
        </p>
      </AccordionItem>

      {/* Return & Exchange */}
      <AccordionItem title="Return & Exchange">
        <p className="mb-3">
          LEVIN accepts returns and exchanges on unused items within{" "}
          <strong>7 days of delivery</strong>.
        </p>

        <p className="mb-2">
          Customers are responsible for delivery fees unless the issue is from
          our side.
        </p>

        <p className="mb-2">
          Exchanges are processed within <strong>2–5 business days</strong>,
          subject to stock availability.
        </p>

        <p className="mb-2">
          Refunds will be issued within{" "}
          <strong>7 business days</strong> after item inspection.
        </p>

        <p className="text-red-600 font-medium">
          ⚠ Hygiene-sensitive items are not eligible for return or exchange once
          used.
        </p>

        <p className="mt-3 text-sm text-gray-500">
          For full terms & conditions, please refer to the link.
        </p>
      </AccordionItem>
    </div>
  );
};

export default ProductInfoAccordion;