import { getTime as _getTime } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getTime = reactify(_getTime);