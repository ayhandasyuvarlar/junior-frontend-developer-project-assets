import moment from "moment/moment";
import Actions from "../toolbox/Actions";
import PostStatics from "../toolbox/PostStatics";
import SosialMedia from "../toolbox/SosialMedia";
const CardDetails = ({ dataDetails }) => {
  return (
    <>
      {dataDetails.is_published === true ? (
        <div className="channelTrue" id={dataDetails.account.channel}>
          <SosialMedia
            sosial={dataDetails.account.channel}
            link={dataDetails.link}
          />
        </div>
      ) : (
        <div className="channelFalse" id={dataDetails.account.channel} >
          <SosialMedia
            sosial={dataDetails.account.channel}
            link={dataDetails.link}
          />
        </div>
      )}
      <div className="CardDetails">
        <div className="cardDateandActions">
          {moment(dataDetails.published_at).format("LL , LT")}
          <Actions data={dataDetails} />
        </div>
        <div className="activeMessage">{dataDetails.entry.message}</div>
        <div className="cardActive">
          <img src={dataDetails.entry.image[0]} alt="" />
        </div>
        <PostStatics />
      </div>
    </>
  );
};

export default CardDetails;
