import React from "react";
import { useState } from "react";

const Carousel = ({ projets }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
};

const goToNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % projets.length);
};

export default Carousel;
