import FAQClient from "./FAQClient";

const faqData = [
  {
    question: "Do you have any showroom?",
    answer:
      "No, currently we do not have any showroom. But you can always visit our warehouse to experience our product physically.",
  },
  {
    question: "How long will it take to get my orders?",
    answer:
      "It depends on where you are. Delivery inside Dhaka usually takes 1-2 days, and for outside Dhaka it takes 2-4 days.",
  },
  {
    question: "Any question?",
    answer:
      "You can contact us through our contact page! We will be happy to assist you.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-[#F0F0F0] pt-16">
      <div className="max-w-7xl mx-auto lg:rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-[#ffffff]">
        
        {/* Left Side */}
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-4">FAQ</h3>
          <p className="mb-2 text-gray-700">
            Got questions? Our FAQ has answers—quick, clear, and always ready to help you out!
          </p>
          <p className="text-gray-600">
            Our customer support is available 7 Days: 9am-12am. Average response time: 10-15 Minutes
          </p>
        </div>

        {/* Right Side (Client Component) */}
        <FAQClient faqData={faqData} />
      </div>
    </div>
  );
}