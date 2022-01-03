import { setISODay as _setISODay } from "date-fns";
import { reactify } from "@vueuse/shared";

export const setISODay = reactify(_setISODay);