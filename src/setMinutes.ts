import { setMinutes as _setMinutes } from "date-fns";
import { reactify } from "@vueuse/core";

export const setMinutes = reactify(_setMinutes);