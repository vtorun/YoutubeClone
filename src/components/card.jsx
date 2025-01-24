import { Link } from "react-router-dom";
import millify from "millify";
import { useState } from "react";

const Card = ({ item,isRow }) => {
  const [isHover, setIsHover] = useState(false);
  if (item.type !== "video") return null;
  const thumbnail = item.thumbnail[item.thumbnail.length - 1].url;
  const gif = item.richThumbnail && item.richThumbnail[0].url;
  const channelPic = item.channelThumbnail && item.channelThumbnail[0].url;
  return (
    <Link
      to={`/watch?v=${item.videoId}`}
      className={isRow ? "row" : "col"}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div>
        <img
          src={isHover && !item.isLive && gif ? gif : thumbnail}
          alt=""
          className="rounded-lg w-full h-full"
        ></img>
      </div>
      <div className="flex gap-4">
        <img src={channelPic} className="size-14 rounded-full"></img>
        <div>
          <h4 className="font-bold line-clamp-2">{item.title}</h4>
          <p>{item.channelTitle}</p>
          <div className="flex gap-3 items-center">
            <p>
              <span>{millify(item.viewCount)}</span>
              <span className="text-sm ms-1">Görüntüleme</span>
            </p>
            *
            {item.isLive ? (
              <p className="bg-red-500 py-0.5 px-2 rounded-lg">Canlı</p>
            ) : (
              <p>{item.publishedTimeText}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
