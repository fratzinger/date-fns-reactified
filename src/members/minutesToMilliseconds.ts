import { minutesToMilliseconds as _minutesToMilliseconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const minutesToMilliseconds = reactify(_minutesToMilliseconds);