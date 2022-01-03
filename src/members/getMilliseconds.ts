import { getMilliseconds as _getMilliseconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const getMilliseconds = reactify(_getMilliseconds);