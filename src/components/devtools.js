if (process.env.NODE_ENV === 'production') {
  console.log('[PROD_ENV] do not use Redux DevTools');
  module.exports = { DevTools: null };
} else {
  const React = require('react');
  const createDevTools = require('redux-devtools').createDevTools;
  const LogMonitor = require('redux-devtools-log-monitor');
  const DockMonitor = require('redux-devtools-dock-monitor');
  module.exports = { DevTools: createDevTools(
     <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
       <LogMonitor theme="solarized" />
     </DockMonitor>
  ) };
}
