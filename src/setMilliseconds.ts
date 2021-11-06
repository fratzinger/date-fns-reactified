import { setMilliseconds as _setMilliseconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const setMilliseconds = reactify(_setMilliseconds);