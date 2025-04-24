import React from "react";

function Feedback() {
  return (
    <section className="w-full font-grotesk bg-white py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto w-full max-w-[1200px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-custom-blue mb-4 sm:mb-6 md:mb-8 text-left">
          Member Feedback
        </h2>
        <div className="relative w-full">
          <div className="border-2 border-custom-blue rounded-lg p-3 sm:p-4 md:p-6 bg-white shadow-sm">
            <p className="text-sm sm:text-base md:text-lg font-medium text-center">
              "I found my passion and purpose through this club!"
            </p>
            <div className="text-right mt-2 sm:mt-3 md:mt-4">
              <p className="text-sm sm:text-base font-medium">- Mark Smith</p>
              <p className="text-xs md:text-sm text-gray-600">
                Chief Marketing Officer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedback;