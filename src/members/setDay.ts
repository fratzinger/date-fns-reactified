import { setDay as _setDay } from "date-fns";
import { reactify } from "@vueuse/shared";

export const setDay = reactify(_setDay);