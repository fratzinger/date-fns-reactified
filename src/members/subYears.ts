import { subYears as _subYears } from "date-fns";
import { reactify } from "@vueuse/shared";

export const subYears = reactify(_subYears);