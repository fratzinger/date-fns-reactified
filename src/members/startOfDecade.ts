import { startOfDecade as _startOfDecade } from "date-fns";
import { reactify } from "@vueuse/shared";

export const startOfDecade = reactify(_startOfDecade);