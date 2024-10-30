const axios = require("axios");

const mainFun = async () => {
  const response = await axios.post(
    "https://httpdump.app/dumps/36955d14-ab3a-40c6-8ddc-2d2611c2d91f?a=2&b=3",
    {
      username: "Rahul Shah",
      Password: "ADfsadfasdfas",
    },
    {
      headers: {
        Authorization: "Bearer 124",
      },
    },
  );

  console.log(response.data);
};

mainFun();
