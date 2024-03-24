import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function useSearchNavigation() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  function getName(ev) {
    setInput(ev.target.value);
  }

  function searchOnEnter(ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
      ev.target.blur();
      searchMovie();
    }
  }

  function searchMovie() {
    if (input !== "") {
      navigate("/" + input.toLowerCase());
    }
  }

  return {getName, searchOnEnter, searchMovie};
}
