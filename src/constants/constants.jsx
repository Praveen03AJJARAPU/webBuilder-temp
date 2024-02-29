
// stylings
export const flex = "flex";
export const flexItems = "flex items-center gap-2";
export const flexBet = "flex justify-between items-center"; 
export const flexCol = "flex flex-col items-center"

export const headerItems = [
  "Tools", "AWS Builder", "Start Build", "Build Supplies", "Tooling", "BlueHosting"
]

export const off = ["20% off", "Limited time"];
export const headerPages = [
  "Home", "Hosting for all", "Hosting", "Hosting6", "Hosting5"
]
export const ComputerImg =
  "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ax2xncFBKe1xE2EsxdvElceh8oIqKj5N0jH4NJTiBcahukOzPxx4h1z6yHWL5iAGwcZziaBWfUhJnOIkYfeTkuKTAQ3cZ0jcc19S7zOzX3YtV8qd2foEnwflcvKEK8-iqw~VegstF5Nw8QROw9i36ihQaXHBsSdmfGb7V~XdDUKn2fabEOEcm2tN9ETF0zbCn6Tq~PYk9pxyghi5P3ugATGWGP8ljAH8tlJzjgbGXnUBNNTS4sfQDZNsmBvFmdtbDb28LeFrh~MRRFxi7hGf1M9mBH8gyb7qPYFk0pRsrwIdNrDPTsn0IaF8FPwAR8zL3wCBUlfMgzxP1E-gqRbjxQ__";



export const offerItems = [
  {
    id: 1,
    heading: "WixPro 72-Inch Responsive Website Builder- ",
    para: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlightPara: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 9.8,
    show: true,
    stars: 5,
    noStars: 0,
    halfStars: 0,
    highlights: {},
    review: "Exceptional",
    
    bestChoice: true,
    bestValue: false,
    imgDesc: 'Builder 1',
  },
  {
    id: 2,
    heading: "SiteCraft 68-Inch Ultimate Web Design Studio- ",
    para: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    highlightPara: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    highlights: {},
    rating: 9.5,
    stars: 4,
    noStars: 0,
    halfStars: 1,
    show: true,
    review: "Excellent",
    
    bestChoice: false,
    bestValue: true,
    imgDesc: 'Builder',
  },
  {
    id: 3,
    heading: "WixPro 72-Inch Responsive Website Builder- ",
    para: " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    highlightPara: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    highlights: {},
    rating: 9.3,
    stars: 5,
    noStars: 0,
    halfStars: 0,
    show: false,
    review: "Exceptional",
    
    bestChoice: false,
    bestValue: false,
    imgDesc: 'Builder 1',
  },
  {
    id: 4,
    heading: "CDK Responsive Builder: ",
    para: "An extensive library of widgets and apps, and detailed step-by-step guides",
    highlightPara: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    highlights: {
      highlight: [
        {rating: 9.9, para: "Building Responsive"},
        {rating: 8.9, para: "Cool"},
        {rating: 8.9, para: "Docs"},
      ],
      reviews: [
        "Documentation", "Easy Use", "Out of Box"
      ]
    },
    rating: 9.8,
    stars: 4,
    noStars: 1,
    halfStars: 0,
    show: false,
    review: "Exceptional",
    
    bestChoice: true,
    bestValue: true,
    imgDesc: 'CDK',
  },
]




export const GreaterSymbol = () => (
  <svg
    width="10"
    height="9"
    viewBox="0 0 10 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 7.27749L6.18084 4.12322L0 0.968957L1.90283 0L10 4.12322L1.90283 8.24645L0 7.27749Z"
      fill="#5C6874"
    />
  </svg>
);

export const SearchBar =  () => (<svg
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M1.25 10.5C1.25 5.39139 5.39139 1.25 10.5 1.25C15.6086 1.25 19.75 5.39139 19.75 10.5C19.75 15.6086 15.6086 19.75 10.5 19.75C5.39139 19.75 1.25 15.6086 1.25 10.5ZM10.5 2.75C6.21981 2.75 2.75 6.21981 2.75 10.5C2.75 14.7802 6.21981 18.25 10.5 18.25C14.7802 18.25 18.25 14.7802 18.25 10.5C18.25 6.21981 14.7802 2.75 10.5 2.75Z"
  fill="#626E79"
/>
<path
  fill-rule="evenodd"
  clip-rule="evenodd"
  d="M16.081 16.0805C16.3739 15.7876 16.8488 15.7876 17.1417 16.0805L21.3843 20.3232C21.6772 20.6161 21.6772 21.0909 21.3843 21.3838C21.0914 21.6767 20.6165 21.6767 20.3236 21.3838L16.081 17.1412C15.7881 16.8483 15.7881 16.3734 16.081 16.0805Z"
  fill="#626E79"
/>
</svg>);

export const fooItems = {
  arr1 : ["Web Builder", "Hosting", "Data center", "Robotic Automation"],
  arr2 : ["Contact", "Privacy Policy", "Terms of service", "Categories", "About"]
}

