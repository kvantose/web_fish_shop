import { data, fishCatalog } from "./data_fish.js";
import Success from "../Alerts/Success.jsx";
import Error from "../Alerts/Error.jsx";
import "./FishCatalog.css";
import Chip from "@mui/material/Chip";
import { useEffect, useState } from "react";
import { forwardRef } from "react";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Input from 'react-phone-number-input/input'


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FishCatalog() {
  const [open, setOpen] = useState(false);
  const [fish, setFish] = useState("");
  const [phone, setPhone] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setOpen(false);
          setIsSuccess(true);
          setBackdrop(false);
        },
        () => {
          setOpen(false);
          setIsError(true);
          setBackdrop(false);
        }
      );
  };

  useEffect(() => {
    if (isSuccess || isError) {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 8000);
    }
  });

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
      {isSuccess && <Success />}
      {isError && <Error />}
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
                        sx={{
                          marginRight: "5px",
                          fontSize: "16px",
                          "@media (max-width: 1200px)": {
                            fontSize: "14px",
                            marginRight: "1px",
                          },
                          "@media (max-width: 850px)": {
                            fontSize: "12px",
                          },
                        }}
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
                        className="button__catalog"
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
        <CloseIcon
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            zIndex: 1,
          }}
          onClick={handleClose}
        />
        {backdrop && (
          <Box sx={{ position: "absolute", top: "50%", left: "50%" }}>
            <CircularProgress />
          </Box>
        )}
        <div className="dialog__container">
          <div className="dialog">
            <DialogTitle
              sx={{
                fontFamily: "Forum",
                fontWeight: 400,
                fontSize: 48,
                padding: 0,
                margin: 0,
                "@media (max-width: 1000px)": {
                  fontSize: 34,
                },
                "@media (max-width: 550px)": {
                  fontSize: 24,
                },
              }}
            >
              Оставьте контакты, и мы свяжемся с вами
            </DialogTitle>
            <form ref={form} onSubmit={sendEmail}>
              <div className="dialog__input">
                <div className="dialog__input__text">
                  <TextField
                    id="standard-basic"
                    label="Имя"
                    variant="standard"
                    name="user_name"
                    type="text"
                  />
                  {/* <TextField
                    id="standard-basic"
                    label="+7"
                    variant="standard"
                    name="user_tel"
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                  /> */}
                  <Input
                    placeholder="Телефон"
                    value={phone}
                    onChange={setPhone}
                    name="user_tel"
                    className="dialog__input__tel"
                  />
                </div>
                <TextField
                  id="standard-basic"
                  label="E-mail"
                  variant="standard"
                  name="user_mail"
                  type="email"
                />
                <Select
                  isClearable
                  placeholder="Виды рыбы"
                  isMulti
                  value={fish}
                  onChange={(e) => handleChange(e)}
                  options={fishCatalog}
                  name="fish"
                  type="text"
                />
                <button
                  className="dialog__input__button"
                  type="submit"
                  onClick={() => setBackdrop(true)}
                >
                  Отправить
                </button>
                <p className="dialog__input__politic">
                  Нажимая кнопку “Отправить”, вы даете согласие на обработку
                  персональных данных и соглашаетесь с{" "}
                  <strong>
                    <a href="#">политикой в отношении персональных данных</a>
                  </strong>
                </p>
              </div>
            </form>
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
