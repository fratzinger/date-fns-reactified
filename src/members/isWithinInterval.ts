import { isWithinInterval as _isWithinInterval } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isWithinInterval = reactify(_isWithinInterval);