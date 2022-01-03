import { minutesToMilliseconds as _minutesToMilliseconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const minutesToMilliseconds = reactify(_minutesToMilliseconds);