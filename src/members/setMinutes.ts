import { setMinutes as _setMinutes } from "date-fns";
import { reactify } from "@vueuse/shared";

export const setMinutes = reactify(_setMinutes);