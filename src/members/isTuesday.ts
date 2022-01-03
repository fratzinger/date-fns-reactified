import { isTuesday as _isTuesday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isTuesday = reactify(_isTuesday);