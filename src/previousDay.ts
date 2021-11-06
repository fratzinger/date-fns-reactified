import { previousDay as _previousDay } from "date-fns";
import { reactify } from "@vueuse/core";

export const previousDay = reactify(_previousDay);