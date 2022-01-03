import { secondsToMilliseconds as _secondsToMilliseconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const secondsToMilliseconds = reactify(_secondsToMilliseconds);