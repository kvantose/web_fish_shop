import card from "./card";
import "./Feedback.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#CA3313",
  },
});

export default function FeedBack() {
  return (
    <>
      <div className="feedback__img">
        <img src="../../static/background/fish1.png" alt="fish" />
        <img src="../../static/background/buble.png" alt="buble" />
      </div>
      <p className="feedback_p">Отзывы наших клиентов</p>
      <div className="feedback">
        {card.map((item) => (
          <div className="card" key={item.id}>
            <div className="card__header">
              {item.avatar !== "" ? (
                <img src={item.avatar} alt="avatar" className="card__img" />
              ) : (
                <AccountCircleIcon sx={{ fontSize: 80 }} />
              )}
              <div className="card__info">
                <div className="card__name">{item.name}</div>
                <p className="card__position">{item.position}</p>
              </div>
            </div>
            <hr></hr>
            <div className="card__rating">
              <StyledRating
                name="read-only"
                value={item.grade}
                readOnly
                sx={{ fontSize: 38 }}
              />
              <p className="card__review">{item.review}</p>
              <p className="card__date">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
