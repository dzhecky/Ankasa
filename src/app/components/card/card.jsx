import logo from "../../assets/search.png";
import test from "../../assets/change.png";
import Image from "next/image";
import logo1 from "../../assets/item1.png";
import logo2 from "../../assets/item2.png";

export default function CardOrder() {
  return (
    <main className="bg-white shadow-lg">
      <div className="container w-[330px] rounded p-5 shadow-lg">
        <p className="text-[14px]">Hey,</p>
        <p className="text-[20px] font-bold">Where you want to go?</p>
        <p className="text-[15px] mt-4 text-blue-400">Recently Searched</p>
        <div className="country flex justify-between items-center p-3">
          <div className="one">
            <p className="text-[12px]">from</p>
            <p className="text-[20px]">Medan</p>
            <p className="text-[13px]">Indonesia</p>
          </div>
          <div className="two">
            <Image src={test} width={30} />
          </div>
          <div className="three">
            <p className="text-[12px]">to</p>
            <p className="text-[20px]">tokyo</p>
            <p className="text-[13px]">Japan</p>
          </div>
        </div>
        <div className="destinationBottom flex justify-around mt-3">
          <div className="button1 flex items-center w-[125px] bg-blue-400 rounded p-2">
            <div className="icon">
              <Image src={logo1} width={20} />
            </div>
            <div className="title text-white ms-3">One Way</div>
          </div>
          <div className="button2 flex items-center w-[125px] bg-slate-200 rounded p-2">
            <div className="icon2">
              <Image src={logo2} width={20} />
            </div>
            <div className="title2 ms-1">Round Trip</div>
          </div>
        </div>
        <div className="departure mt-5">
          <p className="text-[14px]">Departures</p>
          <div className="dropdown mt-2 p-3 border-2">
            <p className="font-bold">Monday, 20 july 2020</p>
          </div>
        </div>
        <div className="person mt-3">
          <p className="text-[14px]">How many person?</p>
          <div className="people flex justify-around mt-2">
            <div className="dropdown1 w-[125px] border-2 p-2 ps-3">
              <p className="text-[14px] font-bold">2 childs</p>
            </div>
            <div className="dropdown2 w-[125px] border-2 p-2 ps-3">
              <p className="text-[14px] font-bold">4 adults</p>
            </div>
          </div>
        </div>
        <div className="grade mt-3">
        <p className="text-[14px]">Which class do you want?</p>
          <div className="container flex justify-between mt-2">
            <div className="item">
              <div class="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  class="ms-2 text-sm font-bold text-[14px] text-gray-900 dark:text-gray-300"
                >
                  Economy
                </label>
              </div>
            </div>
            <div className="item">
              <div class="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  class="ms-2 text-sm font-bold text-[14px] text-gray-900 dark:text-gray-300"
                >
                  Bussines
                </label>
              </div>
            </div>
            <div className="item">
              <div class="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  class="ms-2 text-sm font-bold text-[14px] text-gray-900 dark:text-gray-300"
                >
                  First Class
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="searchFlightButton bg-blue-400 rounded p-4 mt-3">
            <button className="text-white font-bold">SEARCH FLIGHT</button>
        </div>
      </div>
    </main>
  );
}
