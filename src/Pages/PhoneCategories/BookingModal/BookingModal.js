import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const BookingModal = ({ mobileName }) => {
    
    const { user } = useContext(AuthContext);


  const { name } = mobileName;
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center text-white">{name}</h3>
          <form className='grid grid-cols-1 gap-3 mt-10'>
            <input
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Your Email"
              defaultValue={user?.email} 
              disabled
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Your Number"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Your Address"
              className="input input-bordered w-full"
            />
            <input
              type="submit"
              className="btn btn-outline w-full"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