export const RoundedVerified = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.66534 3.99892C5.28581 2.46375 7.52625 1.51318 9.99984 1.51318C12.4734 1.51318 14.7138 2.46375 16.3343 3.99892C17.9547 5.53411 18.9582 7.65663 18.9582 10C18.9582 12.3434 17.9547 14.4659 16.3343 16.0011C14.7138 17.5362 12.4734 18.4869 9.99984 18.4869C7.52625 18.4869 5.28581 17.5362 3.66534 16.0011C2.04488 14.4659 1.0415 12.3434 1.0415 10C1.0415 7.65663 2.04488 5.53411 3.66534 3.99892ZM9.99984 2.69739C7.87109 2.69739 5.94486 3.51412 4.54921 4.83629C3.15359 6.15848 2.2915 7.98332 2.2915 10C2.2915 12.0168 3.1536 13.8416 4.54923 15.1637C5.94486 16.4859 7.87109 17.3027 9.99984 17.3027C12.1286 17.3027 14.0548 16.4859 15.4504 15.1637C16.8461 13.8416 17.7082 12.0168 17.7082 10C17.7082 7.98332 16.8461 6.15847 15.4504 4.83629C14.0548 3.51412 12.1286 2.69739 9.99984 2.69739Z"
      fill="#626E79"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.6084 7.21285C14.8525 7.44408 14.8525 7.81899 14.6084 8.05022L9.60845 12.787C9.36437 13.0183 8.96864 13.0183 8.72456 12.787L6.22456 10.4186C5.98048 10.1874 5.98048 9.81251 6.22456 9.58127C6.46864 9.35004 6.86437 9.35004 7.10845 9.58127L9.16651 11.531L13.7246 7.21285C13.9686 6.98162 14.3644 6.98162 14.6084 7.21285Z"
      fill="#626E79"
    />
  </svg>
);

export const Verified = () => (
  <svg
    width="11"
    height="8"
    viewBox="0 0 11 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.5303 0.469672C10.8233 0.762568 10.8233 1.23743 10.5303 1.53033L4.53033 7.53028C4.23743 7.8232 3.76256 7.8232 3.46967 7.53028L0.469672 4.53028C0.176776 4.23748 0.176776 3.76257 0.469672 3.46967C0.762556 3.17678 1.23743 3.17678 1.53033 3.46967L4 5.93932L9.46966 0.469672C9.76258 0.176776 10.2374 0.176776 10.5303 0.469672Z"
      fill="#0855A1"
    />
  </svg>
);

export const Info = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.91878 3.66546C5.47444 2.04501 7.62526 1.04163 9.9999 1.04163C12.3745 1.04163 14.5253 2.04501 16.081 3.66546C17.6366 5.28593 18.5999 7.52638 18.5999 9.99996C18.5999 12.4735 17.6366 14.714 16.081 16.3345C14.5253 17.9549 12.3745 18.9583 9.9999 18.9583C7.62526 18.9583 5.47444 17.9549 3.91878 16.3345C2.36315 14.714 1.3999 12.4735 1.3999 9.99996C1.3999 7.52638 2.36315 5.28593 3.91878 3.66546ZM9.9999 2.29163C7.9563 2.29163 6.10713 3.15373 4.76731 4.54934C3.42751 5.94499 2.5999 7.87121 2.5999 9.99996C2.5999 12.1287 3.42752 14.055 4.76731 15.4505C6.10713 16.8462 7.9563 17.7083 9.9999 17.7083C12.0435 17.7083 13.8927 16.8462 15.2325 15.4505C16.5723 14.055 17.3999 12.1287 17.3999 9.99996C17.3999 7.87121 16.5723 5.94498 15.2325 4.54934C13.8927 3.15373 12.0435 2.29163 9.9999 2.29163Z"
      fill="#626E79"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 4.58337C10.5523 4.58337 11 5.04975 11 5.62504C11 6.20033 10.5523 6.66671 10 6.66671C9.44776 6.66671 9 6.20033 9 5.62504C9 5.04975 9.44776 4.58337 10 4.58337Z"
      fill="#626E79"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.7998 8.33325C8.7998 7.98807 9.06844 7.70825 9.3998 7.70825H10.1998C10.5312 7.70825 10.7998 7.98807 10.7998 8.33325V14.1666C10.7998 14.5118 10.5312 14.7916 10.1998 14.7916C9.86844 14.7916 9.5998 14.5118 9.5998 14.1666V8.95827H9.3998C9.06844 8.95827 8.7998 8.67844 8.7998 8.33325Z"
      fill="#626E79"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.2002 14.1666C8.2002 13.8215 8.46884 13.5416 8.8002 13.5416H11.6002C11.9316 13.5416 12.2002 13.8215 12.2002 14.1666C12.2002 14.5118 11.9316 14.7916 11.6002 14.7916H8.8002C8.46884 14.7916 8.2002 14.5118 8.2002 14.1666Z"
      fill="#626E79"
    />
  </svg>
);

export const btnTags = "hover:scale-110 hover:text-white duration-150 ease cursor-pointer active:scale-95"

export const navItems = ["Categories", "Website Builders", "Today's deal"]