
const imageSeeder = () => {
  const photoArr = [
    'https://imgur.com/dFt5Vp7',
    'https://imgur.com/GIjDs2Z',
    'https://imgur.com/lbo0tID',
    'https://imgur.com/pWMrSOX',
    'https://imgur.com/7rHZXHm',
    'https://imgur.com/WSzV4Y5',
    'https://imgur.com/locZ7ga',
    'https://imgur.com/39lNeqn',
    'https://imgur.com/PS4XYPC',
    'https://imgur.com/9Fvj0Ma',
    'https://imgur.com/F5LllA4',
    'https://imgur.com/I4Lq0tj',
    'https://imgur.com/dVAlPBd',
    'https://imgur.com/tOk0XfQ',
    'https://imgur.com/KpNSHUS',
    'https://imgur.com/vE0vnFx',
    'https://imgur.com/VlfCDv7',
    'https://imgur.com/FYrQsgc',
    'https://imgur.com/Nd1gSBr',
    'https://imgur.com/KWSsxVb',
    'https://imgur.com/4oLlklt',
    'https://imgur.com/B3HHnX0',
    'https://imgur.com/pAg6DUz',
    'https://imgur.com/vjoeY2K',
    'https://imgur.com/jYD44XW',
    'https://imgur.com/XoMYNGK',
    'https://imgur.com/Tc8u4OY',
    'https://imgur.com/vSwK0MH',
    'https://imgur.com/GCMuQg9',
    'https://imgur.com/2sEyFGt',
  ];

  return photoArr[Math.floor(Math.random() * 30)];
};

module.exports = imageSeeder;