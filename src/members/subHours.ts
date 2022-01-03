import { subHours as _subHours } from "date-fns";
import { reactify } from "@vueuse/shared";

export const subHours = reactify(_subHours);