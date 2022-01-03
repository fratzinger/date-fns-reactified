import { getUnixTime as _getUnixTime } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getUnixTime = reactify(_getUnixTime);