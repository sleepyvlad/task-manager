const os = require('os');
const networkInterfaces = os.networkInterfaces();
const hostAddress = [];
Object.keys(networkInterfaces).forEach(ifname => {
  networkInterfaces[ifname].forEach(iface => {
    if ('IPv4' !== iface.family || iface.internal !== false) return;
    hostAddress.push(iface.address);
  });
});

function logHostAddress(port) {
  console.log('\x1b[33m%s\x1b[0m', `Server is running on http://${hostAddress[0]}:${port}`);
}

module.exports = logHostAddress;
