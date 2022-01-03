import { getOverlappingDaysInIntervals as _getOverlappingDaysInIntervals } from "date-fns";
import { reactify } from "@vueuse/shared";

export const getOverlappingDaysInIntervals = reactify(_getOverlappingDaysInIntervals);