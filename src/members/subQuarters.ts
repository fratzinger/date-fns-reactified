import { subQuarters as _subQuarters } from "date-fns";
import { reactify } from "@vueuse/core";

export const subQuarters = reactify(_subQuarters);