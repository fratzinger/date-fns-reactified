import { areIntervalsOverlapping as _areIntervalsOverlapping } from "date-fns";
import { reactify } from "@vueuse/core";

export const areIntervalsOverlapping = reactify(_areIntervalsOverlapping);