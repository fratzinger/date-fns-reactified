import { getDay as _getDay } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getDay = reactify(_getDay);