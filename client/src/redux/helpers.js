export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("jwttoken"),
    },
  };

  return headers;
};
