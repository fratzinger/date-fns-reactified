import { subBusinessDays as _subBusinessDays } from "date-fns";
import { reactify } from "@vueuse/core";

export const subBusinessDays = reactify(_subBusinessDays);