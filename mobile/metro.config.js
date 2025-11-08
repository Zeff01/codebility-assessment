// Learn more https://docs.expo.io/guides/customizing-metro
const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

// Set EXPO_ROUTER_APP_ROOT if not already set
// Must be a relative path string for require.context
if (!process.env.EXPO_ROUTER_APP_ROOT) {
  process.env.EXPO_ROUTER_APP_ROOT = './app';
}

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Ensure Metro uses the correct project root (mobile workspace, not parent)
// This prevents Metro from resolving from the parent workspace
config.projectRoot = __dirname;
config.watchFolders = [__dirname];

// Ensure Metro resolves React from local node_modules first, not parent workspace
// This prevents multiple React instances which causes "Invalid hook call" errors
const originalResolveRequest = config.resolver.resolveRequest;

// Get the absolute path to local React to use as a singleton
const localReactPath = path.resolve(__dirname, 'node_modules', 'react');
const localReactDomPath = path.resolve(__dirname, 'node_modules', 'react-dom');

config.resolver = {
  ...config.resolver,
  // Only use local node_modules, exclude parent workspace node_modules completely
  nodeModulesPaths: [
    path.resolve(__dirname, 'node_modules'),
  ],
  // Add extraNodeModules to ensure React always resolves locally - this is critical for monorepo
  // This forces ALL React usage to go through the local React instance
  extraNodeModules: {
    'react': localReactPath,
    'react-dom': localReactDomPath,
    'react/jsx-runtime': path.resolve(localReactPath, 'jsx-runtime'),
    'react/jsx-dev-runtime': path.resolve(localReactPath, 'jsx-dev-runtime'),
    // Also ensure expo-router resolves from local
    'expo-router': path.resolve(__dirname, 'node_modules', 'expo-router'),
  },
  // Block parent workspace node_modules completely - critical for monorepo isolation
  // This prevents any module from parent workspace from being used
  // Block ALL files from parent workspace that aren't in mobile
  blockList: [
    // Block React from parent workspace (not in mobile) - even if nested in other packages
    /.*\/codebility\/node_modules\/react\/.*/,
    /.*\/codebility\/node_modules\/react-dom\/.*/,
    // Block expo-router from parent workspace
    /.*\/codebility\/node_modules\/expo-router\/.*/,
    // Block @react-navigation from parent workspace
    /.*\/codebility\/node_modules\/@react-navigation\/.*/,
    // Block React from ANY nested location in parent workspace
    /.*\/codebility\/node_modules\/.*\/node_modules\/react\/.*/,
    /.*\/codebility\/node_modules\/.*\/node_modules\/react-dom\/.*/,
  ],
  // Force all React-related modules to resolve from local node_modules
  resolveRequest: (context, moduleName, platform) => {
    // ALWAYS force React and React-DOM to resolve from local node_modules first
    // This is critical - even if expo-router has nested React, we must use the local one
    if (moduleName === 'react' || moduleName === 'react-dom' || moduleName === 'react/jsx-runtime' || moduleName === 'react/jsx-dev-runtime') {
      try {
        // Always resolve from local node_modules, regardless of where the request comes from
        const localPath = path.resolve(__dirname, 'node_modules', moduleName);
        const resolvedPath = require.resolve(localPath, { paths: [path.resolve(__dirname, 'node_modules')] });
        
        // Verify it's from local workspace, not parent
        if (resolvedPath.includes(path.join(__dirname, 'node_modules'))) {
          console.log(`[Metro] Forcing ${moduleName} to resolve from local: ${resolvedPath}`);
          return {
            filePath: resolvedPath,
            type: 'sourceFile',
          };
        }
      } catch (e) {
        console.warn(`[Metro] Failed to resolve ${moduleName} from local:`, e.message);
        // Fall through to default resolution
      }
    }
    
    // Force expo-router to resolve from local node_modules
    if (moduleName === 'expo-router') {
      try {
        const localPath = path.resolve(__dirname, 'node_modules', 'expo-router');
        const resolvedPath = require.resolve(localPath, { paths: [path.resolve(__dirname, 'node_modules')] });
        if (resolvedPath.includes(path.join(__dirname, 'node_modules'))) {
          return {
            filePath: resolvedPath,
            type: 'sourceFile',
          };
        }
      } catch (e) {
        // Fall through
      }
    }
    
    // For other modules, use default resolution but exclude parent node_modules
    if (originalResolveRequest) {
      const result = originalResolveRequest(context, moduleName, platform);
      
      // If result points to parent workspace (not mobile), reject it for React/expo-router
      if (result && result.filePath) {
        const isParentWorkspace = result.filePath.includes('/codebility/node_modules/') && 
                                   !result.filePath.includes('/codebility/mobile/');
        
        // CRITICAL: Block ANY React resolution from parent workspace FIRST, before other checks
        // This includes React from expo-router/node_modules/react, @react-navigation/node_modules/react, etc.
        if (isParentWorkspace && (moduleName === 'react' || moduleName === 'react-dom' || moduleName.startsWith('react/'))) {
          try {
            const localPath = path.resolve(__dirname, 'node_modules', moduleName);
            const localResolved = require.resolve(localPath, { paths: [path.resolve(__dirname, 'node_modules')] });
            console.log(`[Metro] CRITICAL: Blocked ${moduleName} from parent workspace (${result.filePath}), forcing local: ${localResolved}`);
            return {
              filePath: localResolved,
              type: 'sourceFile',
            };
          } catch (e) {
            console.error(`[Metro] CRITICAL: Failed to resolve local ${moduleName} after blocking parent:`, e.message);
          }
        }
        
        // Block ANY module from parent workspace that's React-related or expo-router
        if (isParentWorkspace) {
          
          // Block expo-router from parent workspace - must use local version
          if (moduleName === 'expo-router' || moduleName.startsWith('expo-router/')) {
            try {
              const localPath = path.resolve(__dirname, 'node_modules', moduleName);
              return {
                filePath: require.resolve(localPath, { paths: [path.resolve(__dirname, 'node_modules')] }),
                type: 'sourceFile',
              };
            } catch (e) {
              console.warn(`[Metro] Blocked expo-router from parent workspace, using local:`, e.message);
            }
          }
          
          // Block @react-navigation from parent workspace
          if (moduleName.startsWith('@react-navigation/')) {
            try {
              const localPath = path.resolve(__dirname, 'node_modules', moduleName);
              return {
                filePath: require.resolve(localPath, { paths: [path.resolve(__dirname, 'node_modules')] }),
                type: 'sourceFile',
              };
            } catch (e) {
              console.warn(`[Metro] Blocked ${moduleName} from parent workspace:`, e.message);
            }
          }
        }
      }
      return result;
    }
    return context.resolveRequest(context, moduleName, platform);
  },
};

module.exports = config;

