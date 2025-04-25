import React from "react";
import { socialLinks } from "../data/data_social";

const Social = () => {
  return (
    <div className="flex items-center justify-center gap-5 bg-purple-700 py-3">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-200 transition-colors"
          >
            <Icon size={22} />
          </a>
        );
      })}
    </div>
  );
};

export default Social;
