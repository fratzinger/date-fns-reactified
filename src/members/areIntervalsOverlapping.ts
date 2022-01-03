import { areIntervalsOverlapping as _areIntervalsOverlapping } from "date-fns";
import { reactify } from "@vueuse/shared";

export const areIntervalsOverlapping = reactify(_areIntervalsOverlapping);