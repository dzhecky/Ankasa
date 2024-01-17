import React from "react";
import Image from "next/image";
import Arrow from "../../assets/aroowhite.png";
import Plane from "../../assets/v3.png";

export default function HeadersBlue() {
  return (
    <div className="p-16 bg-blue-400 rounded-b-[30px] flex justify-between items-center">
      <div className="rightSection flex items-center gap-5 w-[400px]">
        <div className="icons">
          <Image src={Plane} width={50} />
        </div>
        <div className="content">
          <div className="onGoing flex justify-between text-[12px]">
            <div className="text-white">
              <p>From</p>
            </div>
            <div className="text-white">
              <p>To</p>
            </div>
          </div>
          <div className="megaContent justify-between flex text-[19px] items-center text-white">
            <div className="country">
              <p>Medan (IDN)</p>
            </div>
            <div className="icon">
              <Image src={Arrow} />
            </div>
            <div className="destination">
              <p>Japan (JPN)</p>
            </div>
          </div>
          <div className="description flex text-[12px] text-white gap-5 mt-3">
            <div className="day">
                <p>Monday, 20 July 20</p>
            </div>
            <div className="day">
                <p>6 Passenger</p>
            </div>
            <div className="day">
                <p>Economy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="leftSection text-white">
        <p>Change Search</p>
      </div>
    </div>
  );
}
