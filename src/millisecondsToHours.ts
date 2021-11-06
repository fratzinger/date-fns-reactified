import { millisecondsToHours as _millisecondsToHours } from "date-fns";
import { reactify } from "@vueuse/core";

export const millisecondsToHours = reactify(_millisecondsToHours);