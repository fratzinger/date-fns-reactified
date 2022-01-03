import { differenceInWeeks as _differenceInWeeks } from "date-fns";
import { reactify } from "@vueuse/core";

export const differenceInWeeks = reactify(_differenceInWeeks);