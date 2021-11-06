import { nextTuesday as _nextTuesday } from "date-fns";
import { reactify } from "@vueuse/core";

export const nextTuesday = reactify(_nextTuesday);