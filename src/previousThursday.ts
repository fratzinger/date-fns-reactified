import { previousThursday as _previousThursday } from "date-fns";
import { reactify } from "@vueuse/core";

export const previousThursday = reactify(_previousThursday);