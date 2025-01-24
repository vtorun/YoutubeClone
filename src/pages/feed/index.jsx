import { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Card from "../../components/card"
import api from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import Error from "../../components/error";
import Loader from "../../components/loader";

const Feed = () => {
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState(null);
  const [params] = useSearchParams();
  const selectedCategory = params.get("category");
  useEffect(() => {
    setVideos(null);
    const url = !selectedCategory
      ? "/home"
      : selectedCategory === "trending"
      ? "/trending"
      : `/search?query=${selectedCategory}`;
    api
      .get("/home")
      .then((response) => setVideos(response.data.data))
      .catch((error) => setError(error.message));
  }, [selectedCategory]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="cardVideos">
        {error ? (
          <Error errorMessage={error}/>
        ) : !videos ? (
         <Loader/>
        ) : (
          videos.map((item, uniqueKey) => 
          <Card key={uniqueKey} item={item}/>)
        )} 
      </div>
    </div>
  );
};

export default Feed;
