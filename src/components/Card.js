import React from "react";
import moment from "moment/moment";
import CardDetails from "./CardDetails";
function Card({ data }) {
  return (
    <>
      <div className="cardsSection">
        <div>
          <div className="PostsDate">{moment("2021-06-17").format("LL")}</div>
          <div className="Cards">
            {data.posts_by_date["2021-06-17"].map((data) => {
              return (
                <div className="Card">
                  <CardDetails dataDetails={data} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="PostsDate">{moment("2021-07-01").format("LL")}</div>
          <div className="Cards">
            {data.posts_by_date["2021-07-01"].map((data) => {
              return (
                <div className="Card">
                  <CardDetails dataDetails={data} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
