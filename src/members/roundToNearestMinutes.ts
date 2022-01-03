import { roundToNearestMinutes as _roundToNearestMinutes } from "date-fns";
import { reactify } from "@vueuse/shared";

export const roundToNearestMinutes = reactify(_roundToNearestMinutes);