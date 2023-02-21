# Fetching data in react

```jsx title='Fetch Method'
function Fetcher() {
  const [data, setData] = useState < string > "";
  useEffect(() => {
    fetch("site")
      .then((response) => rensponse.json())
      .then((json) => setData(json));
  }, []);
  return data;
}
```

```jsx title='Axios'
function Fetcher() {
  const [data, setData] = useState < string > "";
  useEffect(() => {
    async () => {
      try {
        const result = await axios.get("site");
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
  })();
  return data;
}
```

```jsx title='Custom fetch'
const useFetch = (url) => {
  const [data, setData] = useState < string > "";
  const [loading, setLoading] = useState < boolean > false;
  const [serverError, setServerError] = useState < string > "";
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        const respData = await resp?.data;
        setData(respData);
        setLoading(false);
      } catch (error) {
        setServerError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, data, serverError };
};
```

```jsx title='React Query Lib'
import axios from "axios";
import { useQuery } from "react-query";

function Fetcher() {
  const { isLoading, error, data } = useQuery("posts", () => axios("url"));
  return { isLoading, error, data };
}
```
