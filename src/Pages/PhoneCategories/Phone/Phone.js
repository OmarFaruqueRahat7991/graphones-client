import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import PhoneCategory from "../PhoneCategory/PhoneCategory";

const Phone = ({ phones }) => {
    const [mobileName, setMobileName] = useState(null);
  const { data } = phones;
  console.log(data);
  return (
    <section className="my-6">
      <p className="text-4xl text-center text-white font-bold pb-8">
        Available Phones
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 text-white ml-9">
        {data.map((category) => (
          <PhoneCategory 
          key={category._id} 
          category={category}
          setMobileName={setMobileName}
          ></PhoneCategory>
        ))}
      </div>
      {
        mobileName &&
        <BookingModal
        mobileName={mobileName}
      ></BookingModal>
      }
            
    </section>
  );
};

export default Phone;


