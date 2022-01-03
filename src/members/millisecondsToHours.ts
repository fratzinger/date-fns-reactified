import { millisecondsToHours as _millisecondsToHours } from "date-fns";
import { reactify } from "@vueuse/shared";

export const millisecondsToHours = reactify(_millisecondsToHours);