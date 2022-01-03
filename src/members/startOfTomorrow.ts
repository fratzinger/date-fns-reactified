import { startOfTomorrow as _startOfTomorrow } from "date-fns";
import { reactify } from "@vueuse/core";

export const startOfTomorrow = reactify(_startOfTomorrow);