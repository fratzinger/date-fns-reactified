import { lastDayOfDecade as _lastDayOfDecade } from "date-fns";
import { reactify } from "@vueuse/core";

export const lastDayOfDecade = reactify(_lastDayOfDecade);