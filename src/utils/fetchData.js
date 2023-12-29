export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-NinjaAPI-Host": "api.api-ninjas.com",
    "X-Api-Key": process.env.REACT_APP_API_KEY,
    "X-Requested-With": "XMLHttpRequest",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Assuming response is JSON data
    const data = await response.blob();
    return data;
  } catch (error) {
    throw new Error("Fetch error:", error);
  }
};
