import { previousSaturday as _previousSaturday } from "date-fns";
import { reactify } from "@vueuse/core";

export const previousSaturday = reactify(_previousSaturday);