import { getMinutes as _getMinutes } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getMinutes = reactify(_getMinutes);