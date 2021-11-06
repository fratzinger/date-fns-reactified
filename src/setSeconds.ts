import { setSeconds as _setSeconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const setSeconds = reactify(_setSeconds);