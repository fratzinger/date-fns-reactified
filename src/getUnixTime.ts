import { getUnixTime as _getUnixTime } from "date-fns";
import { reactify } from "@vueuse/core";

export const getUnixTime = reactify(_getUnixTime);