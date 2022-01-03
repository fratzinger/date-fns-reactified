import { getWeek as _getWeek } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getWeek = reactify(_getWeek);