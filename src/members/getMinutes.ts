import { getMinutes as _getMinutes } from "date-fns";
import { reactify } from "@vueuse/core";

export const getMinutes = reactify(_getMinutes);