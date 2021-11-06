import { getDate as _getDate } from "date-fns";
import { reactify } from "@vueuse/core";

export const getDate = reactify(_getDate);