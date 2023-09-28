const stickerOnlyImg = "/static/group/stickeronly.jpg";
const communityImg = "/static/group/news.jpg";
const techImg = "/static/group/tech.jpg";
const tech2Img = "/static/group/tech2.jpg";
const progImg = "/static/group/prog.jpg";
const moviesImg = "/static/group/movies.jpg";
const statusImg = "/static/group/status.jpg";
const memeImg = "/static/group/meme.jpg";
const sticker1Img = "/static/group/sticker1.jpg";
// const sticker2Img = "/static/group/sticker2.jpg";
// const sticker3Img = "/static/group/sticker3.jpg";
const animeImg = "/static/group/anime2.jpg";
const botImg = "/static/group/bot2.jpg";
// const haveliImg = "/static/group/haveli.jpg";
const gamingImg = "/static/group/gaming.jpg";
const studiesImg = "/static/group/study.jpg";
const sportsImg = "/static/group/sports.jpg";
const cryptoImg = "/static/group/crypto.jpg";
const foodImg = "/static/group/food.jpg";
// const autoImg = "/static/group/auto.jpg";
// const dealsImg = "/static/group/deals.jpg";
const communityDiscordImg = "/static/group/discord.jpg";
const communityFbImg = "/static/group/fb.jpg";
const communityTgImg = "/static/group/tg-pvx.jpg";

// TODO: check all interface locations
export interface GroupData {
  name: string;
  id: string;
  desc: string;
  alt: string;
  img: string;
  link: string;
  isCopied: boolean;
}

export function telegramGroupsState() {
  const telegramGroups: GroupData[] = [
    {
      name: "Food & Tricks Mania",
      id: "1",
      desc: "Daily Food Offers",
      alt: "Shiv-community-telegram",
      img: "/static/group/foodTele.jpg",
      link: "https://t.me/foodmaniaa",
      isCopied: false,
    },
    {
      name: "Amazing Deals & Offers",
      id: "2",
      desc: "Daily Shopping offers",
      alt: "Shiva-tech-news-telegram",
      img: "/static/group/dealsTele.jpg",
      link: "https://t.me/amdeals",
      isCopied: false,
    },
    {
      name: "Skill Unlock",
      id: "3",
      desc: "Daily Courses Links",
      alt: "shiva-movies-series-telegram",
      img: "/static/group/skills.jpg",
      link: "https://t.me/SkillsUnlock",
      isCopied: false,
    },{
      name: "Jobs Genie",
      id: "4",
      desc: "Daily Jobs openings",
      alt: "shiva-movies-series-telegram",
      img: "/static/group/jobsTele.jpg",
      link: "https://t.me/Jobsgenie",
      isCopied: false,
    },
  ];
  return telegramGroups;
}

export function facebookGroupsState() {
  const facebookGroups: GroupData[] = [
    {
      name: "COMMUNITY",
      id: "1",
      desc: "Posting group",
      alt: "pvx-community-facebook",
      img: communityFbImg,
      link: "https://facebook.com/groups/pvxgaming/",
      isCopied: false,
    },
  ];
  return facebookGroups;
}

export function discordGroupsState() {
  const discordGroups: GroupData[] = [
    {
      name: "COMMUNITY",
      id: "1",
      desc: "Channel",
      alt: "pvx-community-discord",
      img: communityDiscordImg,
      link: "https://discord.gg/zMktzNzx9U",
      isCopied: false,
    },
  ];
  return discordGroups;
}

