import { isTuesday as _isTuesday } from "date-fns";
import { reactify } from "@vueuse/core";

export const isTuesday = reactify(_isTuesday);