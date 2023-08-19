/** @format */
import whiskey from "../images/whiskey.jpg";
import duke from "../images/duke.jpg";
import perry from "../images/perry.jpg";
import tubby from "../images/tubby.jpg";
import { v4 as id } from "uuid";

const dogsData = [
  {
    id,
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible quard dog.",
      "Whiskey wants to cuddle with you!",
    ],
  },
  {
    id,
    name: "Duke",
    age: 3,
    src: duke,
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs.",
    ],
  },
  {
    id,
    name: "Perry",
    age: 4,
    src: perry,
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain.",
    ],
  },
  {
    id,
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore.",
    ],
  },
];

export default dogsData;
