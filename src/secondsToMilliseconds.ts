import { secondsToMilliseconds as _secondsToMilliseconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const secondsToMilliseconds = reactify(_secondsToMilliseconds);