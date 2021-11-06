import { roundToNearestMinutes as _roundToNearestMinutes } from "date-fns";
import { reactify } from "@vueuse/core";

export const roundToNearestMinutes = reactify(_roundToNearestMinutes);