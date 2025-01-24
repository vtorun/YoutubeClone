import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player";
import Error from "../../components/error";
import Channel from "./Channel.jsx";
import Description from "./Description.jsx";
import Comments from "./Comments.jsx";
import Card from "../../components/card.jsx"
import BasicLoader from "../../components/basicLoader.jsx";

const Detail = () => {
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);
  const [params] = useSearchParams();
  const id = params.get("v");

  useEffect(() => {
    const params = { id, extend: 1, geo: "TR", lang: "tr" };
    api
      .get("/video/info", { params })
      .then((res) => setVideo(res.data))
      .catch((err) => setError(err.message));
  }, [id]);

  return (
    <div className="detail-page h-screen overflow-auto">
      <div className="page-content">
        <div>
          <div className="h-[30vh] md:h-[50vh] lg:h-[60vh] rounded overflow-hidden">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
            />
          </div>
          {error ? (
            <Error msg={error}/>
          ) : !video ? (
           <BasicLoader/>
          ) : (
            <div>
              <h1 className="my-3 text-xl font-bold">{video.title}</h1>
              <Channel video={video}></Channel>
              <Description video={video}></Description>
              <Comments videoId={id}></Comments>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-5 p-1">{video?.relatedVideos.data.map((item, key) => (
            <Card key={key} item={item} isRow={true} />
          ))}</div>
      </div>
    </div>
  );
};

export default Detail;
