import { subDays as _subDays } from "date-fns";
import { reactify } from "@vueuse/core";

export const subDays = reactify(_subDays);