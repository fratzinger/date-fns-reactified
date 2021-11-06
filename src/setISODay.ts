import { setISODay as _setISODay } from "date-fns";
import { reactify } from "@vueuse/core";

export const setISODay = reactify(_setISODay);