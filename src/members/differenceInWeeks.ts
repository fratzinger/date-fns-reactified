import { differenceInWeeks as _differenceInWeeks } from "date-fns";
import { reactify } from "@vueuse/shared";

export const differenceInWeeks = reactify(_differenceInWeeks);