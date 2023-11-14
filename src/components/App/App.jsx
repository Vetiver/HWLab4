import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import style from "./App.module.css";
import Card from "../Card/Card";

function App() {
  const [cardArray, setCardArray] = useState([]);
  // eslint-disable-next-line no-dupe-keys
  const [form, setInputValue] = useState({ formTitle: "", formPrice: "", formImage: "" });
  const onInputChange = (e) => {
    setInputValue({ ...form, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    setCardArray((prevArray) => [
      ...prevArray,
      {
        title: form.formTitle,
        price: form.formPrice,
        image: form.formImage
      },
    ]);
  };
  return (
    <ChakraProvider>
      <form onSubmit={submit} className={style.form}>
        <input
          placeholder={"Название карточки"}
          onChange={onInputChange}
          name={"formTitle"}
          value={form.formTitle}
        />
        <input
          placeholder={"Цена"}
          onChange={onInputChange}
          name={"formPrice"}
          value={form.formPrice}
        />
         <input
          placeholder={"Картинка"}
          onChange={onInputChange}
          name={"formImage"}
          value={form.name}
        />
        <button>
          <p className={style.text}>добавить карточку</p>
        </button>
      </form>
      <div className={style.container}>
        {cardArray &&
          cardArray?.map((el, index) => {
            return (
              <Card key={index} cardTitle={el.title} cardPrice={el.price} cardImage={el.image} />
            );
          })}
      </div>
    </ChakraProvider>
  );
}

export default App;
