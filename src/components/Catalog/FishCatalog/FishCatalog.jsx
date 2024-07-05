import data from "./data_fish.js";
import "./FishCatalog.css";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import { forwardRef } from "react";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Select from "react-select";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FishCatalog() {
  const [open, setOpen] = useState(false);
  const [fish, setFish] = useState("");

  const handleChange = (event) => {
    setFish(event);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="fish__catalog">
        {data.map((item) => (
          <div key={item.id}>
            <div className="fish__catalog__title">
              <p className="fish__catalog__title__p">{item.title}</p>
            </div>

            <div className="fish__catalog__cards">
              {item.cards?.map((card) => (
                <div key={card.id} className="catalog__card">
                  {card.img ? (
                    <img
                      src={card.img}
                      alt={card.title}
                      height={300}
                      className="fish__catalog__card__img"
                    />
                  ) : (
                    <img
                      src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?t=st=1718988878~exp=1718992478~hmac=3b681701eed086ed302eb39e2b522dc264c398bca102d4b948946cda35b15460&w=826 "
                      alt="fish"
                      height={300}
                      className="fish__catalog__card__img"
                    />
                  )}
                  <div className="fish__catalog__card">
                    <p className="fish__catalog__card__name">{card.name}</p>
                    {card.weight.split(",").map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        sx={{ marginRight: "5px", fontSize: "16px" }}
                      />
                    ))}
                    <div className="fish__catalog__card__characteristics">
                      {card.characteristics.split(",").map((item) => (
                        <p key={item}>
                          {item}
                          <hr />
                        </p>
                      ))}
                    </div>
                    <div className="fish__catalog__card__description">
                      <p>{card.description}</p>
                    </div>
                    <div className="fish__catalog__card__button">
                      <button
                        className="intro__button"
                        onClick={handleClickOpen}
                      >
                        Узнать о наличии
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Dialog
        sx={{ borderRadius: "45px" }}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        TransitionComponent={Transition}
      >
        <div className="dialog__container">
          <div className="dialog">
            <DialogTitle
              sx={{
                fontFamily: "Forum",
                fontWeight: 400,
                fontSize: 48,
                padding: 0,
                margin: 0,
              }}
            >
              Оставьте контакты, и мы свяжемся с вами
            </DialogTitle>
            <div className="dialog__input">
              <div className="dialog__input__text">
                <TextField id="standard-basic" label="Имя" variant="standard" />
                <TextField id="standard-basic" label="+7" variant="standard" />
              </div>
              <TextField
                id="standard-basic"
                label="E-mail"
                variant="standard"
              />
              <Select
                isClearable
                placeholder="Виды рыбы"
                isMulti
                value={fish}
                onChange={(e) => handleChange(e)}
                options={fishCatalog}
              />
              <button className="dialog__input__button">Отправить</button>
              <p className="dialog__input__politic">
                Нажимая кнопку “Отправить”, вы даете согласие на обработку
                персональных данных и соглашаетесь с{" "}
                <strong>
                  <a href="#">политикой в отношении персональных данных</a>
                </strong>
              </p>
            </div>
          </div>
          <img
            src="../../static/background/ship-wheel.png"
            alt="wheel"
            className="dialog__wheel"
          />
        </div>
      </Dialog>
    </>
  );
}

const fishCatalog = [
  {
    label: "Слабосолёная",
    options: [
      {
        value: "Сельдь 100/150г ломтики",
        label: "Сельдь 100/150г ломтики",
      },
      {
        value: "Кета 120г ломтики",
        label: "Кета 120г ломтики",
      },
      {
        value: "Кета 200г филе-кусок",
        label: "Кета 200г филе-кусок",
      },
      {
        value: "Сельдь 250г филе",
        label: "Сельдь 250г филе",
      },
      {
        value: "Форель 150г филе-кусок",
        label: "Форель 150г филе-кусок",
      },
      {
        value: "Форель 100г ломтики",
        label: "Форель 100г ломтики",
      }
    ],
  },
  {
    label: "Холодное копчение",
    options: [
      {
        value: "Палтус 150г филе",
        label: "Палтус 150г филе",
      },
      {
        value: "Палтус 100г ломтики",
        label: "Палтус 100г ломтики",
      },
      {
        value: "Палтус 200г филе-кусок",
        label: "Палтус 200г филе-кусок",
      },
    ],
  }
];