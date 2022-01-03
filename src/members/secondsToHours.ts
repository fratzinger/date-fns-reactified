import { secondsToHours as _secondsToHours } from "date-fns";
import { reactify } from "@vueuse/shared";

export const secondsToHours = reactify(_secondsToHours);