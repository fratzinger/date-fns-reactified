import { setWeek as _setWeek } from "date-fns";
import { reactify } from "@vueuse/core";

export const setWeek = reactify(_setWeek);