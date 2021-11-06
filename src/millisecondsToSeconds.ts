import { millisecondsToSeconds as _millisecondsToSeconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const millisecondsToSeconds = reactify(_millisecondsToSeconds);