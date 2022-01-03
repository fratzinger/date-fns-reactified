import { setWeekYear as _setWeekYear } from "date-fns";
import { reactify } from "@vueuse/core";

export const setWeekYear = reactify(_setWeekYear);