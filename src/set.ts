import { set as _set } from "date-fns";
import { reactify } from "@vueuse/core";

export const set = reactify(_set);