import { previousDay as _previousDay } from "date-fns";
import { reactify } from "@vueuse/shared";

export const previousDay = reactify(_previousDay);