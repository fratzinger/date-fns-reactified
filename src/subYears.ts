import { subYears as _subYears } from "date-fns";
import { reactify } from "@vueuse/core";

export const subYears = reactify(_subYears);