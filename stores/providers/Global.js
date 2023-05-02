import Store from "../Store";
import { observable } from "mobx";

export default class GlobalStore extends Store {
  user = "GLOBAL USER"
}
