import React from "react";

const ReturnRefundExchange = () => {
  return (
    <section className="bg-[#F0F0F0] min-h-screen py-10 px-4 lg:px-0">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Return, Refund & Exchange Policy | রিটার্ন, রিফান্ড ও এক্সচেঞ্জ
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Learn about our policies for returning, exchanging, and getting refunds for products purchased from Izibay.
            <br />
            Izibay থেকে কেনা পণ্যের রিটার্ন, এক্সচেঞ্জ এবং রিফান্ড নীতির বিস্তারিত এখানে।
          </p>
        </div>

        {/* Section 1: Return Policy */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            ১. Return Policy | রিটার্ন নীতি
          </h2>
          <p className="text-gray-700 mb-2">
            You can return products within 7 days of delivery if the item is defective, damaged, or not as described.
          </p>
          <p className="text-gray-700 mb-2">
            ডেলিভারির ৭ দিনের মধ্যে পণ্য রিটার্ন করা যাবে যদি পণ্য ত্রুটিপূর্ণ, ক্ষতিগ্রস্ত বা বর্ণনার সাথে মিল না থাকে।
          </p>
        </section>

        {/* Section 2: Refund Policy */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            ২. Refund Policy | রিফান্ড নীতি
          </h2>
          <p className="text-gray-700 mb-2">
            Refunds are processed within 5-7 business days after we receive the returned product. Refunds will be credited to the original payment method.
          </p>
          <p className="text-gray-700 mb-2">
            রিটার্ন করা পণ্য পাওয়ার ৫-৭ কর্মদিবসের মধ্যে রিফান্ড প্রক্রিয়াকরণ করা হয়। রিফান্ড মূল পেমেন্ট পদ্ধতিতে প্রদান করা হবে।
          </p>
        </section>

        {/* Section 3: Exchange Policy */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            ৩. Exchange Policy | এক্সচেঞ্জ নীতি
          </h2>
          <p className="text-gray-700 mb-2">
            Products can be exchanged for another size, color, or similar item within 7 days of delivery, subject to availability.
          </p>
          <p className="text-gray-700 mb-2">
            ডেলিভারির ৭ দিনের মধ্যে পণ্য সাইজ, রঙ বা সমজাতীয় পণ্যের সাথে এক্সচেঞ্জ করা যেতে পারে, স্টক থাকা সাপেক্ষে।
          </p>
        </section>

        {/* Section 4: Conditions for Returns & Exchanges */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            ৪. Conditions | শর্তাবলী
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Product must be unused, with original tags and packaging intact. | পণ্য ব্যবহার করা যাবে না, মূল ট্যাগ ও প্যাকেজিং অক্ষত থাকতে হবে।</li>
            <li>Proof of purchase (invoice) is required. | প্রমাণ হিসেবে ক্রয়পত্র (ইনভয়েস) প্রয়োজন।</li>
            <li>Damaged or defective items must be reported immediately. | ক্ষতিগ্রস্ত বা ত্রুটিপূর্ণ পণ্য দ্রুত রিপোর্ট করতে হবে।</li>
          </ul>
        </section>

        {/* Section 5: Non-Returnable Items */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            ৫. Non-Returnable Items | রিটার্ন অযোগ্য পণ্য
          </h2>
          <p className="text-gray-700 mb-2">
            Some products like intimate wear, perishable items, or custom orders cannot be returned or exchanged.
          </p>
          <p className="text-gray-700 mb-2">
            কিছু পণ্য যেমন অন্তর্বাস, পেরিশেবল আইটেম বা কাস্টম অর্ডার রিটার্ন বা এক্সচেঞ্জযোগ্য নয়।
          </p>
        </section>

        {/* Section 6: Contact */}
        <section className="mb-0">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            ৬. Contact | যোগাযোগ
          </h2>
          <p className="text-gray-700 mb-2">
            For any return, refund, or exchange inquiries, contact our support team immediately.
          </p>
          <p className="text-gray-700 mb-2">
            রিটার্ন, রিফান্ড বা এক্সচেঞ্জ সংক্রান্ত কোনো প্রশ্নের জন্য, আমাদের সাপোর্ট টিমের সাথে সঙ্গে সঙ্গে যোগাযোগ করুন।
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Email: support@Izibay.com</li>
            <li>Phone: +880 123 456 789</li>
          </ul>
        </section>

      </div>
    </section>
  );
};

export default ReturnRefundExchange;