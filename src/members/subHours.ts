import { subHours as _subHours } from "date-fns";
import { reactify } from "@vueuse/core";

export const subHours = reactify(_subHours);