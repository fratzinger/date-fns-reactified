import { previousWednesday as _previousWednesday } from "date-fns";
import { reactify } from "@vueuse/core";

export const previousWednesday = reactify(_previousWednesday);