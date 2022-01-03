import { subDays as _subDays } from "date-fns";
import { reactify } from "@vueuse/shared";

export const subDays = reactify(_subDays);