import data from "./data_fish.js";
import "./FishCatalog.css";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import { forwardRef } from "react";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import { MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function FishCatalog() {
  const [open, setOpen] = useState(false);
  const [fish, setFish] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFish(
      typeof value === "string" ? value.split(",") : value
    );
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
              <FormControl sx={{ width: 400 }}>
                <InputLabel id="demo-multiple-chip-label">Каталог</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={fish}
                  onChange={handleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {/* <div className="dialog__fish__menu"> */}
                  {fishCatalog.map((item) => (
                    <MenuItem
                      key={item}
                      value={item}
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      {item}
                    </MenuItem>
                  ))}
                  {/* </div> */}
                </Select>
              </FormControl>
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
  "Слабосолёная Сельдь 100/150г ломтики",
  "Слабосолёная Кета 120г ломтики",
  "Слабосолёная Кета 200г филе-кусок",
  "Слабосолёная Сельдь 250г филе",
  "Слабосолёная Форель 150г филе-кусок",
  "Слабосолёная Форель 100г ломтики",
];

// const fishCatalog = [
//   {
//     id: 1,
//     title: "Слабосолёная",
//     value: [
//       {
//         id: 1.1,
//         label: "Сельдь 100/150г ломтики",
//       },
//       {
//         id: 1.2,
//         label: "Кета 120г ломтики",
//       },
//       {
//         id: 1.7,
//         label: "Кета 200г филе-кусок",
//       },
//       {
//         id: 1.4,
//         label: "Сельдь 250г филе",
//       },
//       {
//         id: 1.5,
//         label: "Форель 150г филе-кусок",
//       },
//       {
//         id: 1.6,
//         label: "Форель 100г ломтики",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Холодное копчение",
//     value: [
//       {
//         id: 2.1,
//         label: "Горбуша",
//       },
//       {
//         id: 2.2,
//         label: "Карась",
//       },
//       {
//         id: 2.3,
//         label: "Рыба",
//       },
//     ],
//   },
// ];
