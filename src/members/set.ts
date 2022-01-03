import { set as _set } from "date-fns";
import { reactify } from "@vueuse/shared";

export const set = reactify(_set);