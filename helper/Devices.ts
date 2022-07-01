const Breakpoints = {
  mobileL: '668px',
  tablet: '801px',
  laptop: '1024px',
  laptopL: '1400px',
  desktop: '2560px',
};
const Devices = {
  mobileL: `(min-width: ${Breakpoints.mobileL})`,
  tablet: `(min-width: ${Breakpoints.tablet})`,
  laptop: `(min-width: ${Breakpoints.laptop})`,
  laptopL: `(min-width: ${Breakpoints.laptopL})`,
  desktop: `(min-width: ${Breakpoints.desktop})`,
};

export default Devices;
