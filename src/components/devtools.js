import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
   <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
     <LogMonitor theme="solarized" />
   </DockMonitor>
);

if (process.env.NODE_ENV === 'production') {
  module.exports = { DevTools: null };
} else {
  module.exports = { DevTools };
}
