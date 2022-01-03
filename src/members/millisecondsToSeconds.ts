import { millisecondsToSeconds as _millisecondsToSeconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const millisecondsToSeconds = reactify(_millisecondsToSeconds);