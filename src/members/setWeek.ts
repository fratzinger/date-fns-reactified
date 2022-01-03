import { setWeek as _setWeek } from "date-fns";
import { reactify } from "@vueuse/shared";

export const setWeek = reactify(_setWeek);