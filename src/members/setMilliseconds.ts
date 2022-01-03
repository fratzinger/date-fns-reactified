import { setMilliseconds as _setMilliseconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const setMilliseconds = reactify(_setMilliseconds);