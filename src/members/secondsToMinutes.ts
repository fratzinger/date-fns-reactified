import { secondsToMinutes as _secondsToMinutes } from "date-fns";
import { reactify } from "@vueuse/shared";

export const secondsToMinutes = reactify(_secondsToMinutes);