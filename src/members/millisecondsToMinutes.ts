import { millisecondsToMinutes as _millisecondsToMinutes } from "date-fns";
import { reactify } from "@vueuse/core";

export const millisecondsToMinutes = reactify(_millisecondsToMinutes);