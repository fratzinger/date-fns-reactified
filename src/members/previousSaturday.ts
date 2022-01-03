import { previousSaturday as _previousSaturday } from "date-fns";
import { reactify } from "@vueuse/shared";

export const previousSaturday = reactify(_previousSaturday);