import { setWeekYear as _setWeekYear } from "date-fns";
import { reactify } from "@vueuse/shared";

export const setWeekYear = reactify(_setWeekYear);