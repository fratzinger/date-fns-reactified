import { getSeconds as _getSeconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getSeconds = reactify(_getSeconds);