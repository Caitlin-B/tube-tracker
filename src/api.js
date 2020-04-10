import axios from "axios";

export const fetchStatus = () => {
  return axios
    .get("https://api.tfl.gov.uk/Line/Mode/tube/Status")
    .then(({ data }) => data);
};
