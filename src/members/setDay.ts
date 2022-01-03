import { setDay as _setDay } from "date-fns";
import { reactify } from "@vueuse/core";

export const setDay = reactify(_setDay);