import { secondsToMinutes as _secondsToMinutes } from "date-fns";
import { reactify } from "@vueuse/core";

export const secondsToMinutes = reactify(_secondsToMinutes);