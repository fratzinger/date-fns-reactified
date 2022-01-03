import { isWithinInterval as _isWithinInterval } from "date-fns";
import { reactify } from "@vueuse/core";

export const isWithinInterval = reactify(_isWithinInterval);