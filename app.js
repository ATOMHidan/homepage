// Personal configuration data
const personalData = {
  "name": "ATOM",
  "title": "千早爱音",
  "avatar": "https://xland.eu.org/autoupload/fr/Apyd_VgMrDaK--N5d9Bp9LymmFG5mamPE3BRhOPwQG2yl5f0KlZfm6UsKj-HyTuv/20251020/RApT/431X421/1000040353.png",
  "websites": [
    {"name": "原神", "url": "https://ys.mihoyo.com/"},
    {"name": "星铁", "url": "https://sr.mihoyo.com/"},
    {"name": "赏心悦目", "url": "https://www.bilibili.com/video/BV13P4wzkEHU/"},
    {"name": "如听仙乐", "url": "https://www.bilibili.com/video/BV1Ex4y1z7FU/"}
  ],
  "bio": "为什么要演奏《春日影》！？",
  "social": [
    {"name": "QQ", "url": "https://longdogechallenge.com/", "icon": "qq"},
    {"name": "邮箱", "url": "mailto:262860664@qq.com", "icon": "email"},
    {"name": "Telegram", "url": "https://xland.eu.org/autoupload/fr/Apyd_VgMrDaK--N5d9Bp9LymmFG5mamPE3BRhOPwQG2yl5f0KlZfm6UsKj-HyTuv/20251020/kXXa/1920X1080/1000041512.png", "icon": "telegram"}
  ],
  "favicon": {
    "enabled": true,
    "baseIcon": "https://xland.eu.org/autoupload/fr/Apyd_VgMrDaK--N5d9Bp9LymmFG5mamPE3BRhOPwQG2yl5f0KlZfm6UsKj-HyTuv/20251020/y8cB/640X640/35a1951d3426d6fb6f23e62bdd19d625.jpg"
  }
};

