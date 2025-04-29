import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcDiscover,
} from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const SubFooter: React.FC = () => {
  return (
    <div className="bg-violet-800 py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side - Accepted Payment Methods */}
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-sm text-gray-100 mr-3">
            Accepted Payment Methods
          </span>
          <FontAwesomeIcon
            icon={faCcVisa}
            className="text-2xl text-blue-600 mx-1"
          />
          <FontAwesomeIcon
            icon={faCcMastercard}
            className="text-2xl text-red-600 mx-1"
          />
          <FontAwesomeIcon
            icon={faCcDiscover}
            className="text-2xl text-orange-500 mx-1"
          />
        </div>

        {/* Right side - Payments Powered by */}
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faLock} className="text-sm text-gray-100" />
          <span className="text-sm text-gray-100 flex items-center">
            Payments Powered by
            <img
              src="/favicon.ico"
              alt="Moneris"
              className="w-5 h-auto inline-block ml-1"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
