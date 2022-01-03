import { setDayOfYear as _setDayOfYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const setDayOfYear = reactify(_setDayOfYear);