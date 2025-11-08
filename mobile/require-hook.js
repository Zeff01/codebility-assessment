// This file ensures Node.js always resolves React from local node_modules
// This is critical for server-side rendering in monorepo setups
const path = require('path');
const Module = require('module');

const originalRequire = Module.prototype.require;
const mobileNodeModules = path.resolve(__dirname, 'node_modules');

// Override require to force React to resolve from local node_modules
Module.prototype.require = function(id) {
  // Force React and React-DOM to resolve from local node_modules
  if (id === 'react' || id === 'react-dom' || id.startsWith('react/')) {
    try {
      const localPath = path.resolve(mobileNodeModules, id);
      return originalRequire.call(this, localPath);
    } catch (e) {
      // Fall through to default resolution
    }
  }
  
  // For other modules, use default resolution
  return originalRequire.call(this, id);
};

