import { millisecondsToMinutes as _millisecondsToMinutes } from "date-fns";
import { reactify } from "@vueuse/shared";

export const millisecondsToMinutes = reactify(_millisecondsToMinutes);