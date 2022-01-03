import { getDay as _getDay } from "date-fns";
import { reactify } from "@vueuse/core";

export const getDay = reactify(_getDay);