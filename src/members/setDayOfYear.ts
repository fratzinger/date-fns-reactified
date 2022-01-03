import { setDayOfYear as _setDayOfYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const setDayOfYear = reactify(_setDayOfYear);