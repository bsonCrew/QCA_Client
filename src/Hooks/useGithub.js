import React from "react";

const useGithub = website => {
  const [status, setStatus] = React.useState("idle");
  const [data, setData] = React.useState([]);
  const getQuery = "https://raw.githubusercontent.com/bsonCrew/QCA_Client/main/README.md";

  async function fetchFromGithb() {
    const response = await fetch(getQuery);
    const mdFile = await response.text();
    setData(mdFile);
  }

  React.useEffect(() => {
    fetchFromGithb();
  }, []);

  React.useEffect(() => {
    if (!getQuery) return;

    const fetchWithPost = async () => {
      setStatus("loading");
      try {
        const response = await fetch(getQuery);
        const data = await response.json();
        setStatus("success");
        setData(data);
      } catch (error) {
        setStatus("error");
      }
    };

    fetchWithPost();
  }, [getQuery, website]);

  return [status, data];
};

export default useGithub;
