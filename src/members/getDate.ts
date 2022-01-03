import { getDate as _getDate } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getDate = reactify(_getDate);