// Comprehensive icon library with SVG icons
const iconLibrary = {
  // Technology platforms
  "github": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  "gitlab": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/></svg>`,
  "stackoverflow": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092L6.785 12.743zM24 22.25v-9.5h-2.5v7.5H5v-7.5H2.5v9.5H24zm-5-6.75H7.25v2.5H19v-2.5z"/></svg>`,
  "codepen": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.016 8.84c-.002-.013-.005-.025-.007-.037l-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.014-.072-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.014-.072-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.014-.072-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.014-.072-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.014-.072-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.014-.072-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.014-.072-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.014-.072-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034-.009-.034-.007-.034L1.329 8.84c-.014-.072-.025-.144-.031-.216-.005-.041-.005-.082-.005-.124V5.001c0-.041.001-.083.005-.124.006-.072.017-.144.031-.216.013-.068.03-.135.052-.201.021-.063.045-.124.072-.182.025-.054.053-.107.085-.158.031-.048.065-.094.102-.138.035-.041.073-.080.114-.117.038-.034.079-.066.122-.096.04-.028.082-.054.125-.078.041-.023.084-.044.128-.063.042-.018.085-.034.128-.049.043-.014.087-.027.131-.038.044-.011.088-.020.133-.027.043-.007.087-.012.131-.016.045-.003.090-.005.135-.005.039 0 .078.001.117.003.044.003.088.007.131.013.044.006.088.013.131.022.044.009.088.019.131.031.044.012.087.025.130.040.043.015.086.032.128.050.042.018.084.038.125.059.041.021.081.044.120.068.039.024.077.050.114.077.037.027.073.056.108.086.035.030.069.062.102.095.033.033.065.068.095.104.030.036.059.073.086.111.027.038.053.077.077.117.024.040.047.081.068.123.021.042.041.085.059.128.018.043.035.087.050.131.015.044.029.089.041.134.012.045.023.090.032.135.009.045.017.090.023.136.006.045.011.090.015.135.004.045.007.090.009.135.002.045.003.090.003.135v8.5c0 .045-.001.090-.003.135-.002.045-.005.090-.009.135-.004.045-.009.090-.015.135-.006.046-.014.091-.023.136-.009.045-.020.090-.032.135-.012.045-.026.090-.041.134-.015.044-.032.088-.050.131-.018.043-.038.086-.059.128-.021.042-.044.083-.068.123-.024.040-.050.079-.077.117-.027.038-.056.075-.086.111-.030.036-.062.071-.095.104-.033.033-.067.065-.102.095-.035.030-.071.059-.108.086-.037.027-.075.053-.114.077-.039.024-.079.047-.120.068-.041.021-.084.041-.125.059-.042.018-.086.035-.128.050-.043.015-.087.028-.130.040-.043.012-.087.022-.131.031-.043.009-.087.016-.131.022-.043.006-.087.010-.131.013-.039.002-.078.003-.117.003-.045 0-.090-.002-.135-.005-.044-.004-.088-.009-.131-.016-.045-.007-.090-.016-.133-.027-.044-.011-.088-.024-.131-.038-.043-.015-.085-.031-.128-.049-.044-.019-.087-.040-.128-.063-.043-.024-.085-.050-.125-.078-.043-.030-.084-.062-.122-.096-.041-.037-.079-.076-.114-.117-.037-.044-.071-.090-.102-.138-.032-.051-.060-.104-.085-.158-.027-.058-.051-.119-.072-.182-.022-.066-.039-.133-.052-.201z"/></svg>`,
  "devto": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.5-.02c.38 0 .66-.08.84-.23.18-.16.28-.39.28-.66V10.71c0-.27-.1-.5-.28-.66zm14.44-2.78V16.3c0 1.02-.83 1.84-1.84 1.84H3.98c-1.02 0-1.84-.82-1.84-1.84V7.27c0-1.02.82-1.84 1.84-1.84h16.04c1.01 0 1.84.82 1.84 1.84zm-4.86 7.46V9.59c0-.31-.25-.56-.56-.56s-.56.25-.56.56v5.14c0 .31.25.56.56.56s.56-.25.56-.56zm-2.8 0V9.59c0-.31-.25-.56-.56-.56s-.56.25-.56.56v5.14c0 .31.25.56.56.56s.56-.25.56-.56zm-4.02-1.22c0 .84-.53 1.51-1.22 1.51-.47 0-.86-.07-1.17-.15l.02-.64.39.02c.16 0 .25-.06.25-.2v-4.3c0-.14-.09-.2-.25-.2l-.39.02.02-.64c.31-.08.7-.15 1.17-.15.69 0 1.22.67 1.22 1.51v3.22z"/></svg>`,
  
  // Social media platforms
  "twitter": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>`,
  "facebook": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  "instagram": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  "linkedin": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  "youtube": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  "tiktok": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
  
  // Chinese platforms
  "weibo": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.31 8.17c-.14.01-.25.02-.34.04-2.52.36-4.53 2.15-4.53 4.34 0 2.63 2.62 4.75 5.84 4.75 3.97 0 7.18-2.54 7.18-5.67 0-1.95-1.4-3.62-3.38-4.19-.66-.19-1.38-.29-2.13-.29-.22 0-.43.01-.64.02zm5.39-2.42c-.27-.08-.56-.13-.85-.13-.33 0-.66.05-.97.15.37-.58.58-1.27.58-2.01 0-2.06-1.67-3.73-3.73-3.73S6 1.7 6 3.76c0 .74.21 1.43.58 2.01-.31-.1-.64-.15-.97-.15-.29 0-.58.05-.85.13-2.14.63-3.64 2.42-3.64 4.5 0 2.89 3.14 5.23 7.02 5.23 5.49 0 9.94-3.36 9.94-7.5 0-2.08-1.5-3.87-3.64-4.5z"/></svg>`,
  "wechat": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.162 4.203 2.97 5.498L2.098 17.5l2.69-1.355c.748.188 1.547.282 2.362.282.216 0 .428-.016.639-.044-.133-.466-.209-.957-.209-1.466 0-3.787 3.148-6.858 7.042-6.858.308 0 .608.025.905.071C14.691 4.458 11.999 2.188 8.691 2.188zm-2.388 2.918c.507 0 .919.411.919.918s-.412.918-.919.918-.919-.411-.919-.918.412-.918.919-.918zm4.775 0c.507 0 .918.411.918.918s-.411.918-.918.918-.918-.411-.918-.918.411-.918.918-.918zM15.322 8.688c-3.429 0-6.214 2.33-6.214 5.207 0 2.878 2.785 5.207 6.214 5.207.674 0 1.316-.098 1.918-.264l2.071 1.049-.589-1.85c1.543-1.037 2.564-2.627 2.564-4.455 0-2.878-2.785-5.207-6.214-5.207-.651 0-1.295.074-1.918.201zm-2.907 2.292c.507 0 .918.411.918.918s-.411.918-.918.918-.918-.411-.918-.918.411-.918.918-.918zm5.813 0c.507 0 .918.411.918.918s-.411.918-.918.918-.918-.411-.918-.918.411-.918.918-.918z"/></svg>`,
  "qq": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5c3.5 0 6.5 3.5 6.5 8.5 0 1.5-.5 3-1 4-.5 1.5-1 2.5-1 3.5 0 .5.5 1.5 1 2.5.5 1.5 1 2.5 0 3.5-1 1-3.5 0-6.5 0s-5.5 1-6.5 0c-1-1 -.5-2 0-3.5.5-1 1-2 1-2.5 0-1-.5-2-1-3.5-.5-1-1-2.5-1-4 0-5 3-8.5 6.5-8.5z"/></svg>`,
  "zhihu": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12.24c-.3.58-.77 1.16-1.25 1.46-.42.27-.95.38-1.43.33-.53-.05-1.03-.37-1.28-.86-.23-.44-.18-1 .13-1.38.41-.5 1.1-.69 1.75-.69.78 0 1.5.25 2.08.78zm-1.78 3.06c-1.37 0-2.4-.78-2.4-1.85 0-.78.45-1.48 1.17-1.84.95-.48 2.08-.3 2.8.46.5.52.7 1.27.5 1.95-.28.95-1.1 1.28-2.07 1.28zm6.71-8.5c-.23-.92-.97-1.64-1.87-1.88-.98-.26-2.05.1-2.68.91-.5.64-.67 1.48-.44 2.26.26.88.95 1.58 1.8 1.82.94.26 1.97-.08 2.63-.87.52-.62.7-1.47.48-2.28-.04-.04-.04-.04-.08.04zm-7.95 0c0-.52-.19-1.01-.54-1.39-.35-.38-.83-.59-1.34-.59-.51 0-.99.21-1.34.59-.35.38-.54.87-.54 1.39 0 .52.19 1.01.54 1.39.35.38.83.59 1.34.59.51 0 .99-.21 1.34-.59.35-.38.54-.87.54-1.39z"/></svg>`,
  "douban": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.951 2.5H3.049c-.553 0-1 .448-1 1V20.5c0 .552.447 1 1 1H20.95c.553 0 1-.448 1-1V3.5c0-.552-.447-1-1-1zm-2.2 16.6H5.25c-.14 0-.25-.11-.25-.25v-1.5c0-.14.11-.25.25-.25h13.5c.14 0 .25.11.25.25v1.5c0 .14-.11.25-.25.25zm0-3.85H5.25c-.14 0-.25-.11-.25-.25V6c0-.14.11-.25.25-.25h13.5c.14 0 .25.11.25.25v9c0 .14-.11.25-.25.25z"/></svg>`,
  "bilibili": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.762v7.36c-.036 1.514-.556 2.769-1.56 3.763s-2.262 1.52-3.773 1.574H5.333c-1.51-.054-2.769-.58-3.773-1.574S.036 18.858 0 17.344v-7.36c.036-1.514.556-2.769 1.56-3.763s2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .356-.124.658-.373.906zM6.748 15.045c0 .509.478.978 1.05.978.572 0 1.05-.47 1.05-.978s-.478-.978-1.05-.978c-.572 0-1.05.47-1.05.978zm7.2 0c0 .509.478.978 1.05.978.572 0 1.05-.47 1.05-.978s-.478-.978-1.05-.978c-.572 0-1.05.47-1.05.978zm-6.3-5.291c0 .356.124.658.373.907.249.248.551.372.907.372s.658-.124.907-.372c.248-.249.372-.551.372-.907 0-.356-.124-.658-.372-.907a1.234 1.234 0 0 0-.907-.372c-.356 0-.658.124-.907.372-.249.249-.373.551-.373.907zm7.2 0c0 .356.124.658.373.907.249.248.551.372.907.372s.658-.124.907-.372c.248-.249.372-.551.372-.907 0-.356-.124-.658-.372-.907a1.234 1.234 0 0 0-.907-.372c-.356 0-.658.124-.907.372-.249.249-.373.551-.373.907z"/></svg>`,
  
  // Communication
  "email": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  "telegram": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
  "whatsapp": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>`,
  "discord": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0001 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/></svg>`,
  
  // Business
  "behance": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 2-5.101 2-3.074 0-5.564-1.584-5.564-1.584v-.006c-.028-.001-.106-.003-.157-.003l-.006.003c-1.25 0-2.295-.665-2.295-1.69 0-1.025 1.045-1.69 2.295-1.69l.006.003c.051 0 .129-.002.157-.003v-.006s2.49-1.584 5.564-1.584c3.072 0 4.659.703 5.101 2zM6.113 16c-.586 0-1.036-.26-1.036-.643 0-.383.45-.643 1.036-.643.585 0 1.036.26 1.036.643 0 .383-.451.643-1.036.643zM18.5 12.5c-1.65 0-2.95.825-2.95 2.5s1.3 2.5 2.95 2.5c1.65 0 2.95-.825 2.95-2.5s-1.3-2.5-2.95-2.5z"/></svg>`,
  "dribbble": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg>`,
  
  // Other
  "rss": `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58 0 19.152 8.452 19.152 18.91h4.848c0-13.131-10.668-23.75-24-23.75v4.84z"/></svg>`,
  "website": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="m12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  "blog": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>`,
  "custom": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`
};

// DOM elements
const elements = {
  name: document.getElementById('name'),
  title: document.getElementById('title'),
  avatar: document.getElementById('avatar'),
  bio: document.getElementById('bio'),
  websitesContainer: document.getElementById('websites-container'),
  socialLinks: document.getElementById('social-links'),
  hitokotoText: document.getElementById('hitokoto-text'),
  refreshHitokoto: document.getElementById('refresh-hitokoto')
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  renderProfile();
  renderWebsites();
  renderSocialLinks();
  loadHitokoto();
  updateFavicon();
  
  // Add event listener for refresh button
  elements.refreshHitokoto.addEventListener('click', loadHitokoto);
});

// Render profile information
function renderProfile() {
  elements.name.textContent = personalData.name;
  elements.title.textContent = personalData.title;
  elements.avatar.src = personalData.avatar;
  elements.avatar.alt = `${personalData.name}的头像`;
  elements.bio.textContent = personalData.bio;
  
  // Update page title
  document.title = `${personalData.name} - ${personalData.title}`;
}

// Render website buttons
function renderWebsites() {
  const websitesHTML = personalData.websites.map(website => {
    return `
      <a href="${website.url}" target="_blank" class="website-link" rel="noopener noreferrer">
        <svg class="website-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
        ${website.name}
      </a>
    `;
  }).join('');
  
  elements.websitesContainer.innerHTML = websitesHTML;
}

// Render social links with flexible icon system
function renderSocialLinks() {
  if (!personalData.social || personalData.social.length === 0) {
    elements.socialLinks.innerHTML = '<p class="no-social">暂无社交媒体链接</p>';
    return;
  }

  const socialLinksHTML = personalData.social.map(social => {
    let iconSvg = '';
    
    // Check if custom SVG is provided
    if (social.iconSvg) {
      iconSvg = social.iconSvg;
    } else if (iconLibrary[social.icon]) {
      // Use built-in icon from library
      iconSvg = iconLibrary[social.icon];
    } else {
      // Fallback to default icon
      iconSvg = iconLibrary['custom'];
    }
    
    // Determine if link should open in new tab
    const isExternal = social.url.startsWith('http') || social.url.startsWith('//');
    const target = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
    
    return `
      <a href="${social.url}" ${target} class="social-link" 
         title="${social.name}" aria-label="${social.name}">
        <span class="social-icon">${iconSvg}</span>
        <span class="social-name">${social.name}</span>
      </a>
    `;
  }).join('');
  
  elements.socialLinks.innerHTML = socialLinksHTML;
}

// Update favicon dynamically
function updateFavicon() {
  if (!personalData.favicon || !personalData.favicon.enabled) {
    return;
  }
  
  const baseIcon = personalData.favicon.baseIcon;
  if (!baseIcon) return;
  
  // Update existing favicon links
  const faviconLinks = document.querySelectorAll('link[rel*="icon"]');
  faviconLinks.forEach(link => {
    if (link.getAttribute('sizes')) {
      const size = link.getAttribute('sizes').split('x')[0];
      link.href = baseIcon.replace('512', size);
    } else {
      link.href = baseIcon.replace('512', '32');
    }
  });
  
  // Update Apple Touch Icon
  const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
  if (appleTouchIcon) {
    appleTouchIcon.href = baseIcon.replace('512', '180');
  }
  
  // Update meta tags
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    ogImage.content = baseIcon;
  }
  
  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  if (twitterImage) {
    twitterImage.content = baseIcon;
  }
}

// Load Hitokoto quote
async function loadHitokoto() {
  try {
    // Disable button and show loading state
    elements.refreshHitokoto.disabled = true;
    elements.hitokotoText.classList.add('loading');
    elements.hitokotoText.textContent = '加载中...';
    
    const response = await fetch('https://v1.hitokoto.cn/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Format the quote with author if available
    let quoteText = `"${data.hitokoto}"`;
    if (data.from) {
      quoteText += ` — ${data.from}`;
    }
    
    elements.hitokotoText.textContent = quoteText;
    
  } catch (error) {
    console.error('Failed to load Hitokoto:', error);
    elements.hitokotoText.textContent = '"每一次的失败，都是成功的垫脚石。" — 佚名';
  } finally {
    // Re-enable button and remove loading state
    elements.refreshHitokoto.disabled = false;
    elements.hitokotoText.classList.remove('loading');
  }
}

// Error handling for avatar loading
elements.avatar.addEventListener('error', function() {
  this.src = 'https://via.placeholder.com/100/4a90e2/ffffff?text=' + encodeURIComponent(personalData.name.charAt(0));
});

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
  // Press 'R' to refresh Hitokoto
  if (e.key === 'r' || e.key === 'R') {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      loadHitokoto();
    }
  }
});

// Add visual feedback for interactive elements
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effects and animations
  const interactiveElements = document.querySelectorAll('.website-link, .social-link, .refresh-btn');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transform = this.classList.contains('refresh-btn') ? 'scale(1.05)' : 'translateY(-2px)';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
});

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
  // Debounce resize events
  clearTimeout(window.resizeTimeout);
  window.resizeTimeout = setTimeout(function() {
    // Any resize-specific logic can go here
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
  }, 250);
});

// Performance optimization: Lazy load background image
function optimizeBackgroundLoading() {
  const img = new Image();
  img.onload = function() {
    document.body.style.backgroundImage = `url('${this.src}')`;
  };
  img.src = 'https://source.unsplash.com/1920x1080/?nature,landscape';
}

// Initialize background loading
optimizeBackgroundLoading();

// Accessibility improvements
function improveAccessibility() {
  // Add aria-label to social links
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    const socialName = link.querySelector('.social-name').textContent;
    link.setAttribute('aria-label', `访问我的${socialName}`);
  });
  
  // Add skip link for keyboard navigation
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = '跳转到主要内容';
  skipLink.className = 'skip-link sr-only';
  skipLink.addEventListener('focus', function() {
    this.classList.remove('sr-only');
  });
  skipLink.addEventListener('blur', function() {
    this.classList.add('sr-only');
  });
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Add main landmark
  const mainElement = document.querySelector('.profile');
  if (mainElement) {
    mainElement.id = 'main-content';
    mainElement.setAttribute('role', 'main');
  }
}

// Initialize accessibility improvements
document.addEventListener('DOMContentLoaded', improveAccessibility);

// Configuration validation
function validateConfiguration() {
  const requiredFields = ['name', 'title', 'bio'];
  const missingFields = requiredFields.filter(field => !personalData[field]);
  
  if (missingFields.length > 0) {
    console.warn('Missing required configuration fields:', missingFields);
  }
  
  // Validate social media configuration
  if (personalData.social && Array.isArray(personalData.social)) {
    personalData.social.forEach((social, index) => {
      if (!social.name || !social.url) {
        console.warn(`Social media entry ${index} is missing required fields (name, url)`);
      }
      if (!social.icon && !social.iconSvg) {
        console.warn(`Social media entry ${index} is missing icon configuration`);
      }
    });
  }
}

// Initialize configuration validation
validateConfiguration();
