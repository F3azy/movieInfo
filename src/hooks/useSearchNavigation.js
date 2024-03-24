import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function useSearchNavigation() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  function getInput(ev) {
    setInput(ev.target.value);
  }

  function searchOnEnter(ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
      ev.target.blur();
      search();
    }
  }

  function search() {
    if (input !== "") {
      navigate("/" + input.toLowerCase());
    }
  }

  return {getInput, searchOnEnter, search};
}
