import { subQuarters as _subQuarters } from "date-fns";
import { reactify } from "@vueuse/shared";

export const subQuarters = reactify(_subQuarters);