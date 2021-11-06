import { getSeconds as _getSeconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const getSeconds = reactify(_getSeconds);