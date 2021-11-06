import { startOfDecade as _startOfDecade } from "date-fns";
import { reactify } from "@vueuse/core";

export const startOfDecade = reactify(_startOfDecade);