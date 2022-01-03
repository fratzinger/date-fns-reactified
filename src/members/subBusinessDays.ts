import { subBusinessDays as _subBusinessDays } from "date-fns";
import { reactify } from "@vueuse/shared";

export const subBusinessDays = reactify(_subBusinessDays);