import { secondsToHours as _secondsToHours } from "date-fns";
import { reactify } from "@vueuse/core";

export const secondsToHours = reactify(_secondsToHours);