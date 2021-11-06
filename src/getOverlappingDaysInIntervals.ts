import { getOverlappingDaysInIntervals as _getOverlappingDaysInIntervals } from "date-fns";
import { reactify } from "@vueuse/core";

export const getOverlappingDaysInIntervals = reactify(_getOverlappingDaysInIntervals);