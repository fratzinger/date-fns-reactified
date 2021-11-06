import { getTime as _getTime } from "date-fns";
import { reactify } from "@vueuse/core";

export const getTime = reactify(_getTime);