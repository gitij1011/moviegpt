export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:'Bearer '+process.env.REACT_APP_TMDB_KEY
    }
  };

  export const IMAGEURL="https://image.tmdb.org/t/p/w500/"
  export const BGURL="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg"

  export const SUPPORTED_LANG=[
    {
      identifier:"en",
      name:"English"
    },
    {
      identifier:"hn",
      name:"Hindi"
    },
    {
      identifier:"french",
      name:"French"
    }
  ]

 export const GEMINIAI_KEY=process.env.REACT_APP_GEMINIAI_KEY