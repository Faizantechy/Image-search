const searchAPI = async (term) => {
  const URL = `https://api.pexels.com/v1/search?query=${term}
`;

  const results = await fetch(URL, {
    method: "GET",
    headers: {
      Authorization: "D7W4gkIGtLGmOWiyzqNDkUr5Yf3e5d6k5rZHRS7ysUhNnLAU1DcTlBg5",
    },
  });
  const data = await results.json();
  return data
};

// Videos Function
export const SearchVideos = async (term) => {
  const URL = `https://api.pexels.com/videos/search?query=${term}
`;

  const results = await fetch(URL, {
    method: "GET",
    headers: {
      Authorization: "D7W4gkIGtLGmOWiyzqNDkUr5Yf3e5d6k5rZHRS7ysUhNnLAU1DcTlBg5",
    },
  });
  const data = await results.json();
  return data
};

export default searchAPI

