import { HelperCategory } from '../models/helper.model';

export const HELPERS: HelperCategory[] = [
  {
    id: 'C#',
    title: 'C#',
    items: [
      { name: 'Tvorba diagramů – draw.io', url: 'https://www.draw.io' },
      { name: 'C# playground – sharplab.io', url: 'https://sharplab.io/' },
      { name: 'API parser – quicktype', url: 'https://app.quicktype.io/' },
      { name: 'API parser – json2csharp', url: 'https://json2csharp.com/' },
      {
        name: 'Procvičování příkladů v C# – Codewars',
        url: 'https://codewars.com/',
      },
      { name: 'Algoritmy – algoritmy.net', url: 'https://www.algoritmy.net/' },
    ],
  },

  {
    id: 'HTML',
    title: 'HTML',
    items: [
      {
        name: 'Favicon ikony – RealFaviconGenerator',
        url: 'https://realfavicongenerator.net',
      },
      {
        name: 'Kontrola stránek – PageSpeed Insights',
        url: 'https://pagespeed.web.dev',
      },
      {
        name: 'Kontrola stránek – W3C validator',
        url: 'https://validator.w3.org/',
      },
      {
        name: 'Kontrola stránek – ITNetwork validator',
        url: 'https://www.itnetwork.cz/validator',
      },
      {
        name: 'Dead link checker',
        url: 'https://www.deadlinkchecker.com/',
      },
      {
        name: 'Sitemap generator',
        url: 'https://www.xml-sitemaps.com/',
      },
    ],
  },

  {
    id: 'CSS',
    title: 'CSS',
    items: [
      {
        name: 'Výběr barev – Adobe Color',
        url: 'https://color.adobe.com',
      },
      {
        name: 'Výběr barev – 0to255',
        url: 'https://0to255.com',
      },
      {
        name: 'Výběr konkrétní barvy – ImageColorPicker',
        url: 'https://imagecolorpicker.com',
      },
      {
        name: 'Linear gradient maker – CSS Gradient',
        url: 'https://cssgradient.io/gradient-backgrounds',
      },
      {
        name: 'CSS tlačítka – Neumorphism.io',
        url: 'https://neumorphism.io/',
      },
      {
        name: 'CSS clip-path maker – Clippy',
        url: 'https://bennettfeely.com/clippy/',
      },
      {
        name: 'CSS shape divider – ShapeDivider',
        url: 'https://www.shapedivider.app/',
      },
      {
        name: 'Cubic-bezier editor',
        url: 'https://cubic-bezier.com/',
      },
      {
        name: 'Blob maker – fancy-border-radius',
        url: 'https://9elements.github.io/fancy-border-radius',
      },
      {
        name: 'CSS playground – CodePen',
        url: 'https://codepen.io/',
      },
      {
        name: 'CSS bitvy – CSSBattle',
        url: 'https://cssbattle.dev/',
      },
      {
        name: 'Free UI elementy – Uiverse',
        url: 'https://uiverse.io/',
      },
    ],
  },

  {
    id: 'Javascript',
    title: 'JavaScript',
    items: [
      {
        name: 'JavaScript playground – PlayCode',
        url: 'https://playcode.io/javascript',
      },
      {
        name: 'Node.js',
        url: 'https://nodejs.org/en',
      },
    ],
  },

  {
    id: 'Images',
    title: 'Obrázky a grafika',
    items: [
      {
        name: 'Tvorba loga online – logomaster.ai',
        url: 'https://logomaster.ai',
      },
      {
        name: 'Tvorba loga online – Looka',
        url: 'https://looka.com/',
      },
      {
        name: 'Průhledné pozadí – remove.bg',
        url: 'https://www.remove.bg/upload',
      },
      {
        name: 'Online grafický editor – Photopea',
        url: 'https://www.photopea.com',
      },
      {
        name: 'Online grafický editor – Figma',
        url: 'https://www.figma.com/',
      },
      {
        name: 'Online grafický editor – Canva',
        url: 'https://www.canva.com',
      },
      {
        name: 'Online grafický editor – iLoveIMG',
        url: 'https://www.iloveimg.com',
      },
      {
        name: 'Tvorba fotokoláže – PhotoCollage',
        url: 'https://www.photocollage.com',
      },
      {
        name: 'Optimalizace obrázků – TinyJPG',
        url: 'https://tinyjpg.com/',
      },
      {
        name: 'Optimalizace obrázků – ShortPixel',
        url: 'https://shortpixel.com/',
      },
      {
        name: 'Konverze obrázků – Convertio',
        url: 'https://convertio.co/',
      },
      {
        name: 'Efekty fotek – Tuxpi',
        url: 'https://www.tuxpi.com/',
      },
      {
        name: 'Upscale fotek – Depositphotos Upscaler',
        url: 'https://cz.depositphotos.com/upscaler.html',
      },
      {
        name: 'Upscale fotek – Aiseesoft Image Upscaler',
        url: 'https://cs.aiseesoft.com/image-upscaler/',
      },
    ],
  },

  {
    id: 'API',
    title: 'API',
    items: [
      {
        name: 'Generátor uživatelů – RandomUser',
        url: 'https://randomuser.me',
      },
      {
        name: 'Pokemon API – PokeAPI',
        url: 'https://pokeapi.co/',
      },
      {
        name: 'Geolokační API – IP2Location',
        url: 'https://www.ip2location.com',
      },
      {
        name: 'Počasí API – OpenWeatherMap',
        url: 'https://openweathermap.org/',
      },
      {
        name: 'Star Wars API – SWAPI',
        url: 'https://swapi.dev/',
      },
      {
        name: 'Testování API – Postman',
        url: 'https://www.postman.com/',
      },
    ],
  },

  {
    id: 'AI',
    title: 'AI',
    items: [
      {
        name: 'ChatGPT',
        url: 'https://chat.openai.com',
      },
      {
        name: 'Claude',
        url: 'https://claude.ai',
      },
      {
        name: 'AI generátor obrázků – DALL·E',
        url: 'https://labs.openai.com',
      },
      {
        name: 'AI generátor obrázků – Midjourney',
        url: 'https://www.midjourney.com',
      },
      {
        name: 'AI generátor obrázků – StableDiffusionWeb',
        url: 'https://stablediffusionweb.com/',
      },
      {
        name: 'AI generátor hudby – Suno',
        url: 'https://suno.com/',
      },
      {
        name: 'Google AI labs',
        url: 'https://labs.google/',
      },
    ],
  },

  {
    id: 'Ostani',
    title: 'Ostatní',
    items: [
      {
        name: 'Text to ASCII – patorjk.com',
        url: 'http://patorjk.com/software/taag',
      },
      {
        name: 'Lorem ipsum generator',
        url: 'http://www.lorem-ipsum.cz',
      },
      {
        name: 'Ikony – Iconfinder',
        url: 'https://www.iconfinder.com/',
      },
      {
        name: 'Ikony – IconsDB',
        url: 'https://www.iconsdb.com/',
      },
      {
        name: 'Emotikony – GetEmoji',
        url: 'https://getemoji.com/',
      },
      {
        name: 'Free multimedia – Pixabay',
        url: 'https://pixabay.com/',
      },
      {
        name: 'Free multimedia – IconScout',
        url: 'https://iconscout.com/',
      },
      {
        name: 'Free multimedia – Freepik',
        url: 'https://www.freepik.com/',
      },
      {
        name: 'Generátor fotek lidí – This Person Does Not Exist',
        url: 'https://this-person-does-not-exist.com/en',
      },
      {
        name: 'Moje IP – CheckIP DynDNS',
        url: 'http://checkip.dyndns.org/',
      },
      {
        name: 'Překladač – DeepL',
        url: 'https://www.deepl.com/',
      },
      {
        name: 'Správa hesel – KeePassXC',
        url: 'https://keepassxc.org/',
      },
      {
        name: 'Správa hesel – Bitwarden',
        url: 'https://bitwarden.com/',
      },
      {
        name: 'Vývojářské roadmapy – roadmap.sh',
        url: 'https://roadmap.sh/',
      },
      {
        name: 'Docker hub – docker images',
        url: 'https://hub.docker.com/',
      },
    ],
  },
];
