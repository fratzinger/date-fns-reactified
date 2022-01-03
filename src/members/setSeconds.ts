import { setSeconds as _setSeconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const setSeconds = reactify(_setSeconds);