export function whatsappGroupsState() {
  const whatsappGroups: GroupData[] = [
    {
      name: "Tech News",
      desc: "News Group",
      alt: "Shiva-community",
      img: communityImg,
      link: "https://chat.whatsapp.com/HyrKG3HkEYt9kS1IQKytu7",
      id: "919557666582-1467533860@g.us",
      isCopied: false,
    },
    {
      name: "Geek Helper",
      desc: "Geeks Group",
      alt: "Shiva-community",
      img: "/static/group/geek.jpg",
      link: "https://chat.whatsapp.com/E0mAhC3oPKwK317BGN6tds",
      id: "919557666582-1551290369@g.us",
      isCopied: false,
    },
    {
      name: "Amazing Deals",
      desc: "Deals Group",
      alt: "Shiva-community",
      img: "/static/group/deals.jpg",
      link: "https://chat.whatsapp.com/KV5iV0ENhkd4GDM6MjygFJ",
      id: "919557666582-1548337792@g.us",
      isCopied: false,
    },{
      name: "Tech News-Discussion",
      desc: "News Discussion Group",
      alt: "Shiva-community",
      img: "/static/group/tD.jpg",
      link: "https://chat.whatsapp.com/CkNRIm00zobBwP253nugMQ",
      id: "9195576as82-1548337792@g.us",
      isCopied: false,
    },
    {
      name: "Carrer Guidance",
      desc: "Jobs Group",
      alt: "Shiva-community",
      img: "/static/group/jobs.jpg",
      link: "https://chat.whatsapp.com/IcwaLHVglWIKQRmvEQZu6E",
      id: "919557666582-1584193120@g.us",
      isCopied: false,
    },
    {
      name: "Digital Minds",
      desc: "Digital Marketing",
      alt: "Shiva-community",
      img: "/static/group/digital.enc",
      link: "https://chat.whatsapp.com/J8QsnFJzC9uHkzhR25GUU0",
      id: "919557666582-1506690003@g.us",
      isCopied: false,
    },
    {
      name: "IT/Pharma Group",
      desc: "IT/Pharma discussion",
      alt: "Shiva-community",
      img: "/static/group/pharma.jpg",
      link: "https://chat.whatsapp.com/JrgwMYsw1pi4aW3E5LJOg1",
      id: "919557666582-1559476348@g.us",
      isCopied: false,
    },

    // {
    //   name: "MEMES",
    //   desc: "Memes Sharing",
    //   alt: "pvx-memes",
    //   img: memeImg,
    //   link: "",
    //   id: "919557666582-1551346051@g.us",
    //   isCopied: false,
    // },
    // {
    //   name: "STICKER",
    //   desc: "Sticker Sharing",
    //   alt: "pvx-sticker-chat",
    //   img: sticker1Img,
    //   link: "",
    //   id: "919557666582-1580308963@g.us",
    //   isCopied: false,
    // },
    // {
    //   name: "STICKER ONLY 1.0",
    //   desc: "Admin Only",
    //   alt: "pvx-sticker-only-1.0",
    //   img: stickerOnlyImg,
    //   link: "",
    //   id: "919557666582-1628610549@g.us",
    //   isCopied: false,
    // },
    // {
    //   name: "STICKER ONLY 2.0",
    //   desc: "Admin Only",
    //   alt: "pvx-sticker-only-2.0",
    //   img: stickerOnlyImg,
    //   link: "",
    //   id: "919557666582-1586018947@g.us",
    //   isCopied: false,
    // },
    // {
    //   name: "ANIME",
    //   desc: "Discussion",
    //   alt: "pvx-anime",
    //   img: animeImg,
    //   link: "",
    //   id: "919557666582-1556821647@g.us",
    //   isCopied: false,
    // },
    // {
    //   name: "CRYPTO",
    //   desc: "Discussion",
    //   alt: "pvx-crypto-discussion",
    //   img: cryptoImg,
    //   link: "",
    //   id: "918329198682-1614096949@g.us",
    //   isCopied: false,
    // },
    // {
    //   name: "GAMING",
    //   desc: "Discussion",
    //   alt: "pvx-gaming",
    //   img: gamingImg,
    //   link: "",
    //   id: "17028054150-1608057174@g.us",
    //   isCopied: false,
    // },
    // {
    //   name: "BOT",
    //   desc: "Whatsapp Bot",
    //   alt: "pvx-whatsapp-bot",
    //   img: botImg,
    //   link: "",
    //   id: "919675642959-1606755119@g.us",
    //   isCopied: false,
    // },
    // {
    //   name: "STUDIES",
    //   desc: "Discussion",
    //   alt: "pvx-studies",
    //   img: studiesImg,
    //   link: "",
    //   id: "919557666582-1617595892@g.us",
    //   isCopied: false,
    // },
    // {
    //   name: "FOOD",
    //   desc: "Discussion",
    //   alt: "pvx-food",
    //   img: foodImg,
    //   link: "",
    //   id: "120363039452453480@g.us",
    //   isCopied: false,
    // },
    // {
    //   name: "STATUS",
    //   desc: "Whatsapp Status",
    //   alt: "pvx-whatsapp-status",
    //   img: statusImg,
    //   link: "",
    //   id: "919557666582-1627834788@g.us",
    //   isCopied: false,
    // },
  ];
  return whatsappGroups;
}
