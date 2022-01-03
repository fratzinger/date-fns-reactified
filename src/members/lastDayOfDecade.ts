import { lastDayOfDecade as _lastDayOfDecade } from "date-fns";
import { reactify } from "@vueuse/shared";

export const lastDayOfDecade = reactify(_lastDayOfDecade);